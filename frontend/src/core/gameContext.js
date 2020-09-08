class GameContext {
    
    constructor(teams, words) {
      this.teams = teams;

      this.words = words;
      this.wordsGuessed = [];
      this.wordsLeft = this.words;

      this.states = [new ExplanationState(), new PlayingState(), new ResultState(), new SwapState(), new RoundResultState(), new FinalResultState()];
      this.currentState = this.states[0];
    }

    nextStep(){
    }
  }