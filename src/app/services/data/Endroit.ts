import { Actualite } from "./Actualite";
import { Commentaire } from "./Commentaire";
import { Hotel } from "./Hotel";
import { Resto } from "./Resto";
import { SubImage } from "./SubImage";

export class Endroit{
    id?:any;
    nom:string;
    image : string;
    adresse : string;
    adresseCompl: string;
    horaire : number;
    avis: number;
    recommandé : boolean;
    destDuJour: boolean;
    description: string;
    nbComment :number;
    nbReaction : number;
    commentaire:Array<Commentaire>;
    ville: string;
    distance: number;
    datePost: Date
    sub_image : SubImage[];
    localisation :string;
    actualite : Actualite[];
    hotel:Hotel[];
    resto:Resto[];
    img_profil:string;
    type_posteur:string;
nom_posteur:string;
}