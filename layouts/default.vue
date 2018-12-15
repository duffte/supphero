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
.hero .is-primary {
  background-color: #b8d900;
}
a {
  color: #4f39a6;
}
</style>
