import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Client } from 'src/app/services/data/Client';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  static nom :string="";
  constructor(private serviceregist: AuthService , private fb:FormBuilder , private router:Router) { }
  
  get nom(){
    return this.registForm.get('nom');
  }
  get prenom(){
    return this.registForm.get('prenom');
  }
  get email(){
    return this.registForm.get('email');
  }
  get mdp(){
    return this.registForm.get('mdp');
  }
  get confmdp(){
    return this.registForm.get('confmdp');
  }
  

  

  
  public errorMessages={

    nom:[
      {
        type :'required',message: 'Veuillez entrer un nom valide'
      },
    ],
    prenom:[
      {
        type :'required',message: 'Veuillez entrer un prénom valide'
      },
    ],
    email:[
      {
        type :'required',message: 'Veuillez entrer une adresse email valide'
      },
    ],
    mdp:[
      {
        type :'required',message: 'Mot de passe incorrect'
      },
    ],
  }
  registForm=this.fb.group({
    nom: ['',[Validators.required]],
    prenom: ['',[Validators.required]],
    email : ['',[Validators.required]],
    mdp: ['',[Validators.required]],
    confmdp: ['',[Validators.required]],
   
  });

  async ngOnInit() {
  }
  public  submit(){
    console.log("submit réalisé");
    console.log(this.registForm.value.nom);
    let client : Client =new Client();
    client.nom=this.registForm.value.nom;
    client.prenom=this.registForm.value.prenom;
    client.email=this.registForm.value.email;
    client.mdp=this.registForm.value.mdp;
  
    console.log("Le client reçu est :" + Client.toString());
    AuthService.addClient(client)  
   
    console.log(client.toString());
    
   InscriptionPage.nom =this.registForm.value.prenom;
   
    this.router.navigate(['/home/']);
    

  }

}
