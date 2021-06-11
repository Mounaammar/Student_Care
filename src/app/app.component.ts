import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

import * as firebase from 'firebase/app';
import { firebaseConfig } from './firebase.config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
     
    });

  }
}