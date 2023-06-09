<template lang="pug">
h1 {{result}}
.displayMessages
  //.message(v-for="msg in messages" :key="msg.content")
  //  p{{msg.content}}
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
async function sha256(message: string) {
  const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8); // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join(""); // convert bytes to hex string
  return hashHex;
}

interface Message {
  content: string,
  index: number,
}

const messages = ref<Message[]>([]);
const result = ref<string>('working')

onMounted(async () => {

  // hash for 1s
  const startTime = new Date().getTime();
  let currTime

  let doLoop = true;
  let i = 0;

  function hasHiU (test: string){
    const leadingZerosCount = test.match(/^0*/)
    const result = [] || leadingZerosCount
    return result.length
  }

  do {
    i++
    const newHash = await sha256(Math.random().toString())
    currTime = new Date().getTime();
    // const leadingZerosCount = 0 | newHash.match(/^0*/)[0].length;

    messages.value.push({
      content: newHash,
      index: i,
    })

    // elapsedSeconds = (endTime - startTime) / 1000
  } while (doLoop);

  console.log("Elapsed time exceeds 60 seconds")

  result.value = messages.value.length
})

</script>

<style lang="stylus" scoped>
.read-the-docs {
  color: #888;
}
</style>
