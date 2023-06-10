<template lang="pug">
section
  div(v-for="message in xmtpStore.messages" :key="message.id")
    | {{ message.content }}
  input(v-model="newMessage" type="text")
  button(@click="xmtpStore.sendMessage(newMessage)") Send
</template>

<script setup lang="ts">
import { ref, onMounted} from 'vue';
import { useXmtpStore } from '../store/xmtp';
import {ethers} from "ethers";
const xmtpStore = useXmtpStore();
const newMessage = ref('');
onMounted(async () => {
  if (typeof window.ethereum !== 'undefined') {
    console.log(ethers.providers)
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    await xmtpStore.setupXmtp(signer);
  }
})
</script>
