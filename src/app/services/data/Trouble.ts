export class Trouble{
    type:string;
    observation_enseignant:String[];
    date_debut:String;
    proposition_psychologue: String[];

    constructor(type:string ,observation_enseignant:String[],date_debut:String,proposition_psychologue:String[] ){
        this.type=type;
        this.date_debut=date_debut;
        this.observation_enseignant=observation_enseignant;
        this.proposition_psychologue=proposition_psychologue;
    }

}