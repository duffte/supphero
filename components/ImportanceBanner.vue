<template>
    <div class="ribbon" :class="color">
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
    style: function() {
      return 'background-color:' + this.color + '!important'
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
