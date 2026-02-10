<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
    <div class="h-screen w-full bg-gradient-to-b from-[#2C3E64] via-[#6B3366] to-[#31225A] flex flex-col items-center justify-center text-white">
        <h1 class="text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-semibold text-center">Selamat Datang Di</h1>
        <h2 class="text-[#C436F8] text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-2">Portfolio Website</h2>

        <div class="flex gap-6 sm:gap-6 mt-6">
          <div class="bg-[#0e132a] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:w-14 md:h-14 flex items-center justify-center rounded-full shadow-lg shadow-pink-500/40">
            <i class="fab fa-instagram text-xl"></i>
          </div>
          <div class="bg-[#0e132a] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:w-14 md:h-14 flex items-center justify-center rounded-full shadow-lg shadow-pink-500/40">
            <i class="fab fa-linkedin-in text-xl"></i>
          </div>
          <div class="bg-[#0e132a] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:w-14 md:h-14 flex items-center justify-center rounded-full shadow-lg shadow-pink-500/40">
            <i class="fab fa-github text-xl"></i>
          </div>
        </div>

        <div class="flex items-center gap-2 text-white text-xs sm:text-sm bg-gradient-to-r from-[#1B55D4] via-[#0E2C6E] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-md w-fit mt-6">
          <i class="fas fa-globe text-blue-400"></i>
          <a href="https://www.bagusmaulan.com" class="text-blue-300 hover:underline">www.bagusmaulan.com</a>
        </div>
    </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
