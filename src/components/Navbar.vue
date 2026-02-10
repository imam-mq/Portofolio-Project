<template>
    <header class="bg-[#31225A] text-white fixed w-full z-50 shadow-md">
        <div class="container mx-auto flex items-center justify-between px-6 py-4">
            <!--Logo Text-->
            <h1 class="text-4xl md:text-4xl font-bold text-fuchsia-500">
                Bagus Maulana
            </h1>

            <!--Menu Dekstop-->
            <nav class="hidden md:flex gap-8 text-lg font-medium cursor-pointer">
                <router-link to="/" class="hover:text-fuchsia-400 transition">Home</router-link>
                <router-link to="/about" class="hover:text-fuchsia-400 transition">About</router-link>
                <router-link to="/project" class="hover:text-fuchsia-400 transition">Project</router-link>
                <router-link to="/contact" class="hover:text-fuchsia-400 transition">Contact</router-link>
            </nav>

            <!--Mobile Menu button-->
            <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none text-fuchsia-400 hover:text-fuchsia-300 transition">
                <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!--Mobile Menu Dropdown-->
        <transition name="fade">
            <div v-if="isOpen" class="md:hidden bg-[#1a1a2e] border-t border-fuchsia-500">
                <nav class="flex flex-col pl-14 gap-4 py-4 text-lg">
                    <router-link to="/" class="hover:text-fuchsia-400 transition">Home</router-link>
                    <router-link to="/about" class="hover:text-fuchsia-400 transition">About</router-link>
                    <router-link to="/project" class="hover:text-fuchsia-400 transition">Project</router-link>
                    <router-link to="/contact" class="hover:text-fuchsia-400 transition">Contact</router-link>
                </nav>
            </div>
        </transition>
    </header>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>

<style>
.fade-enter-active, .fade.leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter-active, .fade-leave-to {
    opacity: 0;
}
</style>
