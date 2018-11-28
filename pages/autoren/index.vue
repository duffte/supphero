<template>
  <div>
    <BaseHero
      title="Autoren"
      subtitle="Jedes Wort der Webseite stammt aus den Fingern dieser Damen und Herren."
    />
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column content">
            <h2></h2>
            <ul>
              <li v-for="autor in autoren" :key="autor.id">
                <span class="subtitle has-text-primary">{{ autor.autorName }}</span>
              </li>
            </ul>
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

<style>
</style>
