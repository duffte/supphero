<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <nuxt-link to="/symptom" class="has-text-primary" title="Alle Symptom anzeigen">
              <small>Symptom</small>
            </nuxt-link>
            <h1 class="title is-1">{{ wirkstoff.data.wirkstoffName }}</h1>
            <p class="subtitle">{{ wirkstoff.data.wirkstoffKurzInfo }}</p>
          </div>
        </div>
      </div>
    </section>
    

    <section class="section has-background-light">
      <div class="container">        
        <div class="columns">        
          <div class="column is-8 is-offset-2">
            <h2 class="title is-6">{{ wirkstoff.data.wirkstoffName }} hilft bei diesen Symptomen:</h2>
              
          <div v-for="item in wirkstoff.mentions">
            
              <nuxt-link :to="'../symptom/'+item.id">
                <div class="box">
                  <h3 class="title is-4">{{item.name}}</h3>
                  
                  <p>{{item.content}}</p>
                </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      </div>
    </section>

    
    <section class="section" v-if="wirkstoff.blocks.length > 0">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <div class="content">
              <div v-for="item in wirkstoff.blocks" :key="item.id" class="has-text-dark block">
                <figure v-if="item.type == 'image'" class="figure column is-10 is-offset-1">
                  <img :src="item.src">
                  <figcaption>{{ item.caption }}</figcaption>
                </figure>
                <div
                  v-else-if="item.type == 'text'"
                  class="column"
                  v-html="$md.render(item.content)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section has-background-primary">
      <div class="container">
        <div class="columns">
          <BaseArticle v-for="item in artikel" :key="item.id" :author="item.autor" :image="item.artikelImage" :title="item.artikelName" :singleLink="'../../artikel/'+item.id"/>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { fireDb } from '~/plugins/firebase.js'
export default {
  name: 'Wirkstoff',
  data() {
    return {
      isHinweisActive: true,
      wirkstoff: {},
      artikel: {}
    }
  },
  async asyncData({ app, params }) {
    let wirkstoff = await fireDb
      .collection('wirkstoff')
      .doc(params.id)
      .get()

    let artikelCollection = []

    await fireDb
      .collection('artikel')
      .orderBy('data.artikelDate', 'desc')
      .limit(3)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          artikelCollection.push(doc.data().data)
        })
      })

    return {
      wirkstoff: wirkstoff.data(),
      artikel: artikelCollection
    }
  }
}
</script>

<style scoped>
.box {
  margin-bottom: 1em;
}
.title-left {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
</style>
