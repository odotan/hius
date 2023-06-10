<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Swag from "./components/Swag.vue";
import Xmtp from "./components/xmtp.vue";
</script>
<template lang="pug">
Suspense
  template(#fallback)
    .loading
    h1 Loading...
  xmtp
</template>

<style lang="stylus" scoped>
// Some basic styles
html, body, #app
  width 100%
  height 100%
  margin 0
  padding 0
  min-height 100vh
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  background #121212

</style>
