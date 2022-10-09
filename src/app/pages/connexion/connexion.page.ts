import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  constructor(private service:AuthService, private fb:FormBuilder, private router:Router , private route:ActivatedRoute,public alertController: AlertController) { }
  onClickRegisterpp(){
    this.router.navigate(['/inscription']);
    
  }
  
  nom : string="";
  recupNom : string="";
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

  public errorMessages={
    password:[
      {
        type :'required',message: 'Veuillez écrire votre mot de passe'
      },
    ],
    email:[
      {
        type :'required',message: 'Veuillez entrer votre mail'
      },
    ],
   
  }
  loginForm=this.fb.group({
    email: ['',[Validators.required]],
    password: ['',[Validators.required]],
   
  });

  async ngOnInit() {
  // this.nom=RegistrationPage.nom;
  }
  public async submit(){

    console.log("submit réalisé");
   if( this.service.clientExist(this.loginForm.value.email,this.loginForm.value.password)==200){

    console.log("demande de client ayant l adresse mail :" + this.loginForm.value.email);
    let i =0;
    let b=false;
    while (i<AuthService.bdd.size && b==false){
    if ((AuthService.bdd.get(i).email==this.loginForm.value.email) && (AuthService.bdd.get(i).mdp==this.loginForm.value.password))
    b=true;
    else
    i++;
    }
   if (b==true)
   {
   this.recupNom = AuthService.bdd.get(i).prenom ;
   }
 
   this.router.navigate(['/menu/' +this.recupNom ]);
  }else{
  console.log("email ou mot de passe erroné");
  console.log(this.service.getbdd.length);
  this.showAlert();
}
  //   console.log(this.email);
    
  }
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
     
      message: 'email ou mot de passe erroné !',
      buttons: ['OK']
    });

    await alert.present();
  }
}
