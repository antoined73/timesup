import GameState from './gameState.js';
import PlayingState from './playingState.js';

class ResultState extends GameState {
    
    constructor() {
        super();
        this.wordsGuessed = [];
        this.wordsPassed = [];
        this.isFinished = true;
    }

    run(context){
        console.log("ResultState");
        console.log(this.wordsGuessed);
        console.log(this.wordsPassed);
    }

    getNextStep(context){
        return new PlayingState(context.getTeamWhoPlays());
    }
}

export default ResultState;