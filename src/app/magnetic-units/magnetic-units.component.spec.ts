import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagneticUnitsComponent } from './magnetic-units.component';

describe('MagneticUnitsComponent', () => {
  let component: MagneticUnitsComponent;
  let fixture: ComponentFixture<MagneticUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagneticUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagneticUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
