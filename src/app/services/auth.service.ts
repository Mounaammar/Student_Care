

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';

import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';
import { Client } from './data/Client';
import { Endroit } from './data/Endroit';
import { map,take } from 'rxjs/operators';
import { Actualite } from './data/Actualite';
import { FicheInfo } from './data/fiche_info';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static bdd = new Map<number, Client>();
  static idClient:number;
  bddActualite = new Map<number, Actualite>(); 
  idAct:number;
private endroits: Observable<Endroit[]>;
//private actualites:Observable<Actualite[]>;
//private endroitCollection:AngularFirestoreCollection;
private endroitCollection:AngularFirestoreCollection<Endroit>;
//private actualiteCollection:AngularFirestoreCollection<Actualite>;
//get collection data


  // static bdd = new Map<number, Client>();
   bddFiche = new Map<number, FicheInfo>(); 
 id_bddFiche : number;


  // static id:number;
  // idAct:number;
   constructor(private afs: AngularFirestore){
           
    this.idAct=0;
    this.id_bddFiche=0;


this.endroitCollection=this.afs.collection<Endroit>('endroits');
this.endroits=this.endroitCollection.snapshotChanges().pipe(
  map(actions=>{
    return actions.map(a=>{
      const data=a.payload.doc.data();
      const id=a.payload.doc.id;
      return {id,...data};
    })
  })
);
// this.actualiteCollection=this.afs.collection<Actualite>('actualites');
// this.actualites=this.actualiteCollection.snapshotChanges().pipe(
//   map(actions=>{
//     return actions.map(a=>{
//       const data=a.payload.doc.data();
//       const id=a.payload.doc.id;
//       return {id,...data};
//     })
//   })
// );

AuthService.idClient=0;
let passAdmin:Client={
   role: "enseignant",
   nom: "boukthir",
   prenom: "Oumaima",
   email: "oumaima@studentCare.tn",
   mdp: "123456",
}
AuthService.bdd.set(AuthService.idClient,passAdmin);
  }

 
     
  public addActualite(newActualite:Actualite):any{
    console.log("l actualite a ete ajoute :"+ newActualite.toString());
    this.idAct++;
    console.log(this.idAct);
    this.bddActualite.set(this.idAct,newActualite);
     return 200;
 }
   

   
  //  async init() {
  //   // If using, define drivers here: await this.storage.defineDriver(/*...*/);
 
  // }

  // Create and expose methods that users of this service can
  // call, for example:
//   public set(key: string, value: any) {
//     this.storage?.set(key, value);
//   }

//add Endrorit 
// addPlayer(chatRoomUid: string, player: Player): Promise<any> {
//   return this._getDoc(chatRoomUid).set({
//     players: [
//       {
//         userUid: player.userUid,
//         userName: player.userName,
//         characterUid: player.characterUid,
//         characterName: player.characterName
//       }
//     ],
//     usersUid: [{ usersUid: player.userUid }]
//   }, { merge: true });
// }



public addEndroit(endroit:Endroit):Promise<DocumentReference>{
  return this.endroitCollection.add(Object.assign({}, endroit));
}
// public addEndroits (){
//   for (let i = 0; i < this.listEndroit.length; i++) {
//    this.addEndroit(this.listEndroit[i])
//   }
// }
  //get all endroits
// public addActualite(actualite:Actualite):Promise<DocumentReference>{
//   return this.actualiteCollection.add(actualite);
// }
  public getEndroits():Observable<Endroit[]>{

    return this.endroits;
   
  }
  public getEndroit(id:string){

   return this.endroitCollection.doc(id).valueChanges();
  }


  update( endroit:Endroit): Promise<void> {
    return this.endroitCollection.doc(endroit.id).update(endroit);
      // .then(() => {
      //   this.router.navigate(['/todo-list']);
      // }).catch(error => console.log(error));;
  }
  

  public addFicheInfo(newFiche:FicheInfo):any{
    console.log("Fiche  a ete ajoute :"+ newFiche.toString());
    this.id_bddFiche++;
    console.log(this.id_bddFiche);
    this.bddFiche.set(this.id_bddFiche,newFiche);
     return 200;
 }




  //for registration and log in 
    public getClient(mail:string,myMdp:string):string{
        console.log("demande de client ayant l adresse mail :" + mail);
        let i =0;
        let b=false;
        while (i<AuthService.bdd.size && b==false){
        if ((AuthService.bdd.get(i).email==mail) && (AuthService.bdd.get(i).mdp==myMdp))
        b=true;
        else
        i++;
        }
        if (b=true)
        return AuthService.bdd.get(i).prenom;
    }
   public static addClient(newClient:Client):any {
       console.log("Le client reçu est :" + Client.toString());
       AuthService.idClient++;
       console.log(AuthService.idClient);
       AuthService.bdd.set(AuthService.idClient,newClient);
       return 200;
   }

  
   public clientExist(mail:string,myMdp:string):any{
      for(let elem of Array.from( AuthService.bdd.values()) ) {
          if((elem.email==mail)&&(elem.mdp==myMdp)){
              return 200;
          }
       }
       return 204;
   }
 
   getbdd(){
      return AuthService.bdd;
  }
}



