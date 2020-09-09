<template>
    <section class="container">
        <div class="columns">
            <div class="column is-full">
                <a class="button is-primary is-fullwidth is-large my-6 has-text-weight-bold is-size-2" @click="menuButtonClicked('game')">
                Play
                </a>
                <a class="button is-link is-fullwidth is-medium my-6" @click="menuButtonClicked('words')">
                Edit word banks
                </a>
                <a class="button is-link is-fullwidth is-medium my-6" @click="menuButtonClicked('rules')">
                Rules
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            projects : [],
            tags: []
        }
    },
    mounted() {
      if (localStorage.getItem("wordsFromApi") === null) {
        // TODO EXAMPLE ==> REMOVE THIS
        // THIS RETRIEVES ALL WORDS IN ALL FILES (ALL WORDBANKS)
        axios.get('http://127.0.0.1:3000/api/words')
          .then(words => {
            window.console.log(words);
            localStorage.setItem("wordsFromApi", JSON.stringify(words.data));
          })
          .catch(err => window.console.log(err));
      }
    },
    components: {
    },
    methods : {
        menuButtonClicked(pageName){
            this.$router.push(pageName);
        }
    }
}
</script>
