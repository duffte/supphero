import { fireDb } from './plugins/firebase.js'
const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    meta: [
      htmlAttrs: {
        lang: 'de',
        amp: undefined // "amp" has no value
      },
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: 'description',
        name: 'description',
        content: 'Supphero zeigt auf, welche Supplemente bei welchem Symptom hilfreich sind.'
      },
      //facebook
      { hid: 'ogtitle', property: 'og:title', content: 'Supphero zeigt auf, welche Supplemente bei welchem Symptom hilfreich sind.' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Supphero zeigt auf, welche Supplemente bei welchem Symptom hilfreich sind.'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: 'asd.jpg' },
      //twitter
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@supphero' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Supphero' },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Supphero zeigt auf, welche Supplemente bei welchem Symptom hilfreich sind.'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'asd.jpg'
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Supphero'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/global.js', '~/plugins/firebase.js', '~/plugins/md-it'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ,
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    '@nuxtjs/markdownit',
    '@nuxtjs/axios'
  ],

  /*
  ** Build configuration
  */

  generate: {
    routes: async () => {
      let routes = []
      //symptome
      const symptom = fireDb.collection('symptom')
      const symptomCollection = await symptom.get()
      for (const doc of symptomCollection.docs) {
        routes.push(`/symptom/${doc.data().data.id}`)
      }
      const wirkstoff = fireDb.collection('wirkstoff')
      const wirkstoffCollection = await wirkstoff.get()
      for (const doc of wirkstoffCollection.docs) {
        routes.push(`/wirkstoff/${doc.data().data.id}`)
      }
      const artikel = fireDb.collection('artikel')
      const artikelCollection = await artikel.get()
      for (const doc of artikelCollection.docs) {
        routes.push(`/artikel/${doc.data().data.id}`)
      }
      return routes
    }
  },

  build: {
    /*
    ** You can extend webpack config here
    */
  }
}
