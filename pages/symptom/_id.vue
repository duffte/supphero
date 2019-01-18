<template>
  <div v-if="symptom">
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <nuxt-link to="/symptom" class="has-text-primary" title="Alle Symptome anzeigen">
              <small>Symptom</small>
            </nuxt-link>
            <h1 class="title is-1">{{ symptom.data.symptomName }}</h1>
            <p class="subtitle">{{ symptom.data.symptomKurzInfo }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section has-background-light">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <h2 class="title is-6">Diese Wirkstoffe helfen:</h2>
            <BaseWirkstoffShort
              v-for="item in symptom.wirkstoffe"
              :key="item.wirkstoff.id"
              :image="item.wirkstoff.wirkstoffIcon"
              :title="item.wirkstoff.wirkstoffName"
              :subtitle="item.wirkstoff.wirkstoffTyp.wirkstoffTypName"
              :info="item.content"
              :wertung="item.wirkstoff.wirkstoffWertung"
              :id="item.wirkstoff.id"
              :wirkstofftyp="item.wirkstoff.wirkstoffTyp.wirkstofftypName"
              :wirkungsgrad="item.wirkstoff.wirkungsgrad"
              :symptom="symptom.data.symptomName"
              :einnahmeempfehlung="item.empfehlung"
              :allgemein="item.content"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <div class="content">
              <div v-for="item in symptom.blocks" :key="item.id" class="has-text-dark block">
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

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">            
              <nuxt-link to="/autoren/" title="Autoren">
                <div class="author media">
                  <figure class="media-left">
                    <p class="image is-48x48">
                      <no-ssr>
                        <img v-lazy="symptom.data.autor.autorImage" :alt="symptom.data.autor.autorName" class="is-rounded authorImage">
                      </no-ssr>
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <span class="author-top">Geschrieben von</span>
                      <p class="author-name">{{ symptom.data.autor.autorName }}</p>
                    </div>
                  </div>
                </div>
              </nuxt-link>
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
  name: 'Symptom',
  data() {
    return {
      isHinweisActive: true,
      symptom: null,
      artikel: [{ id: 1 }, { id: 2 }, { id: 3 }]
    }
  },
  async asyncData({ params }) {
    let symptom = await fireDb
      .collection('symptom')
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

    return {
      symptom: symptom.data(),
      artikel: related
    }
  }
}
</script>

<style scoped>
.box {
  padding: 1.25rem 1.25rem 1.25rem 1.75rem;
}
.title-left {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
</style>
