<template>
  <div :class="columnSize" class="column BaseNewsCard">
    <div class="card">
      <div class="card-image">
        <nuxt-link :to="singleLink" :title="title">
          <figure class="newsImage image is-2by1">
            <no-ssr>
            <img v-lazy="image" :alt="title">
            </no-ssr>
          </figure>
        </nuxt-link>
        <div class="card-content">
          <p class="subtitle is-6 has-text-grey">
            <svg style="width:12px;height:12px" viewBox="0 0 24 24">
              <path fill="#000000" d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" />
          </svg>
            {{ thedate }}
            <svg style="width:12px;height:12px" viewBox="0 0 24 24">
              <path fill="#000000" d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
          </svg>
            {{ timeToRead }} min Lesezeit
          </p>
          <p class="title is-4 newsTitle">
            <nuxt-link :to="singleLink" :title="title">{{ title }}</nuxt-link>
          </p>
          <nuxt-link to="/autoren/" :title="title">
            <div class="author media">
              <figure class="media-left">
                <p class="image is-48x48">
                  <no-ssr>            
                    <img v-lazy="author.autorImage" class="is-rounded authorImage" :alt="author.autorName">
                  </no-ssr>
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <span class="author-top">Geschrieben von</span>
                  <p class="author-name">{{ author.autorName }}</p>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Schnupfnasen aufgepasst'
    },
    date: {
      type: Object,
      default: () => {
        return { seconds: 123456789 }
      }
    },
    excerpt: {
      type: String,
      default:
        'Dies ist ein Beispieltext, der als Einleitung zum Artikel dient. '
    },
    columnSize: {
      type: String,
      default: 'is-4'
    },
    singleLink: {
      type: String,
      default: '/news/123'
    },
    image: {
      type: String,
      default: 'https://via.placeholder.com/450x200.png'
    },
    timeToRead: {
      type: String,
      default: '5'
    },
    isCard: {
      type: Boolean,
      default: true
    },
    author: {
      type: Object,
      default: () => {
        return {
          authorName: 'Max Mustermann',
          authorImage: 'https://via.placeholder.com/128x128.png',
          id: 'max-mustermann'
        }
      }
    }
  },
  computed: {
    thetitle: function() {
      if (this.title.length > 85) {
        return this.title.substring(0, 84) + '...'
      } else {
        return this.title.substring(0, 84)
      }
    },
    thedate: function() {
      var options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
      }
      var date = new Date(this.date.seconds * 1000).toLocaleDateString(
        'de-DE',
        options
      )
      return date
    }
  }
}
</script>

<style scoped>
.author {
  line-height: 1em;
}
.author-top {
  text-transform: uppercase;
  color: grey;
  font-size: 0.8em;
}
.author-name {
  font-size: 1.2em;
  font-weight: 600;
  color: #363636;
}
.authorImage {
  margin: 0 !important;
}
.BaseNewsCard .newsTitle {
  min-height: 80px;
}
.BaseNewsCard .newsImage {
  margin: 0;
}
.news figure {
  margin-left: 0 !important;
  margin-right: 0 !important;
  margin-bottom: 0 !important;
}
/* styles for '...' */
.block-with-text {
  /* hide text if it more than N lines  */
  overflow: hidden;
  /* for set '...' in absolute position */
  position: relative;
  /* use this value to count block height */
  line-height: 1.2em;
  /* max-height = line-height (1.2) * lines max number (3) */
  max-height: 3.6em;
  /* fix problem when last visible word doesn't adjoin right side  */
  text-align: justify;
  /* place for '...' */
  margin-right: -1em;
  padding-right: 1em;
}
/* create the ... */
.block-with-text:before {
  /* points in the end */
  content: '...';
  /* absolute position */
  position: absolute;
  /* set position to right bottom corner of block */
  right: 0;
  bottom: 0;
}
/* hide ... if we have text, which is less than or equal to max lines */
.block-with-text:after {
  /* points in the end */
  content: '';
  /* absolute position */
  position: absolute;
  /* set position to right bottom corner of text */
  right: 0;
  /* set width and height */
  width: 1em;
  height: 1em;
  margin-top: 0.2em;
  /* bg color = bg color under block */
  background: white;
}
</style>
