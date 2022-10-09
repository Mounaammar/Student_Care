import { ThrowStmt } from "@angular/compiler";
import { Trouble } from "./Trouble";

export class FicheInfo{
    
    nom_comlet:string
    image:string;
    classe:string ;
    responable:string;
    age:number;
    ecole:string;
    moyenne:number;
    trouble : Trouble;
    constructor( nom:string,image:string,  classe:string,  responable:string, age:number,ecole:string, moyenne:number, trouble : Trouble){
        this.nom_comlet=nom;
        
        this.image=image;
        this.classe =classe;
        this.age=age;
        this.moyenne=moyenne;
        this.responable=responable;
        this.trouble=trouble;
        this.ecole=ecole;

    }
}