<template>
  <div>
    <BaseHero title="Artikel" subtitle="Inhalt"/>
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
           <BaseArticle v-for="item in artikel" :key="item.id" columnSize="is-4" :title="item.artikelName" :date="item.artikelDate" :author="item.autor"/>

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
</style>
