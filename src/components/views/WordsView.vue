<template>
<div class="column is-paddingless is-one-third perspective">
    <div 
    v-for="(wordBank, index) in wordBanks" :key="index"
    @click="wordBankClicked()">
        <p class="title has-text-white project-thumbail-title">{{wordBank.title}}</p>
    </div>
    {{this.$store.wordsBanks}}
    </div>
</template>

<script>
export default {
  name: 'WordsView',
  computed : {
        wordBanks(){
            return this.$store.wordsBanks;
        }
    },
    methods : {
        wordBankClicked() {
            //console.log("hello !");
        }
    }
}
</script>
