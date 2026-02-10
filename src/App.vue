<template>
  <Splash v-if="showSplash" />
  <div v-else>
    <Navbar v-if="$route.name !== 'ProjectDetails'" />
    <router-view />

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Splash from './components/Splash.vue'
import Navbar from './components/Navbar.vue'


const showSplash = ref(true)

onMounted(() => {
  setTimeout(() => {
    showSplash.value = false
  }, 3000)
})
</script>

<style>
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}
</style>
