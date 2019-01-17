<template>
  <section class="hero is-medium is-primary">
    
      <div class="hero-body">
        <div class="container">
        <div class="columns">
          <div class="column">                
            <img 
              v-if="image" 
              :src="image" 
              class="hero-image">
            <h1 class="title">
              {{ title }}
            </h1>
            <h2 class="subtitle">
              {{ subtitle }}
            </h2>
          </div>
          <div class="column">
            {{ image }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    subtitle: {
      type: String,
      default: 'Subtitle'
    },
    info: {
      type: String,
      default: 'info'
    },
    image: {
      type: String,
      default: null
    }
  }
}
</script>

<style>
</style>
