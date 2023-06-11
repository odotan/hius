<script setup lang="ts">
import Swag from "./components/Swag.vue";
import Xmtp from "./components/xmtp.vue";
import UserCard from "./components/UserCard.vue";
import AnimatedLogo from "./components/AnimatedLogo.vue";
import UserControls from "./components/UserControls.vue";
import HelloWorld from "./components/HelloWorld.vue";
import EthScan from "./components/EthScan.vue";
import ScreenWithButtons from "./components/ScreenWithButtons.vue";
</script>
<template lang="pug">
Suspense
  template(#fallback)
    .loading
      h1 Loading...
  .container
    .main-header
      AnimatedLogo
      UserControls
    .main-section
      ScreenWithButtons
      eth-scan
      UserCard
      xmtp
      hello-world
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
  background-color #403d39

.container
  display flex
  justify-content center
  align-items center
  flex-direction column
  .main-header
    display flex
    width 100%
    flex-direction row
    justify-content space-between
</style>
