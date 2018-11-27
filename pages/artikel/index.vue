<template>
  <div>
    <BaseHero title="Artikel" subtitle="Inhalt"/>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column content">
            <ul>
              <li v-for="item in artikel" :key="artikel.id">
                <nuxt-link :to="'/artikel/'+artikel.id">
                  <span class="subtitle has-text-primary">{{ artikel.artikelName }}</span>
                </nuxt-link>
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
  name: 'Wirkstoff',
  data() {
    return {
      artikel: []
    }
  },
  async asyncData() {
    let artikelCollection = []

    await fireDb
      .collection('artikel')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          artikelCollection.push(doc.data().data)
        })
      })

    return {
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
