<template>
  <div>
    <NavBar/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{ title: 'Home', icon: 'home', to: { name: 'index' } }]
    }
  }
}
</script>

<style>
.hero.is-primary {
  background-color: #4f39a6 !important;
}
.has-background-primary {
  background-color: #4f39a6 !important;
}

a {
  color: #694be3;
}
section a {
  color: #694be3;
}

@media screen and (min-width: 1088px) {
  .navbar a {
    color: #fff !important;
  }
  .navbar.is-primary .navbar-start > a.navbar-item:hover {
    background-color: #4f39a6 !important;
  }
  .navbar .nuxt-link-exact-active {
    background-color: #4f39a6 !important;
  }
  .navbar.is-primary .navbar-brand > a.navbar-item:hover,
  .navbar.is-primary .navbar-brand > a.navbar-item.is-active,
  .navbar.is-primary .navbar-brand .navbar-link:hover,
  .navbar.is-primary .navbar-brand .navbar-link.is-active {
    background-color: #4f39a6 !important;
  }
}

.navbar-brand a.navbar-item:hover {
  background-color: rgba(0, 0, 0, 0) !important;
}

.navbar-burger span {
  color: #fff;
}

.has-text-primary {
  color: #4f39a6 !important;
}
</style>
