<template lang="pug">
.contacts
  .contact(v-for="(contact, index) in contacts" :key="index")
    h1 {{ contact.name }}
    p {{ contact.phone }}
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const contacts = ref([
  {
    name: 'John Doe',
    phone: '1234567890',
  }
])
</script>

<style lang="stylus" scoped>
.box
  display flex
  flex-direction column
  justify-content center
  align-items center
</style>
