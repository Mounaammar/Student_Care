import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FicheInfoPage } from './fiche-info.page';

const routes: Routes = [
  {
    path: '',
    component: FicheInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FicheInfoPageRoutingModule {}
