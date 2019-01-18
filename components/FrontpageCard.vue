<template>
    <div class="fcard">
        <span class="fcard-text">{{ text }}</span>
    </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Name'
    }
  }
}
</script>

<style>
.fcard {
  position: relative;
  border-radius: 12px;
  height: 300px;
  width: 228px;
  background: #333;
  margin-right: 1em;

  align-items: flex-end;
  display: flex;
}
.fcard-text {
  color: white;
  font-size: 32px;
  margin-left: 0.5em;
  margin-bottom: 0.5em;
}
</style>
