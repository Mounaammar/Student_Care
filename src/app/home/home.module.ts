import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ModalCommentComponent } from '../modal-comment/modal-comment.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    // IonicModule.forRoot()
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HomePage, ModalCommentComponent ],
  // entryComponents : [ ModalCommentComponent ]
})
export class HomePageModule {}
