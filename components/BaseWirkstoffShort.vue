<<<<<<< HEAD
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
=======
<template>
  <article class="box">
    <div class="content">
      <div class="columns" style="margin-bottom:0">
        <div class="column">
          <small>{{ wirkstofftyp }}</small>
          <br>
          <nuxt-link :to="'/wirkstoff/'+id">
            <h3 class="title is-3 has-text-primary" style="margin-bottom:0">{{ title }}</h3>
          </nuxt-link>
        </div>
        <div class="column has-text-right">
          <a
            :href="'http://www.amazon.de/s/field-keywords='+title+'&tag=jul.supphero-21'"
            class="button is-light"
            style="height:auto"
          >
            <img class="image" style="width:100px;height:auto" src="~/assets/amazon.png">
          </a>
        </div>
      </div>
      <hr>
      <small>Einnahme</small>
      <p>
        <b-icon icon="emoticon-happy"/>
        {{ einnahmeempfehlung }}
      </p>

      <p>
        <b-icon icon="emoticon-neutral"/>
        {{ sonicht }}
      </p>
      <hr>
      <p class="has-text-grey">{{ info }}</p>
    </div>
  </article>
</template>



<script>
export default {
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
    sonicht: {
      type: String,
      default:
        'Bei Langzeiteinnahme von Vitamin B6 können mehr als 100mg pro Tag das Nervensystem schädigen.'
    }
  }
}
</script>

<style>
.is-bold {
  font-weight: bold;
}
</style>
>>>>>>> 4d922a0639d42ada25c7c37200b4bf6d90cbc2f0
