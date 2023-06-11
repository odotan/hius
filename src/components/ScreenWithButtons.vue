<template lang="pug">
.button-container
  button(v-for=" i in 33" :key="i" :class="i === 3 ? 'active' : ''") {{ i }}
</template>

<script lang="ts" setup>

</script>

<style lang="stylus" scoped>
.button-container
  display flex
  flex-direction row
  flex-wrap wrap
  justify-content flex-start
  align-items center

button
  margin 5px
  min-width 3em
  height 3em
  background #403d39
  &.active
    background limegreen !important
</style>
