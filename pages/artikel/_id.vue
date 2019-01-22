<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <article>        
            <header class="column is-12 content">  
              <div class="columns">
                <div class="column is-6">
                  <h1>
                    {{ data.data.artikelName }}
                  </h1>                            
                  <p class="subtitle">
                    {{ data.data.artikelExcerpt }}
                  </p>
                  <span>
                    <svg style="width:12px;height:12px" viewBox="0 0 24 24">
                        <path fill="#000000" d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" />
                    </svg>
                      {{ theDate }}
                      <svg style="width:12px;height:12px" viewBox="0 0 24 24">
                        <path fill="#000000" d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
                    </svg> Lesedauer: {{ data.data.timeToRead }} Minute(n)</span>
                  <hr>
                  <nuxt-link to="/autoren/" title="Autoren">
                    <div class="author media">
                        <figure class="media-left">
                            <p class="image is-48x48">
                              <no-ssr>
                                <img v-lazy="data.data.artikelAutor.autorImage" :title="data.data.artikelAutor.autorName" class="is-rounded authorImage">
                              </no-ssr>
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                            <span class="author-top">Geschrieben von</span>
                            <p class="author-name">{{ data.data.artikelAutor.autorName }}</p>
                            </div>
                        </div>
                    </div>
                </nuxt-link>
                </div>
                <div class="column is-6">
                  <img 
                    :src="data.data.artikelImage" 
                    class="image"
                    :alt="data.data.artikelName">
                </div>
              </div>
            </header>
            <br>

            <section 
              id="blocks" 
              class="content">                      
              <div 
                v-for="(item) in data.blocks" 
                :key="item.id" 
                class="has-text-dark block">                          
                <figure 
                  v-if="item.type == 'image'" 
                  class="figure column is-10 is-offset-1">
                  <no-ssr>
                    <img v-lazy="item.src" :alt="item.caption">
                  </no-ssr>
                  <figcaption>{{ item.caption }}</figcaption>
                </figure>
                <div 
                  v-else-if="item.type == 'text'" 
                  class="column is-8 is-offset-2" 
                  v-html="$md.render(item.content)"/>                
              </div>
            </section>  
          </article>
        </div>               
      </div>
    </section>
    <section 
      class="section has-background-light">
      <div class="container">        
        <div class="columns">
             <BaseArticle v-if="item.id != $route.params.id" v-for="item in related" :key="item.id" :author="item.autor" :image="item.artikelImage" :title="item.artikelName" :singleLink="'../artikel/'+item.id"/>
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
  scrollToTop: true,
  data() {
    return {
      data: null,
      related: null,
      title: 'computed',
      image: 'https://supphero.netlify.com/_nuxt/img/368164f.svg',
      description: 'computed',
      subtitle: ''
    }
  },
  async asyncData({ app, params, error }) {
    let news = await fireDb
      .collection('artikel')
      .doc(params.id)
      .get()

    var related = []
    let rel = await fireDb
      .collection('artikel')
      .orderBy('data.artikelDate', 'desc')
      .limit(3)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          related.push(doc.data().data)
        })
      })

    if (news.data()) {
      return {
        data: news.data(),
        related: related
      }
    } else {
      error({ statusCode: 404, message: 'Post not found' })
    }
  },
  computed: {
    theDate: function() {
      var options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
      }
      var date = new Date(
        this.data.data.artikelDate.seconds * 1000
      ).toLocaleDateString('de-DE', options)
      return date
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
}
figure {
  margin: 2em 0;
}
#newsblocks .block:first-child p:first-child:first-letter {
  float: left;
  font-size: 55px;
  line-height: 60px;
  padding-top: 4px;
  padding-right: 8px;
  padding-left: 3px;
}
header .columns .column:first-child {
  display: flex;
  flex-direction: column;
  align-self: center;
}
</style>
