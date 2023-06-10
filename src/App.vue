<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Swag from "./components/Swag.vue";
import Xmtp from "./components/xmtp.vue";
import MetaMaskLogin from "./components/MetaMaskLogin.vue";
import UserCard from "./components/UserCard.vue";
</script>
<template lang="pug">
Suspense
  template(#fallback)
    .loading
      h1 Loading...
  .container
    header
      AnimatedLogo
      UserBlock
    section
      UserCard
      Swag
      xmtp
</template>

<style lang="stylus">
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
  background-color #252422
  color: #FFFCF2

.secondary-text
  color #CCC5B9
.secondary-background
  background-color #CCC5B9

.container
  display flex
  justify-content center
  align-items center
  flex-direction column
</style>
