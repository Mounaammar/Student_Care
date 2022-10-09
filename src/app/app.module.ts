import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

// storage module
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers, Storage } from '@ionic/storage';
import{AngularFirestoreModule , SETTINGS} from '@angular/fire/firestore';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    IonicModule.forRoot(),
    
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [LocalNotifications,
  
   
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide : SETTINGS, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}