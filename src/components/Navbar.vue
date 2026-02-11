<template>
  <header class="fixed w-full z-[100] bg-[#0f172a]/60 backdrop-blur-xl border-b border-white/5">
    <div class="container mx-auto flex items-center justify-between px-6 py-4">
      
        <h1 class="text-3xl font-extrabold bg-gradient-to-r from-fuchsia-500 to-purple-400 bg-clip-text text-transparent">
            Imam Mubaraq
        </h1>

        <nav class="hidden md:flex gap-8">
            <router-link to="/" class="nav-item">Home</router-link>
            <router-link to="/about" class="nav-item">About</router-link>
            <router-link to="/project" class="nav-item">Project</router-link>
            <router-link to="/contact" class="nav-item">Contact</router-link>
        </nav>

        <button @click.stop="isOpen = !isOpen" class="md:hidden z-[110] text-fuchsia-400 p-2">
            <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>

    <transition name="slide-down">
      <div v-if="isOpen" class="md:hidden absolute top-full left-0 w-full bg-[#0f172a] border-b border-fuchsia-500/20 shadow-2xl">
        <nav class="flex flex-col p-6 gap-4">
          <router-link @click="isOpen = false" to="/" class="mobile-link">Home</router-link>
          <router-link @click="isOpen = false" to="/about" class="mobile-link">About</router-link>
          <router-link @click="isOpen = false" to="/project" class="mobile-link">Project</router-link>
          <router-link @click="isOpen = false" to="/contact" class="mobile-link">Contact</router-link>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
    import { ref } from 'vue'
    const isOpen = ref(false)
</script>
