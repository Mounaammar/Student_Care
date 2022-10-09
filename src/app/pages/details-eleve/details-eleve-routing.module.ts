import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsElevePage } from './details-eleve.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsElevePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsElevePageRoutingModule {}
