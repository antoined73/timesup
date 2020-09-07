<template>
<div class="column">
    <a 
    v-for="(wordBank, index) in this.banks" :key="index"
    @click="wordBankClicked(wordBank.id)"
    class="button is-link is-fullwidth is-medium my-1">
    {{wordBank.title}}
    </a>
</div>
</template>

<script>
export default {
  name: 'WordsView',
  computed : {
        banks(){
            return this.$store.state.words.wordBanks;
        }
    },
    methods : {
        wordBankClicked(wordBankId) {
            console.log("Wordbank choosen : "+ this.$store.getters['words/getWordBankByWordBankId'](wordBankId).title);
        }
    }
}
</script>
