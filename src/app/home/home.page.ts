import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Endroit } from '../services/data/Endroit';
import { map,take } from 'rxjs/operators';
import { IonSearchbar, ModalController } from '@ionic/angular';
import { ModalCommentComponent } from '../modal-comment/modal-comment.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actualite } from '../services/data/Actualite';
import { ConnexionPage } from '../pages/connexion/connexion.page';
import { format, parseISO } from 'date-fns';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
@ViewChild('search',{ static : false}) search : IonSearchbar;

public endroitsRecommande:Endroit[] ;
public selectedSegment : string;
public endroitsDestDuJour:Endroit[] ;
public endroits:Endroit[] ;
public endroitsFiltre:Endroit[] ;
interval :any;
public nomPost : string;
public listActualite : IterableIterator<Actualite>; 
  constructor( public service : AuthService , private modalCtrl: ModalController , public router: Router, private fb:FormBuilder) {
   
  }
  filename:string="";
  nom:string="";
 
  get titre(){
    return this.loginForm.get('titre');
  }
  get description(){
    return this.loginForm.get('description');
  }
  get link(){
    return this.loginForm.get('link');
  }
  get nameLink(){
    return this.loginForm.get('nameLink');
  }
  get adresse(){
    return this.loginForm.get('adresse');
  }
  public errorMessages={
    titre:[
      {
        type :'required',message: 'Veuillez entrer un titre pour l\'annonce'
      },
    ],
    description:[
      {
        type :'required',message: 'Veuillez décrire annonce'
      },
    ],
    link:[
      {
        type :'required',message: 'Veuillez ajouter un lien'
      },
    ],
    nameLink:[
      {
        type :'required',message: 'Veuillez donner un nom à votre lien'
      },
    ],
    adresse:[
      {
        type :'required',message: 'Veuillez indiquer l\'adresse'
      },
    ],
  }
  loginForm=this.fb.group({
    titre: ['',[Validators.required]],
    description: ['',[Validators.required]],
  });

  //  ngOnInit() :void{

  //  this.endroits=this.service.getEndroits();
  // }
 
  async ngOnInit() {
    
    this.service.getEndroits().pipe( take(1)).subscribe(allEndroits =>{
     this.endroitsDestDuJour=allEndroits.filter(endroit=>endroit.destDuJour==true) ;
     this.endroitsFiltre=allEndroits.filter(endroit => endroit.nom===this.nomPost);
     this.listActualite=this.service.bddActualite.values();
   });

 
  //  this.incrementReaction();
  //  this.interval = setInterval(() => { 
  //      this.incrementReaction(); 
  //  }, 5000);
  
  }
  // titre:string;

  // description : string;
  // image :string;
  // nbComment :number;
  // nbReaction : number;
  // commentaire:Array<Commentaire>;
  // recommandé : boolean;
  // datePost: Date


  public async submit(){
    console.log("submit réalisé");
    console.log(this.loginForm.value.titre);
    let actualite : Actualite =new Actualite();
    actualite.titre=this.loginForm.value.titre;
    actualite.description=this.loginForm.value.description;
    actualite.image="../../assets/img/"+this.filename;
    actualite.nbComment=0;

    actualite.datePost=format(parseISO(new Date().toISOString()), 'MMM d, yyyy');
    actualite.nbReaction=0;
    console.log("****************"+AuthService.bdd.get(0).role);
    actualite.role= AuthService.bdd.get(0).role;
    actualite.nom_posteur=AuthService.bdd.get(0).prenom + " " +AuthService.bdd.get(0).nom;
    //this.ngAfterViewInit(actualite);
    this.service.addActualite(actualite)
   this.listActualite=this.service.bddActualite.values();
    console.log(actualite.toString());
    
  }
  // ngAfterViewInit(act:Actualite) {
  //   setTimeout(() => {
      
  //    this.service.addActualite(act) 
    
  //   });
  //    }
  onFileSelected(fileInput: any){
 
   this.filename=fileInput.target.files[0].name;
   }
  ionViewDidEnter(){
    setTimeout(()=>{
      this.search.setFocus()
    });
  }
  todoList() {
    this.service.getEndroits()
    .subscribe((data) => {
      
      console.log(data);
     
    })
  }

  incrementReaction(endroit_obj:any){
    endroit_obj.nbReaction++;
    this.service.update(endroit_obj)
    console.log("un j aime : " +endroit_obj.nbReaction );

  }
  async openModal(endroit_obj:any){
const modal= await this.modalCtrl.create({
  component: ModalCommentComponent
});

modal.onDidDismiss().then((comment) => {
  if (comment !== null) {
   endroit_obj.commentaire.push(comment.data)
   this.service.update(endroit_obj);
    console.log('Modal Data : ' + comment.data);
  }
});

 await modal.present();
  }

  segmentChanged(event: any){
    console.log(event.target.value);
    this.selectedSegment= event.target.value;

  }

  recupVille(event: any){
    this.nomPost=event.target.value;

    if(this.nomPost && this.nomPost.trim()!=''){
      this.service.getEndroits().pipe( take(1)).subscribe(allEndroits =>{
    this.endroitsFiltre=allEndroits.filter((item:Endroit)=>{
      return (item.nom.toLowerCase().indexOf(this.nomPost.toLowerCase())>-1)
    });
    }
    
      )}
}

onClickEndroit(id :any){
  this.router.navigate(['/restaurant/' + id]);
  console.log(id);
  console.log(this.endroits[0].sub_image[0].img);
}

}
