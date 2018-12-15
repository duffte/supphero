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
.navbar.is-primary .navbar-start > a.navbar-item:hover {
  background-color: #4f39a6 !important;
}

.has-text-primary {
  color: #4f39a6 !important;
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
</style>
