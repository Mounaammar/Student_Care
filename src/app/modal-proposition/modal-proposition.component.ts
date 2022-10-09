import { Component, OnInit } from '@angular/core';
import { DetailsElevePage } from '../pages/details-eleve/details-eleve.page';
import { FormControl, Validators } from '@angular/forms';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AlertController, ModalController } from '@ionic/angular';
import { FicheInfo } from '../services/data/fiche_info';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-modal-proposition',
  templateUrl: './modal-proposition.component.html',
  styleUrls: ['./modal-proposition.component.scss'],
})
export class ModalPropositionComponent implements OnInit {

  ficheInfos :FicheInfo;
  public getId:number;
   avis= new FormControl("",Validators.required);
 public observation: string;  
   constructor(private modalCtrl :ModalController,public alert : AlertController,public localNotifications: LocalNotifications, public service:AuthService) { }
 
   ngOnInit() {
 
    this.getId= DetailsElevePage.id ;
     this.ficheInfos=this.service.bddFiche.get(this.getId);
   }
 
 // Schedule a single notification
 
 onSubmit(){
 this.observation="- "+this.avis.value;
   console.log("************"+this.observation);
 this.ficheInfos.trouble.proposition_psychologue.push(this.observation);
 this.showAlert();
 
 this.localNotifications.schedule({
   id:3 ,
   title: 'Local ILocalNotification Example',
   text: 'Multi ILocalNotification 2',
   icon: 'http://example.com/icon.png'
 });
 
 }
 async showAlert() {
   const alert = await this.alert.create({
     header: 'Alert',
    
     message: 'Proposition publiée!',
     buttons: ['OK']
   });
 
   await alert.present();
   this.avis.clearValidators;
   this.dismissModal();
 }
 
 dismissModal(){
     this.modalCtrl.dismiss(this.observation);
 }
 

}
