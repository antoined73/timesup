import ExplanationState from './states/explanationState.js';

class GameContext {
    
    constructor(teams, words) {
      this.teams = teams;

      this.words = words;
      this.wordsGuessed = [];
      this.wordsLeft = this.words;

      this.currentRound = 1;

      this.currentState = new ExplanationState();
    }

    nextStep(){
      if(this.currentState.isFinished) {
        this.currentState = this.currentState.getNextStep(this);
        this.currentState.run(this);
      }
    }

    setState(state){
      this.currentState = state;
      this.currentState.run(this);
    }

    run(){
      this.currentState.run(this);
    }

    getTeamWhoPlays(){
      // TODO
    }
  }
export default GameContext;