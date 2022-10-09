import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSearchbar } from '@ionic/angular';
import { Key } from 'protractor';
import { AuthService } from 'src/app/services/auth.service';
import { FicheInfo } from 'src/app/services/data/fiche_info';
import { Trouble } from 'src/app/services/data/Trouble';
import { ConnexionPage } from '../connexion/connexion.page';

@Component({
  selector: 'app-fiche-info',
  templateUrl: './fiche-info.page.html',
  styleUrls: ['./fiche-info.page.scss'],
})
export class FicheInfoPage implements OnInit {
  @ViewChild('search',{ static : false}) search : IonSearchbar;

  public searchTerm:string;
  public fichInfoss:IterableIterator<FicheInfo>;
  public nomPost:String;
  public mapEnfants :Map<number, FicheInfo>; 
  constructor(public service:AuthService, public router:Router) { }

  ngOnInit() {

    let trouble1 =new Trouble("comportemental",["elle est tres violante, parfois elle a des crises de colère"],"21/01/2022",["en cas de crise :","- Essayer de rester le plus calme possible car la violence attise la violence.", "- Ne pas montrer son angoisse ou sa peur car l'enfant ne va pas se sentir sécurisé. On augmenterait ainsi sa propre angoisse et on entretiendrait sa violence.", "- Adapter éventuellement ces différentes postures possibles à adopter en fonction de l’élève", "- ne pas entrer en contact physique avec lui.", "- se baisser derrière l'enfant et l'entourer de ses bras, sans le serrer, lui parler à voix douce en lui disant qu'on est là pour s'occuper de lui.","- se baisser face à l'élève et lui parler à voix douce en le rassurant. Tenter de tenir un discours du type: Ton comportement en ce moment n'est pas habituel. Je sais que tu es capable d'être autrement...."]);
    let trouble2=new Trouble("psychique",["il a peur de tout"],"je ne sais pas quand",["-faire des dialogues avec lui", "-essayer de l'intégrer dans des travaux de groupe", "-essayer de faire des jeux en classe "]);
    let trouble3=new Trouble("comportemental",["agressif et violent"],"30/10/2021",["il faut : s’occuper de lui  se dire que l’agressivité peut être une manière maladroite d’exprimer un besoin ou un sentiment d’éviter certains comportements qui peuvent avoir pour conséquence d’accentuer encore son agressivité par exp rire manifester de l’empathie, de la compréhension, non pour le mouvement de colère, mais pour la difficulté que rencontre l’interlocuteur"]);
    let trouble4=new Trouble("comportemental",["hyperactive"],"je ne sais pas quand",["Ne la forcez jamais à s’asseoir près de votre bureau ou seule. les élèves hyperactifs, souffrant de TDAH ou ayant des déficits d’attention doivent bouger, alors laisse-là faire.",  "Cependant, essayez de faciliter ce mouvement pour qu’il provoque le moins de distraction possible:" ,"essayer d'attirer son attetion par  changer les couleurs dans le tableau ou changer le ton de ta voix , utiliser des images etc..."]);

   let ficheInfos =new FicheInfo("Ammar Chaima","../../../assets/img/photo2.jpg","2emeA","Madame X",13,"Elamel",7,trouble1);
   let ficheInfos2 =new FicheInfo("Lakhdar Sami","../../../assets/img/photo1.jpg","5emeC","Madame Y",10,"Elamel",10,trouble2); 
   let ficheInfos3 =new FicheInfo("Hamrouni Hassen","../../../assets/img/photo4.jpg","5emeC","Monsieur Z",9,"Elamel",9,trouble3); 
   let ficheInfos4 =new FicheInfo("omran chiraz","../../../assets/img/photo3.jpg","2emeA","Monsieur X",7,"Elamel",12,trouble4); 
  
  
   this.service.addFicheInfo(ficheInfos);
   this.service.addFicheInfo(ficheInfos2);
   this.service.addFicheInfo(ficheInfos3);
   this.service.addFicheInfo(ficheInfos4);

    this.fichInfoss=this.service.bddFiche.values();
   this.mapEnfants=this.service.bddFiche
  }
 
 getKey(val) {
    return [...this.service.bddFiche].find(([key, value]) => val === value)[0];
  }

 
  ionViewDidEnter(){
    setTimeout(()=>{
      this.search.setFocus()
    });
  }

  onClickFiche(fiche_info :FicheInfo){
   let id=this.getKey(fiche_info)
    this.router.navigate(['/details-eleve/'+id]);
    console.log(id);
   console.log(ConnexionPage.recupNom)
   // console.log(this.endroits[0].sub_image[0].img);
  }
  recupNom(event: any){
    this.nomPost=event.target.value;
//const rebels = pilots.filter(pilot => pilot.faction === "Rebels");
    if(this.nomPost && this.nomPost.trim()!=''){ 
     this.mapEnfants=new Map([...this.service.bddFiche].filter(([k, v])=>v.nom_comlet.toLowerCase().indexOf(this.nomPost.toLowerCase())>-1));}
     else
     this.mapEnfants=this.service.bddFiche;
     return this.mapEnfants.values();
    //   pipe( take(1)).subscribe(allEndroits =>{
    // this.endroitsFiltre=allEndroits.filter((item:Endroit)=>{
    //   return (item.nom.toLowerCase().indexOf(this.nomPost.toLowerCase())>-1)
  //  });
//}
  
    //  )}

}

}