<template>  
  <nuxt-link class="navbar-item" v-if="this.$store.state.user" to="../account">
    <figure class="image is-24x24">
      <img class="is-rounded" :src="this.$store.state.user.photoURL">
    </figure>
    
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
import { fireauth } from '@/plugins/firebase'
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
      fireauth.signOut().then(() => {
        this.$router.push('/')
        this.$store.commit('setUser', null)
      })
    }
  }
}
</script>

<style lang="css">
</style>