<template>
    <div class="column">
        <a class="button is-link" @click="$router.push('/words')">Retour</a>
        <h2>{{this.bank.title}}</h2>
        <ul>
            <li v-for="(word, index) in this.bank.words" :key="index">
                {{word}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'WordsDetailsView',
        computed: {
            bank() {
                // Dunno why but returning undefined
                return this.$store.getters['words/getWordBankByWordBankId'](this.$route.params.wordBankId);
            }
        },
        methods: {}
    }
</script>
