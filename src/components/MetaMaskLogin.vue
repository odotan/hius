<template>
  <div>
    <button v-if="isMetamaskInstalled" @click="login">Login with Metamask</button>
    <p v-if="!isMetamaskInstalled">Metamask is not installed</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAccountStore } from '../store/account';
const { setAddress } = useAccountStore();

const isMetamaskInstalled =   ref(false);

const checkMetamaskInstalled = () => {
  if (typeof window.ethereum !== 'undefined') {
    isMetamaskInstalled.value = true;
  } else {
    isMetamaskInstalled.value = false;
  }
};


const login = () => {
  if (isMetamaskInstalled.value) {
    window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((accounts) => {
          const address = accounts[0];
          console.log('Logged in with address:', address);
          // save address in the user store
          setAddress(address)
        })
        .catch((error) => {
          console.error('Login error:', error);
        });
  }
};

onMounted(checkMetamaskInstalled);
</script>
