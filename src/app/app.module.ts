import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SldComponent } from './sld/sld.component';
import { MolarMassComponent } from './molar-mass/molar-mass.component';
import { MagneticUnitsComponent } from './magnetic-units/magnetic-units.component';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { DecimalPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SldComponent,
    MolarMassComponent,
    MagneticUnitsComponent,
    OnlyNumberDirective
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
