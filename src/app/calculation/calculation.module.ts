import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculationPageRoutingModule } from './calculation-routing.module';

import { CalculationPage } from './calculation.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CalculationPageRoutingModule
  ],
  declarations: [CalculationPage]
})
export class CalculationPageModule { }
