<template lang="pug">
.card
  header
    h1 {{ user.id }}
    p {{ user.walletAddress }}
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useAccountStore } from '../store/account';
import type { Account } from '../store/account';

const { user } = useAccountStore();
</script>

<style lang="stylus" scoped>

</style>
