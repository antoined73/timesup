<template>
    <div class="column">
        <a class="button is-link" @click="$router.push('/words')">Retour</a>
        <div v-if="!isTitleEdited" class="level">
            <h2 class="is-half">{{this.bank.title}}</h2>
            <a class="button column is-one-quarter"
               @click="editTitle()">
                Modifier
            </a>
        </div>
        <div v-if="isTitleEdited" class="level">
            <input class="input is-half" type="text"
                   placeholder="Titre" v-model="titleInput">
            <a class="button column is-one-quarter"
               @click="validateTitle()">
                Valider
            </a>
        </div>
        <ul>
            <li v-for="(word, index) in this.bank.words" :key="index" class="level">
                {{word}}
                <a class="button column is-one-quarter"
                   @click="deleteWord(word)">
                    Supprimer
                </a>
            </li>
        </ul>
        <div class="level">
            <input class="input is-half" type="text"
                   placeholder="Ajouter un mot" v-model="wordInput">
            <a class="button column is-one-quarter"
               @click="addWord()">
                Ajouter
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WordsDetailsView',
        data() {
            return {
                wordBankId: this.$route.params.wordBankId,
                isTitleEdited: false,
                titleInput: '',
                wordInput: '',
            }
        },
        computed: {
            bank() {
                // Dunno why but returning undefined
                return this.$store.getters['words/getWordBankByWordBankId'](this.wordBankId);
            }
        },
        methods: {
            editTitle() {
                this.isTitleEdited = true;
                this.titleInput = this.bank.title;
            },
            validateTitle() {
                this.isTitleEdited = false;
                if (!this.titleInput || this.titleInput.length === 0) {
                    return;
                }
                this.$store.commit('words/renameWordBank', {wordBankId: this.wordBankId, newTitle: this.titleInput});
            },
            addWord() {
                if (!this.wordInput || this.wordInput.length === 0) {
                    return;
                }
                this.$store.commit('words/addWordToWordBank', {wordBankId: this.wordBankId, word: this.wordInput});
                this.wordInput = '';
            },
            deleteWord(word) {
                this.$store.commit('words/removeWordFromWordBank', {wordBankId: this.wordBankId, word});
            }
        }
    }
</script>
