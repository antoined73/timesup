<template>
<div>
  <section class="hero is-info is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-size-1 has-text-centered has-text-weight-bold is-family-secondary">
          Time's up !
        </h1>
        <Menu/>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import Menu from '../Menu.vue'

export default {
  name: 'HomeView',
  components: {
    Menu
  }
}
</script>
