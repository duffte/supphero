<template>
  <nav id="nav" class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
        <no-ssr>
          <img class="logo" v-lazy="require('~/assets/logo.svg')" alt="Logo">
        </no-ssr>
        </router-link>
        <a
          :class="{ 'is-active': showNav }"
          role="button"
          class="navbar-burger burger"
          @click="showNav = !showNav"
          aria-label="Menü"
        >
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
        </a>
      </div>
      <div id="navbarToggle" :class="{ 'is-active': showNav }" class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link class="navbar-item" to="/symptom" title="Symptome">Symptome</nuxt-link>
          <nuxt-link class="navbar-item" to="/wirkstoff" title="Wirkstoffe">Wirkstoffe</nuxt-link>
          <nuxt-link class="navbar-item" to="/artikel" title="Lesen">Lesen</nuxt-link>
          <nuxt-link class="navbar-item" to="/stack">
              <span v-if="cartTotal > 0" class="badge is-badge-success">{{cartTotal}}</span>
              <svg style="margin-left:.25em;width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="#ffffff" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
              </svg>
          </nuxt-link>
          <UserProfile/>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from '@/plugins/firebase.js'
import UserProfile from '@/components/UserProfile'
export default {
  components: { UserProfile },
  data() {
    return {
      showNav: false
    }
  },
  computed: {
    cartTotal() {
      return this.$store.state.cartTotal
    }
  }
}
</script>

<style>
.logo {
  height: 1.75em;
}
.navbar.is-primary {
  background-color: #fff !important;
}
.navbar.is-primary .navbar-brand > a.navbar-item:hover,
.navbar.is-primary .navbar-brand > a.navbar-item.is-active,
.navbar.is-primary .navbar-brand .navbar-link:hover,
.navbar.is-primary .navbar-brand .navbar-link.is-active {
  background-color: #fff !important;
}
.navbar.is-primary .navbar-start > a.navbar-item:hover,
.navbar.is-primary .navbar-start > a.navbar-item.is-active,
.navbar.is-primary .navbar-start .navbar-link:hover,
.navbar.is-primary .navbar-start .navbar-link.is-active,
.navbar.is-primary .navbar-end > a.navbar-item:hover,
.navbar.is-primary .navbar-end > a.navbar-item.is-active,
.navbar.is-primary .navbar-end .navbar-link:hover,
.navbar.is-primary .navbar-end .navbar-link.is-active {
  background-color: transparent !important;
  color: #fff;
}
.navbar-burger span {
  background-color: #fff !important;
}
.hero.is-primary {
  background-color: #fff;
}
</style>

