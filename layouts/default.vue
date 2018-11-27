<template>
  <div>
    <NavBar/>
    <nuxt />

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
