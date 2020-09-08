import GameState from './gameState.js';
import PlayingState from './playingState.js';

class ExplanationState extends GameState {
    
    constructor() {
        super();
        this.title = "";
        this.explanationText = "";
        this.isFinished = true;
    }

    run(context){
        console.log("ExplanationState");
        switch(context.currentRound){
            case 1:
                this.title = "Décrivez !";
                this.explanationText = 
                `Vous devez décrire les mots.

                Vous ne pouvez pas :
                
                - Prononcer des mots de la même famille ou qui "sonnent pareil"
                - Traduire les mots
                - Les épeler`;
                break;

            case 2: 
                this.title = "Un seul mot !";
                this.explanationText = 
                `Vous ne pouvez prononcer qu'un seul mot.

                Votre équipe ne peut faire qu'une seule proposition par carte.`;
                break;

            case 3: 
                this.title = "Mimez !";
                this.explanationText = 
                `Vous devez mimer le mot.

                Vous pouvez fredonner ou faire des bruitages.
                
                Vous ne pouvez pas parler.`;
                break;
        }
        console.log(this.title);
        console.log(this.explanationText);
    }

    getNextStep(context){
        return new PlayingState(context.getTeamWhoPlays());
    }
}

export default ExplanationState;