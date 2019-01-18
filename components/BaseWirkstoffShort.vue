<template>
  <article class="box is-relative">
    <div class="content">
      <div class="columns is-mobile">
          <ImportanceBanner :color="item.bgcolor"/>
        <div class="column">
          <small>{{ item.wirkstoff.wirkstoffTyp.wirkstofftypName }}</small>
          <br>
          <nuxt-link :to="'/wirkstoff/'+item.id" :title="'zum Wirkstoff '+ item.wirkstoff.wirkstoffName">
            <h3 class="title is-3" :class="item.textcolor" style="margin-bottom:0">{{ item.wirkstoff.wirkstoffName }}</h3>
          </nuxt-link>
        </div>
        <div class="column has-text-right">
          <div class="button is-rounded has-background-primary" @click="addItem">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="#ffffff" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
            </svg>
          </div>
          <AmazonButton :keyword="item.wirkstoff.wirkstoffName" :color="item.bgcolor"/>
        </div>
      </div>
          
      <hr>       
          <h4><small>Einnahme</small></h4>
          <p>
            {{ item.empfehlung }}
          </p>
        <hr/>
           <h4><small>Darum {{ item.wirkstoff.wirkstoffName }}</small></h4>
          <p>{{ item.content }}</p>
        </div>
  </article>
</template>



<script>
import AmazonButton from '@/components/AmazonButton.vue'
import ImportanceBanner from '@/components/ImportanceBanner.vue'
export default {
  components: {
    AmazonButton,
    ImportanceBanner
  },
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          title: 'title',
          asin: '12345',
          subtitle: 'asd',
          info: 'hehe',
          id: '1',
          wirkstofftyp: 'vitamin',
          wirkungsgrad: 10
        }
      }
    }
  },
  methods: {
    addItem() {
      this.$store.commit('addItem', this.item)
    }
  }
}
</script>

<style>
.is-relative {
  position: relative;
}
.is-bold {
  font-weight: bold;
}
</style>
