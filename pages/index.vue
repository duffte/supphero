<template>
  <section class="section">
    <div class="columns is-mobile">
      <div class="column title-left">
        <p class="title">Welches Supplement hilft bei</p>
      </div>
      <div class="column title-center has-text-left">
        <ul>
          <li v-for="symptom in symptome" :key="symptom.id">
            <nuxt-link :to="'/symptom/'+symptom.id">
              <p class="title has-text-primary">{{ symptom.symptomName }}</p>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { fireDb } from '~/plugins/firebase.js'
export default {
  name: 'HomePage',
  data() {
    return {
      symptome: []
    }
  },
  async asyncData() {
    let symptomCollection = []

    await fireDb
      .collection('symptom')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          symptomCollection.push(doc.data().data)
        })
      })

    return {
      symptome: symptomCollection
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
