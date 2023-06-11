<template lang="pug">
pre {{result}}

</template>

<script lang="ts" setup>
import {ref, onMounted } from "vue";
import axios from "axios";


const result = ref('working')
onMounted( async () => {
  const apiKey = "5TNZQS5Z9R2R7F5VZ46V4IN2SAK7VPFJEV"
  const latestBlockUrl = `https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=${apiKey}`;
  const response = await axios.get(latestBlockUrl);

  const latestBlockNumber = response.data.result
  const blockUrl = `https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=${latestBlockNumber}&boolean=true&apikey=${apiKey}`;
  const response2 = await axios.get(blockUrl);
  console.log(response2.data.result)
  result.value = response2.data.result.hash
})
</script>

<style scoped>

</style>
