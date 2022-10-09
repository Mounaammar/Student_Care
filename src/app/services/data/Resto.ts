import { Commentaire } from "./Commentaire";
import { SubImage } from "./SubImage";

export class Resto{
    nom:string;
    adresse:string;
    imageHead :string;
    nbEtoiles :number;
    description: string;
    infromations :string[];
    prix :number;
    localisation :string;
    commentaires: Commentaire;
    avis: number;
   distance: number;
   sub_image:SubImage[]

}