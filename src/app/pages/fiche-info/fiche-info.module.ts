import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FicheInfoPageRoutingModule } from './fiche-info-routing.module';

import { FicheInfoPage } from './fiche-info.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FicheInfoPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [FicheInfoPage]
})
export class FicheInfoPageModule {}
