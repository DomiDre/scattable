import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ElementsService } from '../services/elements.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Material } from '../services/densities';

interface Node {
  name: string;
  children?: Node[];
}

@Component({
  selector: 'app-sld',
  templateUrl: './sld.component.html',
  styleUrls: ['./sld.component.scss']
})
export class SldComponent implements OnInit {

  nistUrl = 'https://www.ncnr.nist.gov/resources/activation/';
  sldForm = new FormGroup({
    material: new FormControl('Co', [Validators.required]),
    density: new FormControl(8.86),
    thickness: new FormControl(1),
    sourceNeutrons: new FormControl(1),
    sourceXrays: new FormControl(1.5406)
  });

  calculatedResult;
  identifiedElements;
  identifiedMaterials: Observable<Material[]>;

  // displayedColumnsSLD: string[] = ['name', 'molarMass', 'xsld', 'nsld'];
  displayedColumnsElements: string[] = ['name', 'amount', 'molarMass', 'xsf', 'nsl'];


  treeControl = new NestedTreeControl<Node>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Node>();

  constructor(
    public elements: ElementsService,
    private decimalPipe: DecimalPipe
  ) { }

  ngOnInit() {
    this.identifiedMaterials = this.sldForm.get('material').valueChanges
    .pipe(
      startWith(''),
      map(state => state ? this.elements.get_densities(state) : [])
    );
  }

  selectedDensity($event: MatAutocompleteSelectedEvent) {
    const material: Material = $event.option.value;
    this.sldForm.patchValue({
      material: material.symbol,
      density: material.density
  });
  }

  async calculate_sld() {
    const material = this.sldForm.value.material;
    const density = this.sldForm.value.density;
    const thickness = this.sldForm.value.thickness;
    const sourceNeutrons = this.sldForm.value.sourceNeutrons;
    const sourceXrays = this.sldForm.value.sourceXrays;

    const energyXrays = 12.398419843320026 / sourceXrays; // in keV
    const absorptionWavelength = 1.798; // Angstrom

    // parse material to elements and their count
    const elementCounts = this.elements.parseMaterial(material);

    // download if necessary data of all relevant elements
    const loadedElements = await this.elements.get_elements_from_object(elementCounts);

    // add all scattering lengths of element and weight with their respective count
    const xraySLD = {real: 0.0, imag: 0.0};
    const neutronSLD = {value: 0.0, uncertainty: 0.0, imag: 0.0, incoh: 0.0};
    const neutronXs = {total: 0.0, coherent: 0.0, incoherent: 0.0, absorption: 0.0};

    let molarMass = 0.0;

    this.identifiedElements = [];
    for (const element of loadedElements) {
      const elementCount = elementCounts[element.symbol];
      if (!elementCount) {
        console.error('Error must happened while loading ', element);
        break;
      }
      // calc molar mass
      molarMass += element.mass * elementCount;

      // calc xray scattering props
      const xsf = this.elements.get_atomic_scattering_factor(element, energyXrays);
      xraySLD.real += xsf.f1 * elementCount;
      xraySLD.imag += xsf.f2 * elementCount;

      // calc neutron scattering props
      const nsf = element.neutron_scattering;
      if (!nsf) {
        console.error('Didnt find neutron scattering factor of ', element);
        break;
      }

      // calculate coherent cross section from b_c
      const sigmaC = 4 * Math.PI * Math.pow(nsf.b_c.value, 2) * 1e-2; // to unit barn, 1b = 1e-28m^2
      // absorption xs from table, scale to neutron wavelength
      const sigmaA = nsf.absorption_xs.value / absorptionWavelength * sourceNeutrons;
      // total xs from table
      const sigmaS = nsf.total_bound_scattering_xs.value;
      // incoherent xs as difference from total and coherent
      const sigmaI = Math.max(sigmaS - sigmaC, 0.);
      neutronSLD.value += nsf.b_c.value * elementCount; // in fm
      neutronSLD.uncertainty += Math.pow(nsf.b_c.uncertainty * elementCount, 2); // error propagation

      neutronSLD.imag += sigmaA / (2 * sourceNeutrons) * 1e-3 * elementCount; // in fm
      neutronSLD.incoh += Math.sqrt(sigmaI / (4 * Math.PI)) * 1e1 * elementCount; // in fm

      neutronXs.total += sigmaS * elementCount;
      neutronXs.coherent += sigmaC * elementCount;
      neutronXs.incoherent += sigmaI * elementCount;
      neutronXs.absorption += sigmaA * elementCount;

      this.identifiedElements.push({
        name: element.symbol,
        amount: elementCount,
        molarMass: element.mass,
        xrayf1: xsf.f1,
        xrayf2: xsf.f2,
        neutronSL: nsf.b_c
      });
    }
    neutronSLD.uncertainty = Math.sqrt(neutronSLD.uncertainty);

    // scale calculated values to proper unit
    const xrayFactor = density * 2.8179403227e-26 / (molarMass * this.elements.ATOMIC_MASS_UNIT);
    xraySLD.real *= xrayFactor;
    xraySLD.imag *= xrayFactor;

    const neutronFactor =  density * 1e-26 / molarMass / this.elements.ATOMIC_MASS_UNIT;
    neutronSLD.value *= neutronFactor;
    neutronSLD.uncertainty *= neutronFactor;
    neutronSLD.imag *= neutronFactor;
    neutronSLD.incoh *= neutronFactor;

    neutronXs.total *= neutronFactor * 1e-1; // in unit cm
    neutronXs.coherent *= neutronFactor * 1e-1;
    neutronXs.incoherent *= neutronFactor * 1e-1;
    neutronXs.absorption *= neutronFactor * 1e-1;
    // store in tree
    const dataTree = [
      {
        name: material,
        children: [
          {
            name: 'Molar Mass',
            children: [
              {
                name: 'M = ' +
                  this.decimalPipe.transform(molarMass, '1.0-3') + ' g/mol'
              }
            ]
          },
          {
            name: 'SLD<sub>X-Ray</sub>',
            children: [
              {
                name: 'Real: ' +
                  this.decimalPipe.transform(xraySLD.real, '1.0-3') +
                  ' &#183; 10<sup>-6</sup> &#x212B;<sup>-2</sup>'
              },
              {
                name: 'Imaginary: ' +
                  this.decimalPipe.transform(-xraySLD.imag, '1.0-3') +
                  ' &#183; 10<sup>-6</sup> &#x212B;<sup>-2</sup>'
              }
            ]
          },
          {
            name: 'SLD<sub>Neutron</sub>',
            children: [
              {
                name: 'Real: ' +
                  this.decimalPipe.transform(neutronSLD.value, '1.0-3') +
                  '+/-' +
                  this.decimalPipe.transform(neutronSLD.uncertainty, '1.0-3') +
                  ' &#183; 10<sup>-6</sup> &#x212B;<sup>-2</sup>'
              },
              {
                name: 'Imaginary: ' +
                  this.decimalPipe.transform(-neutronSLD.imag, '1.0-3') +
                  ' &#183; 10<sup>-6</sup> &#x212B;<sup>-2</sup>'
              },
              {
                name: 'Incoherent: ' +
                  this.decimalPipe.transform(neutronSLD.incoh, '1.0-3') +
                  ' &#183; 10<sup>-6</sup> &#x212B;<sup>-2</sup>'
              }
            ]
          },
          {
            name: 'Neutron Penetration Depth (1/e)',
            children: [
              {
                name: 'Absorption: ' +
                  this.decimalPipe.transform(1 / (neutronXs.absorption), '1.0-3') +
                  ' cm<sup>-1</sup>'
              },
              {
                name: 'Absorption + Incoherent: ' +
                  this.decimalPipe.transform(1 / (neutronXs.absorption + neutronXs.incoherent), '1.0-3') +
                  ' cm<sup>-1</sup>'
              },
              {
                name: 'Absorption + Incoherent + Coherent: ' +
                  this.decimalPipe.transform(1 / (neutronXs.absorption + neutronXs.total), '1.0-3') +
                  ' cm<sup>-1</sup>'
              },
              {
                name: 'Transmission (abs+inc): ' +
                  this.decimalPipe.transform(Math.exp(- thickness * (neutronXs.absorption + neutronXs.incoherent)) * 100, '1.0-3') +
                  ' %'
              }
            ]
          },
          {
            name: 'Entered Material Parameters',
            children: [
              {
                name: 'Density: ' +
                  density + ' g/mL'
              },
              {
                name: 'Thickness: ' +
                  thickness + ' cm'
              },
              {
                name: 'X-Ray Wavelength: ' +
                  sourceXrays + ' &#x212B;'
              },
              {
                name: 'Neutron Wavelength: ' +
                  sourceNeutrons + ' &#x212B;'
              }
            ]
          }
        ]
      }
    ];

    this.dataSource.data = dataTree;
    this.treeControl.dataNodes = dataTree;
    this.treeControl.expandAll();
  }


  hasChild = (_: number, node: Node) => !!node.children && node.children.length > 0;

}
