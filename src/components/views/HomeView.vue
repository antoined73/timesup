<template>
<div>
    <Hero/>
    <Projects/>
</div>
</template>

<script>
import Hero from '../Hero.vue'
import Projects from '../Projects.vue'

export default {
  name: 'HomeView',
  components: {
    Hero,
    Projects
  }
}
</script>
