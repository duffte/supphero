<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <nuxt-link to="/symptom" class="has-text-primary">
              <small>Symptom</small>
            </nuxt-link>
            <h1 class="title is-1">{{ wirkstoff.data.wirkstoffName }}</h1>
            <p class="subtitle">{{ wirkstoff.data.wirkstoffKurzInfo }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
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
              <aside class="content">
                <b-notification :active.sync="isHinweisActive">
                  <i>
                    Wichtiger Hinweis:
                    Dieser Artikel enthält nur allgemeine Hinweise und sollte nicht zur Selbstdiagnose oder –behandlung verwendet werden. Er kann einen Arztbesuch nicht ersetzen. Die Beantwortung individueller Fragen durch unsere Experten ist leider nicht möglich.
                  </i>
                </b-notification>
              </aside>
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

<style>
.title-left {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
</style>
