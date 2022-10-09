import { Commentaire } from "./Commentaire";

export class Actualite{
titre:string;
nom_posteur:string;
description : string;
image :string;
nbComment :number;
nbReaction : number;
commentaire:Commentaire[];
datePost: string;
role:string;
}