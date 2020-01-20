import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ElementsService } from '../services/elements.service';

@Component({
  selector: 'app-sld',
  templateUrl: './sld.component.html',
  styleUrls: ['./sld.component.scss']
})
export class SldComponent implements OnInit {

  nistUrl = 'https://www.ncnr.nist.gov/resources/activation/';
  sldForm = new FormGroup({
    material: new FormControl('Co'),
    density: new FormControl(8.86),
    thickness: new FormControl(1),
    sourceNeutrons: new FormControl('1 Ang'),
    sourceXrays: new FormControl('Cu Ka')
  });

  calculatedSLD;

  constructor(private elements: ElementsService ) { }

  ngOnInit() {
  }

  async calculate_sld() {
    const material = this.sldForm.value.material;
    const density = this.sldForm.value.density;
    const thickness = this.sldForm.value.thickness;
    const sourceNeutrons = this.sldForm.value.sourceNeutrons;
    const sourceXrays = this.sldForm.value.sourceXrays;

    // parse material to elements and their count
    const elementCounts = this.parseMaterial(material);

    // download if necessary data of all relevant elements
    const promisesFetchElements = [];
    for (const element in elementCounts) {
      if (elementCounts[element]) {
        promisesFetchElements.push(this.elements.get_element(element));
      }
    }
    await Promise.all(promisesFetchElements);

    // now add all scattering lengths of element and weight with their respective count
    let scatteringLengthSum = 0.0;
    let scatteringLengthError = 0.0;
    let molarMass = 0.0;
    for (const element in elementCounts) {
      if (elementCounts[element]) {
        const loadedElement = this.elements.loadedElements[element];
        if (!loadedElement) {
          console.error('Error must happened while loading ', element);
          break;
        }
        const nsf = loadedElement.neutron_scattering;
        if (!nsf) {
          console.error('Didnt find neutron scattering factor of ', element);
          break;
        }
        scatteringLengthSum += nsf.b_c.value * elementCounts[element];
        scatteringLengthError += Math.pow(nsf.b_c.uncertainty * elementCounts[element], 2);
        molarMass += loadedElement.mass * elementCounts[element];
      }
    }
    scatteringLengthError = Math.sqrt(scatteringLengthError);

    scatteringLengthSum /= molarMass * this.elements.ATOMIC_MASS_UNIT / density;
    scatteringLengthError /= molarMass * this.elements.ATOMIC_MASS_UNIT / density;

    this.calculatedSLD = { value: scatteringLengthSum * 1e-26, uncertainty: scatteringLengthError * 1e-26 };
  }

  parseMaterial(name: string) {
    const foundElements = {};
    const parsedName = name.match(/[A-Z][a-z]?\d*\.*\d*|\((?:[^()]*(?:\(.*\))?[^()]*)+\)\d+\.*\d*/g);
    if (parsedName.length > 0) {
      for (const element of parsedName) {
        // is of format ()\d+\.*\d* ?
        if (element.startsWith('(')) {
          const seperateBracket = /\((.*)\)(\d+\.*\d*)/g.exec(element);
          const groupCount = parseFloat(seperateBracket[2]);

          const subParsedMaterial = this.parseMaterial(seperateBracket[1]);
          for (const subElement in subParsedMaterial) {
            if (subParsedMaterial[subElement]) {
              if (!foundElements[subElement]) {
                foundElements[subElement] = 0.0;
              }
              foundElements[subElement] += groupCount * subParsedMaterial[subElement];
            }
          }
        } else {
          // element with a number
          const parseMultipler = /([A-Z][a-z]?)(\d*\.*\d*)/g.exec(element);
          // check if element is in periodic table
          if (this.elements.validElements.has(parseMultipler[1])) {
            let elementCount: number;
            if (parseMultipler[2]) {
              elementCount = parseFloat(parseMultipler[2]);
            } else {
              elementCount = 1;
            }
            if (!foundElements[parseMultipler[1]]) {
              foundElements[parseMultipler[1]] = 0.0;
            }
            foundElements[parseMultipler[1]] += elementCount;
          } else {
            // entered invalid element
            console.error('Warning: Ignoring unknown element: ', parseMultipler[1]);
          }
        }
      }
    }
    return foundElements;
  }
}
