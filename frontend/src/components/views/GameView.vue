<template>
<div>
  Game here
  <a class="button is-link is-fullwidth is-medium my-6" @click="gameButtonClicked()">
  Next step
  </a>
</div>
</template>

<script>
import GameContext from '../../core/gameContext.js';

export default {
  name: 'GameView',
  data(){
      return {
          game : null
      }
  },
  components: {
  },
  created(){
    this.game = new GameContext();
    this.game.run();
  },
  methods : {
    gameButtonClicked(){
      this.game.nextStep();
    }
  }
}
</script>
