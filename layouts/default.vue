<template>
  <div>
    <NavBar/>
    <transition name="slide-fade" mode="out-in">
    <nuxt/>
    </transition>
    <SocialSharing/>
    <Footer/>
  </div>
</template>

<script>
import SocialSharing from '@/components/SocialSharing'
export default {
  components: {SocialSharing}
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-20px);
}
</style>
