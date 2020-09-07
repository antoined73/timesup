<template>
    <section class="container">
        <div class="vmargin">
            <div class="field is-grouped vmargin">
                <p class="control">
                    <a class="button is-primary">
                    ALL
                    </a>
                </p>
                <p class="control" v-for="tag in tags" :key="tag.id">
                    <a class="button is-primary">
                    {{tag.name}}
                    </a>
                </p>
            </div>
    
            <div class="columns is-multiline">
                <Project v-for="project in projects" :key="project.id" :project="project"/>
            </div>
        </div>
    </section>
</template>

<script>
import Project from './Project.vue'

export default {
    data(){
        return {
            projects : [],
            tags: []
        }
    },
    components: {
        Project
    },
    created(){
        this.projects = this.$store.state.projects.projects;
        this.tags = this.$store.state.projects.tags;
    }
}
</script>

<style scoped>
.vmargin{
    margin: 2.5rem 0 2.5rem 0;
}
</style>
