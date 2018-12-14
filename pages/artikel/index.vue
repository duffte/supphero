<template>
  <div>
    <BaseHero title="Artikel" subtitle="Inhalt"/>
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
            <BaseArticle v-for="item in artikel" :key="item.id" :author="item.autor" :image="item.artikelImage" :title="item.artikelName" :singleLink="'/artikel/'+item.id"/>
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
