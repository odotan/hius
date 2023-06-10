<template lang="pug">
.box
  MetaMaskLogin
</template>

<script lang="ts" setup>
import MetaMaskLogin from "./MetaMaskLogin.vue";
import { useAccountStore } from "../store/account";
const accountStore = useAccountStore();

</script>

<style scoped>

</style>
