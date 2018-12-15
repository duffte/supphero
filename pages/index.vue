<template>
  <section class="section">
    <div class="container">
      <div class="columns is-mobile">
        <div class="column has-text-right">
          <p class="title">Welches Supplement hilft bei</p>
        </div>
        <div class="column title-center has-text-left">
          <ul>
            <li v-for="symptom in symptome" :key="symptom.id">
              <nuxt-link :to="'/symptom/'+symptom.id">
                <p class="title has-text-primary">{{ symptom.symptomName }}</p>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { fireDb } from '~/plugins/firebase.js'
export default {
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'indexdescription',
          name: 'description',
          content: this.description
        },
        //facebook
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: this.image },
        //twitter
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@supphero' },
        { name: 'twitter:title', content: this.title },
        {
          name: 'twitter:description',
          content: this.description
        },
        {
          name: 'twitter:image',
          content: this.image
        },
        { name: 'twitter:image:alt', content: this.title }
      ]
    }
  },
  name: 'HomePage',
  data() {
    return {
      symptome: [],
      title: 'Supphero - Das passende Supplement für jedes Symptom',
      description:
        'Supphero erlaubt einfache Einsicht in die Wirkungsweisen von Supplementen bei typischen Symptomen.',
      image: 'https://supphero.netlify.com/_nuxt/img/368164f.svg'
    }
  },
  async asyncData() {
    let symptomCollection = []

    await fireDb
      .collection('symptom')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          symptomCollection.push(doc.data().data)
        })
      })

    return {
      symptome: symptomCollection
    }
  }
}
</script>

<style>
</style>
