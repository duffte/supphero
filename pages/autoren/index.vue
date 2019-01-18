<template>
  <div>
    <BaseHero
      title="Autoren"
      subtitle="Jedes Wort der Webseite stammt aus den Fingern dieser Damen und Herren."
    />
    <section class="section">
      <div class="container">
        <div class="columns" v-for="autor in autoren" :key="autor.id">
        <div class="column is-8 is-offset-2">
                    <div class="author media">
              <figure class="media-left">
                  <p class="image is-128x128">
                  <img :src="autor.autorImage" class="is-rounded authorImage" :alt="autor.autorName">
                  </p>
              </figure>
              <div class="media-content">
                  <div class="content">
                  <h2>{{ autor.autorName }}</h2>
                  <p class="subtitle">{{ autor.autorKurzInfo}}</p>
                  </div>
              </div>
          </div> 
           </div> 
        </div>
      </div>
    </section>
  </div>
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
          hid: 'description',
          name: 'description',
          content: this.description
        },
        //facebook
        { hid: 'ogtitle', property: 'og:title', content: this.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:image', property: 'og:image', content: this.image },
        //twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@supphero' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.title },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title
        }
      ]
    }
  },
  name: 'HomePage',
  data() {
    return {
      title: 'Supphero Autoren',
      image: 'https://supphero.netlify.com/_nuxt/img/368164f.svg',
      description: 'Diese flinken Finger schreiben für Supphero',
      autoren: []
    }
  },
  async asyncData() {
    let autorCollection = []

    await fireDb
      .collection('autor')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          autorCollection.push(doc.data().data)
        })
      })

    return {
      autoren: autorCollection
    }
  }
}
</script>

<style scoped>
.subtitle {
  font-family: Georgia, 'Times New Roman', Times, serif !important;
}
</style>
