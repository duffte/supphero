const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    meta: [
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
  build: {
    /*
    ** You can extend webpack config here
    */
  }
}
