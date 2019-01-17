<template>
  <article class="box is-relative">
    <div class="content">
      <div class="columns is-mobile">
          <ImportanceBanner :color="bgcolor"/>
        <div class="column">
          <small>{{ wirkstofftyp }}</small>
          <br>
          <nuxt-link :to="'/wirkstoff/'+id">
            <h3 class="title is-3" :class="textcolor" style="margin-bottom:0">{{ title }}</h3>
          </nuxt-link>
        </div>
        <div class="column has-text-right">
          <AmazonButton :keyword="title" :color="bgcolor"/>
        </div>
      </div>
          
      <hr>       
          <h4><small>Einnahme</small></h4>
          <p>
            {{ einnahmeempfehlung }}
          </p>
        <hr/>
           <h4><small>Darum {{ title }}</small></h4>
          <p>{{ allgemein }}</p>
    </div>
  </article>
</template>



<script>
import AmazonButton from '@/components/AmazonButton.vue'
import ImportanceBanner from '@/components/ImportanceBanner.vue'
export default {
  components: {
    AmazonButton,
    ImportanceBanner
  },
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    asin: {
      type: String,
      default: 'B00AUPRP8K'
    },
    subtitle: {
      type: String,
      default: 'Subtitle'
    },
    info: {
      type: String,
      default: 'info'
    },
    id: {
      type: String,
      default: 'id'
    },
    wirkungsgrad: {
      type: Number,
      default: 10
    },
    wirkstofftyp: {
      type: String,
      default: 'Vitamin'
    },
    image: {
      type: String,
      default: null
    },
    symptom: {
      type: String,
      default: null
    },
    einnahmeempfehlung: {
      type: String,
      default: 'Täglich morgens 50mg'
    },
    allgemein: {
      type: String,
      default: 'content'
    },
    bgcolor: {
      type: String,
      default: 'has-background-info'
    },
    textcolor: {
      type: String,
      default: 'has-text-info'
    }
  }
}
</script>

<style>
.is-relative {
  position: relative;
}
.is-bold {
  font-weight: bold;
}
</style>
