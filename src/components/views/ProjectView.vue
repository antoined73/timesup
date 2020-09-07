<template>
<div>
    <section class="hero is-medium is-primary is-bold" :style="'background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('+project.image+'); background-size : cover;'">
        <div class="hero-body">
        <p class="title" v-if="project">
            {{project.title}}
        </p>
        <p class="subtitle" v-if="project">
            {{project.description}}
        </p>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-half">
                    <h1 class="title">Context</h1>
                    <h2 class="subtitle">
                        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                    </h2>
                    <h1 class="title">Presentation</h1>
                    <h2 class="subtitle">
                        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                    </h2>
                    <div class="video-container">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/YqaaZOid6B4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <h1 class="title">Challenges</h1>
                    <h2 class="subtitle">
                        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                    </h2>
                </div>
                <div class="column is-one-third">
                    <h1 class="title">Technologies</h1>
                    <h2 class="subtitle">
                        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                    </h2>
                </div>
            </div>
            
        </div>
    </section>
</div>
</template>

<script>
export default {
  name: 'ProjectView',
  components: {
  },
  data(){
      return {
          project : null
      }
  },
  created(){
      const projectId = parseInt(this.$route.params.projectId);
      this.project = this.$store.getters['projects/getProjectById'](projectId);
  }
}
</script>

<style>
.video-container {
  position: relative;
  padding-bottom: 56.25%; /*16:9*/
  padding-top: 30px; 
  height: 0; 
  overflow: hidden;
}
 
.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
