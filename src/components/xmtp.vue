<template lang="pug">
section
  div(v-for="message in xmtpStore.messages" :key="message.id")
    | {{ message.content }}
  input(v-model="newMessage" type="text")
  button(@click="xmtpStore.sendMessage(newMessage)") Send
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useXmtpStore } from '../store/xmtp';
const xmtpStore = useXmtpStore();
const newMessage = ref('');
</script>
