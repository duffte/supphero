<template>
  <div>
    <section class="section has-background-light">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-8 is-offset-2">
            <nuxt-link to="/wirkstoff" class="has-text-primary">
              <small>Wirkstoff</small>
            </nuxt-link>
            <h1 class="title is-1">{{ wirkstoff.data.wirkstoffName }}</h1>
            <p class="subtitle">{{ wirkstoff.data.wirkstoffKurzInfo }}</p>
          </div>
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
                <b-notification class="is-dark" :active.sync="isHinweisActive">
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
  </div>
</template>

<script>
import { fireDb } from '~/plugins/firebase.js'
export default {
  name: 'Wirkstoff',
  data() {
    return {
      isHinweisActive: true,
      wirkstoff: {}
    }
  },
  async asyncData({ app, params }) {
    let wirkstoff = await fireDb
      .collection('wirkstoff')
      .doc(params.id)
      .get()

    return {
      wirkstoff: wirkstoff.data()
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
