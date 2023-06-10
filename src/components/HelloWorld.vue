<template lang="pug">
.box
  .controls
    button(@click="startFunction") Click Me
    button(@click="stopFunction") Stop
  .content(v-if="checkHash(result)")
    | {{ seed }} seed number
    p {{ tries }} hashes
    p {{ elapsed }} second
    p {{ Math.ceil(tries / elapsed, 2) }} hashes per second
    | {{ msg }}

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {sha256, bytesToBase64} from "../util/common";
interface Message {
  content: string,
  index: number,
}

const run = ref(false);
const messages = ref<Message[]>([]);
const result = ref<string>('working')

const msg = ref('')
const seed = ref('')
const tries = ref(0)
const elapsed = ref<number>(0)




</script>

<style lang="stylus" scoped>
.box
  display flex
  flex-direction column
  justify-content center
  align-items center
</style>
