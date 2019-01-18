<template>
<div>
<BaseHero
      title="Mein Stack"
      subtitle="Hier stehen Deine gespeicherten Wirkstoffe"
    />
    <section class="section">
      <div class="container">
        <div class="columns">
            <div class="column is-8 is-offset-2 content" >
                <div v-if="cartTotal > 0">
                    <div class="cartitems"
                        v-for="item in cart"
                        key="item">
                        <div class="carttext">
                        <h4>{{ item.wirkstoff.wirkstoffName }}</h4>
                        <p> {{ item.wirkstoffKurzInfo }}</p>
                        <p> <strong> 30mg/Tag </strong></p>
                        </div>
                        <img class="cartimg" :src="`/${item.symptomImage}`" :alt="`Image of ${item.symptomName}`">
                    </div>                
                </div>

                <div v-else>
                <h2>Hier ist noch nichts!</h2>
                <p>Dabei könnten hier die Wirkstoffe gelistet sein, die Du gespeichert hast.</p>
                </div>
            </div> 
        </div>
      </div>
    </section>
    </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    cart() {
      return this.$store.state.cart
    },
    cartTotal() {
      return this.$store.state.cartTotal
    }
  }
}
</script>

<style>
</style>