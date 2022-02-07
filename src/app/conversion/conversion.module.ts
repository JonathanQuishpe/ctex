import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConversionPageRoutingModule } from './conversion-routing.module';

import { ConversionPage } from './conversion.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ConversionPageRoutingModule
  ],
  declarations: [ConversionPage]
})
export class ConversionPageModule { }
