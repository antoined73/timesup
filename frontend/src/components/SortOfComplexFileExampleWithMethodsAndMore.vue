<template>
    <div class="column is-paddingless is-one-third perspective">
        <div 
        @click="projectThumbailClicked()" 
        @mouseover="projectThumbailHoverred(true)"
        @mouseout="projectThumbailHoverred(false)"
        class="project-thumbail grow" 
        :style="'background-image : url('+project.image+')'">

            <div class="project-thumbail-cover">
                <p class="title has-text-white project-thumbail-title">{{project.title}}</p>
                <transition name="fade">
                    <p v-if="showDescription" class="title is-size-6 has-text-white project-thumbail-description">{{project.description}}</p>
                </transition>
                <div class="tags">
                    <span v-for="(tagName, index) in projectTags" :key="index" class="tag is-primary is-medium">{{tagName}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            showDescription : false
        }
    },
    props:{
        project: null
    },
    methods : {
        projectThumbailClicked(){
            this.$router.push('work/'+this.project.id);
        },
        projectThumbailHoverred(mouseOver){
            this.showDescription = mouseOver;
        }
    },
    computed : {
        projectTags(){
            if(this.project != null) return this.$store.getters['projects/getProjectTagsNamesByProjectId'](this.project.id)
            else return [];
        }
    }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.perspective {
    /* Safari 4-8 */
    /* -webkit-perspective: 100rem;  */
    /* -webkit-perspective-origin: right;  */
    /* perspective: 80rem; */
    /* perspective-origin: right; */
}

.project-thumbail-cover{
    transition: all 0.3s ease;
}

.project-thumbail-tag {
    margin: 0.5rem 0.5rem 0 0;
}

.project-thumbail-cover {
    align-self: flex-end;
}

.project-thumbail:hover {
    cursor: pointer;
}

.project-thumbail {
    display: flex; 
    margin: 0.5rem;
    padding : 3rem;
    height: 25rem; /* You must set a specified height */
    background-color: #cccccc; /* Used if the image is unavailable */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    border-radius: 0.5rem;
    -webkit-box-shadow: 0px 5px 43px -3px rgba(0,0,0,0.35);
    -moz-box-shadow: 0px 5px 43px -3px rgba(0,0,0,0.35);
    box-shadow: 0px 5px 43px -3px rgba(0,0,0,0.35);
}

.grow
{
    transition:all 0.3s ease;
    z-index: 1;
}

.grow:hover
{
    z-index: 10 !important;
    border-radius: 1rem;
    transition:all 0.3s ease;
    -webkit-transform: scale(1.125) translateX(-1rem) translateY(-1rem);
    -ms-transform: scale(1.125) translateX(-1rem) translateY(-1rem);
    transform: scale(1.125) translateX(-1rem) translateY(-1rem);
    -webkit-box-shadow: -17px 11px 102px -25px rgba(0,0,0,0.75);
    -moz-box-shadow: -17px 11px 102px -25px rgba(0,0,0,0.75);
    box-shadow: -17px 11px 102px -25px rgba(0,0,0,0.75);
}
</style>
