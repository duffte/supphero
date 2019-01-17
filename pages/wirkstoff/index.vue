<template>
  <div>
    <BaseHero title="Wirkstoffe" subtitle="Inhalt"/>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="content">
            <ul>
              <li v-for="wirkstoff in wirkstoffe" :key="wirkstoff.id">
                <nuxt-link :to="'/wirkstoff/'+wirkstoff.id">
                  <span class="subtitle has-text-primary">{{ wirkstoff.wirkstoffName }}</span>
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
      wirkstoffe: []
    }
  },
  async asyncData() {
    let wirkstoffCollection = []

    await fireDb
      .collection('wirkstoff')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          wirkstoffCollection.push(doc.data().data)
        })
      })

    return {
      wirkstoffe: wirkstoffCollection
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
