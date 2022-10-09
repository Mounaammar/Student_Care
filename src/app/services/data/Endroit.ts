import { Commentaire } from "./Commentaire";

export class Endroit{
    nom:string;
    image : string;
    adresse : string;
    horaire : number;
    avis: number;
    recommandé : boolean;
    destDuJour: boolean;
    description: string;
    nbComment :number;
    nbReaction : number;
    commentaire:Commentaire[];
    ville: string;
    distance: number;
    datePost: Date
}