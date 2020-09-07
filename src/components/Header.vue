<template>
<nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <!-- 
      <a class="navbar-item">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      Antoine Dezarnaud
    </a> 
    -->
    <router-link to="/" class="navbar-item">Antoine Dezarnaud</router-link>
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/work" class="navbar-item">
        Work
      </router-link>

      <router-link to="/contact" class="navbar-item">
        Contact
      </router-link>

    </div>

    <!-- <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div> -->
  </div>
</nav>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>