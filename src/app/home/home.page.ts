import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Endroit } from '../services/data/Endroit';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  listEndroit: Endroit[];

  constructor() {}
  // public recupEndroits(){
  //   this.service.getAllEndroits();
  // }
  // async ngOnInit() {
  //  this.recupEndroits();
  // }


}
