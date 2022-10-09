import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalCommentComponent } from 'src/app/modal-comment/modal-comment.component';
import { ModalObservationComponent } from 'src/app/modal-observation/modal-observation.component';
import { ModalPropositionComponent } from 'src/app/modal-proposition/modal-proposition.component';
import { AuthService } from 'src/app/services/auth.service';
import { FicheInfo } from 'src/app/services/data/fiche_info';
import { ConnexionPage } from '../connexion/connexion.page';

@Component({
  selector: 'app-details-eleve',
  templateUrl: './details-eleve.page.html',
  styleUrls: ['./details-eleve.page.scss'],
})
export class DetailsElevePage implements OnInit {
  public getId: any;
  public ficheInfos:FicheInfo;
  public nom:String;
  public nomPost:string;
  public static id: number;
  constructor(public router: ActivatedRoute,public service: AuthService,private modalCtrl: ModalController ){ }

  ngOnInit() {
    this.nom=ConnexionPage.recupNom;
    this.getId=JSON.parse(this.router.snapshot.paramMap.get("id"))
    //console.log(JSON.parse(this.getId));
   DetailsElevePage.id =this.getId;
    this.ficheInfos=this.service.bddFiche.get(this.getId);
    console.log(this.ficheInfos);
  }
  async openModal(){
    const modal= await this.modalCtrl.create({
      component: ModalObservationComponent
    });
    
    modal.onDidDismiss().then((comment) => {
      if (comment !== null) {
       
      // endroit_obj.commentaire.push(comment.data)
     // this.ficheInfos.trouble.observation_enseignant.push(comment.data) ;
      // this.service.update(endroit_obj);
        console.log('Modal Data : ' + comment.data);
      }
    });
    
     await modal.present();
      }

      async openModal2(){
        const modal= await this.modalCtrl.create({
          component: ModalPropositionComponent
        });
        
        modal.onDidDismiss().then((comment) => {
          if (comment !== null) {
           
          // endroit_obj.commentaire.push(comment.data)
         ;
          // this.service.update(endroit_obj);
            console.log('Modal Data : ' + comment.data);
          }
        });
        
         await modal.present();
          }

}
