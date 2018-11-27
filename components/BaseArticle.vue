<template>
  <div :class="columnSize" class="column BaseNewsCard">
    <div class="card">
      <div class="card-image">
        <nuxt-link :to="singleLink">
          <figure class="newsImage image is-2by1">
            <img :src="image" :alt="title">
          </figure>
        </nuxt-link>
        <div class="card-content">
          <p class="subtitle is-6 has-text-grey">
            <b-icon icon="calendar-range" size="is-small"/>
            {{ thedate }}
            <b-icon icon="timer" size="is-small"/>
            {{ timeToRead }} min Lesezeit
          </p>
          <p class="title is-4 newsTitle">
            <nuxt-link :to="singleLink">{{ title }}</nuxt-link>
          </p>
          <nuxt-link :to="'/autor/'+author.id">
            <div class="author media">
              <figure class="media-left">
                <p class="image is-48x48">
                  <img :src="author.authorImage" class="is-rounded authorImage">
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <span class="author-top">Geschrieben von</span>
                  <p class="author-name">{{ author.authorName }}</p>
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
