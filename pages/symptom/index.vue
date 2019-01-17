<template>
  <div>
    <BaseHero title="Symptome" subtitle="inhalt"/>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="content">
            <ul>
              <li v-for="symptom in symptome" :key="symptom.id">
                <nuxt-link :to="'/symptom/'+symptom.id">
                  <span class="subtitle has-text-primary">{{ symptom.symptomName }}</span>
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
