import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsElevePageRoutingModule } from './details-eleve-routing.module';

import { DetailsElevePage } from './details-eleve.page';
import { ModalObservationComponent } from 'src/app/modal-observation/modal-observation.component';
import { ModalPropositionComponent } from 'src/app/modal-proposition/modal-proposition.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DetailsElevePageRoutingModule
  ],
  declarations: [DetailsElevePage, ModalObservationComponent, ModalPropositionComponent]
})
export class DetailsElevePageModule {}
