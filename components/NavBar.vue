<template>
  <nav id="nav" class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="~assets/supphero.svg" width="112" height="28">
      </router-link>
      <a
        :class="{ 'is-active': showNav }"
        role="button"
        class="navbar-burger burger"
        @click="showNav = !showNav"
      >
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
        <span aria-hidden="true"/>
      </a>
    </div>
    <div id="navbarToggle" :class="{ 'is-active': showNav }" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link class="navbar-item" to="/symptom">Symptome</nuxt-link>
        <nuxt-link class="navbar-item" to="/wirkstoff">Wirkstoffe</nuxt-link>
        <nuxt-link class="navbar-item" to="/artikel">Lesen</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNav: false
    }
  }
}
</script>

<style>
.navbar .is-primary {
  background-color: #694be3;
}
</style>

