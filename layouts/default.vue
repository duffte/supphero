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
