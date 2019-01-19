<template>
    <div class="ribbon" :style="bgcolor">
    </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'is-primary'
    }
  },
  computed: {
    bgcolor: function() {
      if (this.color == 'primary') {
        return 'background-color: #58c85c !important'
      } else if (this.color == 'secondary') {
        return 'background-color: #c3da1d !important'
      } else {
        return 'background-color: #a29b85 !important'
      }
    }
  }
}
</script>

<style scoped>
.ribbon {
  position: absolute;
  top: -1px;
  left: 0px;
  text-align: center;
  display: block;
  width: 12px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  height: calc(100% + 2px);
  background: #4f39a6;
}
</style>
