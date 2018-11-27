<template>
  <div>
    <BaseHero title="Symptome" subtitle="inhalt"/>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column content">
            <ul>
              <li v-for="autor in autoren" :key="autor.id">
                <span class="subtitle has-text-primary">{{ autor.autorName }}</span>
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
      autoren: []
    }
  },
  async asyncData() {
    let autorCollection = []

    await fireDb
      .collection('autor')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          symptomCollection.push(doc.data().data)
        })
      })

    return {
      autoren: autorCollection
    }
  }
}
</script>

<style>
</style>
