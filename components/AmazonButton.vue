<template>
    <a :href="'http://www.amazon.de/s/field-keywords='+keyword+'&tag=jul.supphero-21'" target="_blank"
    class="button amazon"
    :class="color"
    >
        <b-icon
        icon="amazon"
        size="is-normal"/>
                  
    </a>
</template>

<script>
export default {
  props: {
    keyword: {
      type: String,
      default: 'keyword'
    },
    color: {
      type: String,
      default: 'is-primary'
    }
  }
}
</script>

<style>
.amazon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.button.is-primary {
  background-color: #694be3 !important;
}
.button.is-primary img {
  color: white !important;
}
</style>
