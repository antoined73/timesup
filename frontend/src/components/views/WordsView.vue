<template>
    <div class="column">
        <a class="button is-link" @click="$router.push('/')">Retour</a>
        <div v-for="(wordBank, index) in this.banks" :key="index"
           class="level">
            <p class="column is-half is-bold has-text-left">
                {{wordBank.title}} ({{wordBank.words.length}} mots)
            </p>
            <a class="button column is-one-quarter"
               @click="wordBankClicked(wordBank.id)">
                Modifier
            </a>
            <a class="button column is-one-quarter"
               @click="deleteWordBank(wordBank.id)">
                Supprimer
            </a>
        </div>
        <div class="level">
            <input class="input is-half" type="text"
                   placeholder="Ajouter une banque" v-model="wordBankInput">
            <a class="button column is-one-quarter"
               @click="addWordBank()">
                Ajouter
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WordsView',
        data() {
            return {
                wordBankInput: '',
            }
        },
        computed: {
            banks() {
                return this.$store.state.words.wordBanks;
            }
        },
        methods: {
            wordBankClicked(wordBankId) {
                console.log("Wordbank choosen : " + this.$store.getters['words/getWordBankByWordBankId'](wordBankId).title);
                this.$router.push(`/words/${wordBankId}`);
            },
            addWordBank() {
                if (!this.wordBankInput || this.wordBankInput.length === 0) {
                    return;
                }
                this.$store.commit('words/createWordBank', {title: this.wordBankInput});
                this.wordBankInput = '';
            },
            deleteWordBank(wordBankId) {
                this.$store.commit('words/deleteWordBank', wordBankId);
            }
        }
    }
</script>
