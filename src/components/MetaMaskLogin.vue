<template lang="pug">
.account
  .must-download-metamask(v-if="!isMetamaskInstalled") Metamask is not installed
  button(v-if="!!isMetamaskInstalled && !!user" @click="login") Login with Metamask
  button(v-else @click="logOut") Logout
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAccountStore } from '../store/account';
const { user, setAddress, logIn, logOut } = useAccountStore();

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
          logIn(address)
        })
        .catch((error) => {
          console.error('Login error:', error);
        });
  }
};

onMounted(checkMetamaskInstalled);
</script>
