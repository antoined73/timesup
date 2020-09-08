import GameState from './gameState.js';
import ResultState from './resultState.js';

class PlayingState extends GameState {
    
    constructor() {
        super();
        this.timeLeft = 3;
        this.explanationText = "";
        this.interval = null;

        this.context = null;
    }

    run(context){
        console.log("GO");
        console.log(this.timeLeft);
        this.context = context;
        this.interval = setInterval(() => { this.onTick(); }, 1000);
    }

    onTick(){
        this.timeLeft = this.timeLeft - 1;
        if(this.timeLeft <= 0){
            console.log("Time's up !");
            clearInterval(this.interval);
            this.isFinished = true;
            this.context.setState(new ResultState());
        }
        else {
            console.log(this.timeLeft);
        }
    }
}

export default PlayingState;