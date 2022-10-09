import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSearchbar, IonSlides, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ModalCommentComponent } from 'src/app/modal-comment/modal-comment.component';
import { AuthService } from 'src/app/services/auth.service';
import { Endroit } from 'src/app/services/data/Endroit';
import { Hotel } from 'src/app/services/data/Hotel';
import { Resto } from 'src/app/services/data/Resto';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  @ViewChild('searchResto',{ static : false}) searchResto : IonSearchbar;
public id :any;
public endroit:Endroit;
public nom :string ;
public description:string;

public selectedSegment : string;
public selected_option : string;

public endroitsRecommande:Endroit[] ;
public endroitsDestDuJour:Endroit ;
public endroits:Endroit[] ;
public endroitsFiltre:Endroit[] ;
interval :any;
public ville : string;
  // @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  sliderOne: any;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  
  constructor(public router:ActivatedRoute , public service: AuthService, public route:Router,private modalCtrl: ModalController  ) {
      //slider images entete
      this.sliderOne =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 1
          },
          {
            id: 2
          },
          {
            id: 3
          },
          {
            id: 4
          },
          {
            id: 5
          }
        ]
      };
    }
    ngOnInit() {
      this.id=this.router.snapshot.paramMap.get("id");
      this.service.getEndroit(this.id).subscribe((data:Endroit) =>{
        // this.endroit= data;
        // this.endroit.nom=data.nom;
        console.log(data);
        this.nom=data.nom;
        this.description=data.description;
        this.endroit=data
      })

      // this.service.getEndroits().pipe( take(1)).subscribe(allEndroits =>{
      //    this.endroit=allEndroits.filter(endroit=>endroit.id===this.id)[0] ;
      // })
   
    }

    // ionViewDidEnter(){
    //   setTimeout(()=>{
    //     this.searchResto.setFocus()
    //   });
    // }
  


  segmentChanged(event: any){
    console.log(event.target.value);
    this.selectedSegment= event.target.value;

  }
  key : string ='nom';
  reverse : boolean =true;
  sort(key){
  
   this.key=key;
   this.reverse=!this.reverse;

  }


incrementReaction(){
  this.endroit.nbReaction++;
  this.service.update(this.endroit)
  console.log("un j aime : " +this.endroit.nbReaction );

}
async openModal(){
const modal= await this.modalCtrl.create({
component: ModalCommentComponent
});

modal.onDidDismiss().then((comment) => {
if (comment !== null) {
 this.endroit.commentaire.push(comment.data)
 this.service.update(this.endroit);
  console.log('Modal Data : ' + comment.data);
}
});

await modal.present();
}


recupVille(event: any){
  this.ville=event.target.value;

  if(this.ville && this.ville.trim()!=''){
    this.service.getEndroits().pipe( take(1)).subscribe(allEndroits =>{
  this.endroitsFiltre=allEndroits.filter((item:Endroit)=>{
    return (item.ville.toLowerCase().indexOf(this.ville.toLowerCase())>-1)
  });
  }
  
    )}
}
onClickbutton(){
  this.route.navigate(['/home']);
  console.log(this.endroits[0].sub_image[0].img);
}

}
 