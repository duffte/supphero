<template>
  <div>
    <BaseHero
      title="Werbung"
      subtitle="Werben auf nimdas.de"
    />
    <section class="section">
      <div class="container">
        <div class="columns">
            <div class="column is-8 is-offset-2 content" v-html="$md.render(content)">

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
  name: 'Werbung',
  data() {
    return {
      title: 'Werben auf nimdas.de',
      image: 'https://supphero.netlify.com/_nuxt/img/368164f.svg',
      description: 'So werben Sie auf nimdas.de',
      content: '',
      subtitle: ''
    }
  },
  async asyncData({ app, params, error }) {
    let content = await fireDb
      .collection('page')
      .doc('werbung')
      .get()

    if (content.data()) {
      return {
        content: content.data().data.content,
        title: content.data().data.pageTitle,
        subtitle: content.data().data.pageSubtitle,
        description: content.data().data.pageSubtitle
      }
    }
  }
}
</script>

