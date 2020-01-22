import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-magnetic-units',
  templateUrl: './magnetic-units.component.html',
  styleUrls: ['./magnetic-units.component.scss']
})
export class MagneticUnitsComponent implements OnInit {

  unitConversion = [
    {
      name: 'memu_Am2', viewName: 'memu -> Am²', factor: 1e-6
    },
    {
      name: 'Oe_T', viewName: 'Oe -> T', factor: 1e-4
    },
    {
      name: 'memu_kAm', viewName: 'memu/µL -> kA/m', factor: 1
    },
    {
      name: 'emu_cm3', viewName: 'emu/cm³ -> A/m', factor: 1e3
    },
    {
      name: 'R_Ckg', viewName: 'R -> C/kg', factor: 2.58e-4
    },
    {
      name: 'rad_Jkg', viewName: 'rad -> J/kg', factor: 0.01
    },
  ];

  cgsConverterForm = new FormGroup({
    cgsValue: new FormControl(),
    conversion: new FormControl('memu_Am2'),
    siValue: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

  convert(target: string) {
    const factor = this.unitConversion
    .find(x => x.name === this.cgsConverterForm.value.conversion)
    .factor;
    if (target === 'cgs') {
      let updatedValue;
      if (this.cgsConverterForm.value.cgsValue) {
        updatedValue = this.cgsConverterForm.value.cgsValue * factor;
      }
      this.cgsConverterForm.patchValue({
        siValue: updatedValue
      });
    } else if (target === 'si') {
      let updatedValue;
      if (this.cgsConverterForm.value.siValue) {
        updatedValue = this.cgsConverterForm.value.siValue / factor;
      }
      this.cgsConverterForm.patchValue({
        cgsValue: updatedValue
    });
    }
  }

  changedSelection() {
    this.convert('cgs');
  }
}
