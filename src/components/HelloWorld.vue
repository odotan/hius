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

async function startFunction() {
  tries.value = 0
  const startTime = Date.now();
  run.value = true
  msg.value = 'working';
  do {
    seed.value = (Math.random()*100000000564654984700000000000).toString() + "g4df89hj4df654df64df65gfsdf4s+"
    msg.value = await getHash(seed.value);
    tries.value++;
    // console.log(msg.value)
    // await new Promise(resolve => setTimeout(resolve, 1000))
  } while (!!run.value && !checkHash(result.value))
  elapsed.value = (Date.now() - startTime) / 1000
}

function stopFunction(){
  run.value = false
}

async function getHash(i:string) {
  // console.log(i)
  // const array = new Uint32Array(10);
  // self.crypto.getRandomValues(array);
  const hash = await sha256(i);
  console.log(hash)
  result.value = bytesToBase64(hash);
  return result.value
}

function checkHash(str:string): boolean {
  // return true if the string contains "HiU"
  const prefix = "hi"
  return str.includes(prefix)
}


</script>

<style lang="stylus" scoped>
.box
  display flex
  flex-direction column
  justify-content center
  align-items center
</style>
