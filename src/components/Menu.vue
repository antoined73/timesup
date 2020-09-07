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
export default {
    data(){
        return {
            projects : [],
            tags: []
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
