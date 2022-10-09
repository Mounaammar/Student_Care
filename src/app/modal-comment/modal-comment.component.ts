import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AlertController, ModalController } from '@ionic/angular';
import { ConnexionPage } from '../pages/connexion/connexion.page';
import { Commentaire } from '../services/data/Commentaire';

@Component({
  selector: 'app-exemple',
  templateUrl: './modal-comment.component.html',
  styleUrls: ['./modal-comment.component.scss'],
})
export class ModalCommentComponent implements OnInit {
    public comment : string;
    commentairePersonne :Commentaire;
   avis= new FormControl("",Validators.required);
  constructor(private modalCtrl :ModalController,public alert : AlertController,public localNotifications: LocalNotifications) { }

  ngOnInit() {}

// Schedule a single notification

onSubmit(){
this.comment=this.avis.value;
  console.log("************"+this.comment);
this.commentairePersonne=new Commentaire("assets/img/oumaima.jpg",ConnexionPage.recupNom ,this.comment);
this.showAlert();

this.localNotifications.schedule({
  id: 1,
  title: 'Local ILocalNotification Example',
  text: 'Multi ILocalNotification 2',
  icon: 'http://example.com/icon.png'
});

}
async showAlert() {
  const alert = await this.alert.create({
    header: 'Alert',
   
    message: 'Commentaire publié!',
    buttons: ['OK']
  });

  await alert.present();
}

dismissModal(){
    this.modalCtrl.dismiss(this.commentairePersonne);
}



}
