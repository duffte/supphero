<template>
  <div>
    <NavBar/>
    <nuxt/>
    <SocialSharing/>
    <Footer/>
  </div>
</template>

<script>
export default {
  components: {
    SocialSharing: () => ({
      // The component to load (should be a Promise)
      component: import('@/components/SocialSharing'),
      // A component to use while the async component is loading
      //loading: LoadingComponent,
      // A component to use if the load fails
      //error: ErrorComponent,
      // Delay before showing the loading component. Default: 200ms.
      delay: 200,
      // The error component will be displayed if a timeout is
      // provided and exceeded. Default: Infinity.
      timeout: 3000
    })
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
