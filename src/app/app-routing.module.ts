import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'title',
    loadChildren: () => import('./title/title.module').then( m => m.TitlePageModule)
  },
  {
    path: 'conversion',
    loadChildren: () => import('./conversion/conversion.module').then( m => m.ConversionPageModule)
  },
  {
    path: 'calculation',
    loadChildren: () => import('./calculation/calculation.module').then( m => m.CalculationPageModule)
  },
  {
    path: 'resulting',
    loadChildren: () => import('./resulting/resulting.module').then( m => m.ResultingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
