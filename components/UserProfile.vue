<template>  
  <nuxt-link class="navbar-item" v-if="this.$store.state.user" to="../account">
    <figure class="image is-24x24">
      <img :src="this.$store.state.user.photoURL">
    </figure>
    
    <span class="has-text-white">{{ user.displayName }}</span>
    <button @click="logout" class="button is-danger">
      Logout
    </button>      
  </nuxt-link>
  <div v-else class="navbar-item">
      <nuxt-link to="../login" class="button is-dark">
        Login
      </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    user() {
      return this.$store.getters.activeUser
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('signOut').then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style lang="css">
</style>