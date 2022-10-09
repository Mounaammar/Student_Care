

import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { Client } from './data/Client';
import { Endroit } from './data/Endroit';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _storage: Storage | null = null;


  // static bdd = new Map<number, Client>();
 

  
  // static id:number;
  // idAct:number;
   constructor(private storage: Storage){
    this.init();
      // this.idAct=0;
       
      // AuthService.id=0;
      // let passAdmin:Client={
      //    nom: "admin",
      //    prenom: "admin",
      //    email: "admin@proxima.fr",
      //    mdp: "admin123",
         
      // }
      // AuthService.bdd.set(AuthService.id,passAdmin);
   }

   
   async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
//   public set(key: string, value: any) {
//     this.storage?.set(key, value);
//   }

//add Endrorit 
 public add(key,value){
    this._storage.set(key,value);
 }
 public get(key){
  this._storage.get(key);
}
 date:Date =new Date();
 listEndroit : Endroit[]=[
     {nom:"Tour Eiffel",
     
        image : "assets/img/paris.jpg", adresse : "Paris, France", horaire : 19,  avis: 4, recommandé : true,  destDuJour: false, description: "La tour Eiffel  est une tour de fer puddlé de 324 mètres de hauteur (avec antennes)o 1 située à Paris, à l’extrémité nord-ouest du parc du Champ-de-Mars en bordure de la Seine dans le 7e arrondissement",nbComment :1,
        nbReaction : 18
         ,commentaire : [
            {
                image : "assets/img/Image1.png",
                nom : "Michael Bruno" ,
                commentaire:"j'ai passé mes vacances de l'année dernière là-bas et je vous assure que c'est super beau",
            }
        ], ville: "Paris", distance :200,datePost: this.date,
     
 },
 {nom:"Cathédrale de Strasbourg",
     
    image : "assets/img/strasbourgCath.jpg", adresse : "Strasbourg, France", horaire : 19,  avis: 4, recommandé : false,  destDuJour: true, description: "La cathédrale Notre-Dame de Strasbourg est une cathédrale gothique située à Strasbourg, dans la circonscription administrative du Bas-Rhin, sur le territoire de la collectivité européenne d'Alsace.\ Siège, disputé durant la Réforme, d\'évêques qui ont été suffragants de la province de Mayence jusqu'au concordat de 1801, elle est ensuite exclusivement affectée au culte catholique romain. Elle est depuis 1988 le siège d'un archidiocèse propre. Dans les années 2010, c\'est la deuxième cathédrale la plus visitée de France derrière Notre-Dame de Paris2.",nbComment :1,
    nbReaction : 18
     ,commentaire : [
        {
            image : "assets/img/Image1.png",
            nom : "Michael Bruno" ,
            commentaire:"j'ai passé mes vacances de l'année dernière là-bas et je vous assure que c'est super beau",
        }
    ], ville: "Strasbourg", distance :120000,datePost: this.date
 
},
{nom:"Chateau de Versailles",
     
image : "assets/img/paris.jpg", adresse : "Versailles, France", horaire : 19,  avis: 4, recommandé : false,  destDuJour: false, description: "Le château de Versailles est un château et un monument historique français qui se situe à Versailles, dans les Yvelines, en France. Il fut la résidence des rois de France Louis XIV, Louis XV et Louis XVI. Le roi et la cour y résidèrent de façon permanente du 6 mai 1682 au 6 octobre 1789, à l'exception des années de la Régence de 1715 à 1723. Situés au sud-ouest de Paris, ce château et son domaine visaient à glorifier la monarchie française.\n",nbComment :1,
nbReaction : 18
 ,commentaire : [
    {
        image : "assets/img/Image1.png",
        nom : "Michael Bruno" ,
        commentaire:"j'ai passé mes vacances de l'année dernière là-bas et je vous assure que c'est super beau",
    }
], ville: "Versailles", distance :300,datePost: this.date,

},

];

public async addEndroit (){
    for (let i = 0; i < this.listEndroit.length; i++) {
      console.log(i);
      let id = this.listEndroit[i].nom+this.listEndroit[i].ville;
      await this.add(id,this.listEndroit[i])
    }
}
  
//récuperer endroit

public async getAllEndroits(){
  let endroit: any=[]
  await this.storage.forEach((key, value, index) => {
    console.log(key)
    endroit.put(this.storage.get(key));
  });
}
  //for registration and log in 
  //   public getClient(mail:string,myMdp:string):string{
  //       console.log("demande de client ayant l adresse mail :" + mail);
  //       let i =0;
  //       let b=false;
  //       while (i<AuthService.bdd.size && b==false){
  //       if ((AuthService.bdd.get(i).email==mail) && (AuthService.bdd.get(i).mdp==myMdp))
  //       b=true;
  //       else
  //       i++;
  //       }
  //       if (b=true)
  //       return AuthService.bdd.get(i).prenom;
  //   }
  //  public static addClient(newClient:Client):any {
  //      console.log("Le client reçu est :" + Client.toString());
  //      AuthService.id++;
  //      console.log(AuthService.id);
  //      AuthService.bdd.set(AuthService.id,newClient);
  //      return 200;
  //  }

  
  //  public clientExist(mail:string,myMdp:string):any{
  //     for(let elem of Array.from( AuthService.bdd.values()) ) {
  //         if((elem.email==mail)&&(elem.mdp==myMdp)){
  //             return 200;
  //         }
  //      }
  //      return 204;
  //  }
 
  //  getbdd(){
  //     return AuthService.bdd;
  // }
}



