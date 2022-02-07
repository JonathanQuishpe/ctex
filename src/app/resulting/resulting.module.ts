import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultingPageRoutingModule } from './resulting-routing.module';

import { ResultingPage } from './resulting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultingPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ResultingPage]
})
export class ResultingPageModule { }
