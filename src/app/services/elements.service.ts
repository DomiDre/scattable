import { Injectable } from '@angular/core';
import { Material } from './densities';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {
  // densities = densities;
  validElements = new Set(['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na',
  'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe',
  'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb',
  'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba',
  'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu',
  'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn',
  'Fr', 'Ra', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md',
  'No', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv',
  'Ts', 'Og']);
  validIsotope = {
    D: { name: 'Deuterium', element: 'H', massNumber: 2 },
    T: { name: 'Tritium', element: 'H', massNumber: 3 }
  };

  ATOMIC_MASS_UNIT = 1.660_539_066_60e-27;

  loadedElements = {};
  loadedDensities: Map<string, Material[]>;

  constructor() { }

  async get_element(elementSymbol: string) {
    const lookupElement = this.loadedElements[elementSymbol];
    if (lookupElement) {
      return lookupElement;
    } else {
      // check if symbol is an element
      if (this.validElements.has(elementSymbol)) {
        return import('./elements/' + elementSymbol)
        .then(result => {
          this.loadedElements[elementSymbol] = result[elementSymbol];
          return result[elementSymbol];
        }).catch(error => {
          console.error('Couldnt find element: ', elementSymbol);
        });

      // check if element is alternatively an isotope
      } else if (this.validIsotope.hasOwnProperty(elementSymbol)) {
        const isotope = this.validIsotope[elementSymbol];
        const baseElement = await this.get_element(isotope.element);
        const isotopeData = baseElement.isotopes.find(x => x.mass_number === isotope.massNumber);
        if (!isotopeData) {
          console.error('Couldnt find element: ', elementSymbol);
          return;
        }
        this.loadedElements[elementSymbol] = {
          atomic_number: baseElement.atomic_number,
          name: baseElement.name,
          symbol: elementSymbol,
          mass: isotopeData.mass.value,
          xray_scattering: baseElement.xray_scattering,
          neutron_scattering: isotopeData.neutron_scattering
        };
        return this.loadedElements[elementSymbol];
      }
    }
  }

  async get_elements_from_object(elements: any) {
    const promisesFetchElements = [];
    for (const element in elements) {
      if (elements[element]) {
        promisesFetchElements.push(this.get_element(element));
      }
    }
    return Promise.all(promisesFetchElements);
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
          let elementCount: number;
          if (parseMultipler[2]) {
            elementCount = parseFloat(parseMultipler[2]);
          } else {
            elementCount = 1;
          }

          // check if element is in periodic table or a known isotope
          if (this.validElements.has(parseMultipler[1]) || this.validIsotope.hasOwnProperty(parseMultipler[1])) {
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

  get_atomic_scattering_factor(element, energy: number) {
    const xsf = element.xray_scattering;
    if (!xsf) {
      console.error('No X-ray scattering information for element ', element);
      return;
    }
    const idx = xsf.findIndex(x => x.energy > energy);
    if (idx === xsf.length - 1  || idx === 0) {
      const edgeValue = xsf[idx];
      return edgeValue;
    } else {
      const lower = xsf[idx - 1];
      const higher = xsf[idx];

      let f1: number;
      if (!lower.f1 || !higher.f1) {
        f1 = undefined;
      } else {
        f1 = lower.f1 + (higher.f1 - lower.f1) *
          (energy - lower.energy) / (higher.energy - lower.energy);
      }

      let f2: number;
      if (!lower.f2 || !higher.f2) {
        f2 = undefined;
      } else {
        f2 = lower.f2 + (higher.f2 - lower.f2) *
        (energy - lower.energy) / (higher.energy - lower.energy);
      }
      return { energy, f1, f2 };
    }
  }

  async get_density_data(): Promise<void | Map<string, Material[]>> {
    if (this.loadedDensities) {
      return this.loadedDensities;
    } else {
      return import('./densities')
      .then(result => {
        const densityKey = 'densities';
        this.loadedDensities = result[densityKey];
        return this.loadedDensities;
      }).catch(error => {
        console.error('Failed to load density data.');
      });
    }
  }


  get_densities(material: string): Material[] {
    let result: Material[] = [];
    if (typeof material !== 'string') {
      // do nothing
    } else if (!this.loadedDensities) {
      // download density data
      this.get_density_data();
    } else if (this.loadedDensities.has(material)) {
      result = this.loadedDensities.get(material);
    }
    return result;
  }
}
