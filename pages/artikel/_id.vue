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
                  <span><b-icon
                    icon="calendar-range"
                    size="is-small"/> {{ theDate }} <b-icon
                      icon="timer"
                      size="is-small"/> Lesedauer: {{ data.data.timeToRead }} Minute(n)</span>
                  <hr>
                  <nuxt-link to="/autoren/">
                    <div class="author media">
                        <figure class="media-left">
                            <p class="image is-48x48">
                            <img :src="data.data.artikelAutor.autorImage" class="is-rounded authorImage">
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
                    class="image">
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
                  <img :src="item.src">
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
      :v-if="related" 
      class="section has-background-light">
      <div class="container">
        <h2 v-if="data.data.artikelTags">Weitere Artikel zu dem hier besprochenen Thema:
          <div class="tags">
            <nuxt-link 
            v-for="item in data.data.artikelTags" :key="item"            
              :to="'/thema/'+item" 
              class="tag is-info">{{ item }}</nuxt-link>
          </div>
        </h2>
        <div class="columns">
            <BaseArticle v-for="item in related" :key="item.id" columnSize="is-4" :title="item.artikelName" :date="item.artikelDate" :author="item.autor"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { fireDb } from '~/plugins/firebase.js'

export default {
  scrollToTop: true,
  data() {
    return {
      data: null,
      related: null
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

<style>
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
