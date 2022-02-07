import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultingPage } from './resulting.page';

const routes: Routes = [
  {
    path: '',
    component: ResultingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultingPageRoutingModule {}
