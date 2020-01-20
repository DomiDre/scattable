import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ElementsService } from '../services/elements.service';

@Component({
  selector: 'app-sld',
  templateUrl: './sld.component.html',
  styleUrls: ['./sld.component.scss']
})
export class SldComponent implements OnInit {

  nistUrl = "https://www.ncnr.nist.gov/resources/activation/";
  sldForm = new FormGroup({
    material: new FormControl('Co'),
    density: new FormControl(8.86),
    thickness: new FormControl(1),
    sourceNeutrons: new FormControl("1 Ang"),
    sourceXrays: new FormControl("Cu Ka")
  });

  constructor(private elements: ElementsService ) { }

  ngOnInit() {
  }

  calculate_sld() {
    const material = this.sldForm.value.material;
    const density = this.sldForm.value.density;
    const thickness = this.sldForm.value.thickness;
    const sourceNeutrons = this.sldForm.value.sourceNeutrons;
    const sourceXrays = this.sldForm.value.sourceXrays;
    this.elements.get_element(material);
  }
}
