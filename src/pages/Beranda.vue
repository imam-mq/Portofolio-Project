<template>
  <div class="text-white h-screen overflow-hidden bg-gradient-to-r from-[#1a1a2e] via-[#162477] to-[#1f4068] bg-[length:400%_400%] animate-gradient-shift">

        <!-- Hero Section -->
        <section class="px-4 py-28 md:py-28 flex flex-col md:flex-row items-center  md:items-start justify-between md:pl-36 md:text-left">
            <!--Kiri Konten-->
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md" style="background: linear-gradient(90deg, #1D325F, #0D265A, #152C5D, #31225A);">
                <!--Ikon-->
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13 9L20 10L13 11L12 18L11 11L4 10L11 9L12 2Z" />
                </svg>
                <!--Teks-->
                <span class="font-semibold relative inline-block overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-white via-fuchsia-400 to-fuchsia-600 bg-[length:400%_400%] animate-gradient-shift">
                    Innovate with Confidence
                </span>
            </div>
        </section>

        <!--Kiri Konten-->
        <section class="px-4 md:px-10 lg:px-36 py-10 md:py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-8 -mt-[150px] md:-mt-[200px] text-center md:text-left">
                <div>
                    <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold -mt-[50px] md:-mt-[60px]">
                        <span class="text-white">Fullstack</span>
                    </h1>   
                    <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-fuchsia-500 py-4 md:py-6">
                        Developer
                    </h2>
                    <p class="text-base sm:text-xl text-white mt-2 font-semibold">
                        {{ currentText }}
                        <span class="border-r-2 border-white animate-blink"></span>
                    </p>
                    <p class="hidden md:block text-base sm:text-lg text-white max-w-xl mt-4 md:mt-6 font-semi mx-auto md:mx-0">
                        Merancang Website Yang Memadukan Inovasi, Fungsonalitas Dan Kemudahan Penggunaan Untuk Digital
                    </p>
                </div>
                <!--Gif Kanan-->
                <div class="flex-1 flex justify-center md:justify-end relative -top-4 md:-top-8">
                    <img :src="goalunscreen" alt="Gif" class="w-64 sm:w-80 md:w-full max-w-lg shadow-sm">
                </div>
        </section>

        <section class="relative px-8 py-1 flex flex-col gap-4 md:flex-row justify-between pl-36 hidden md:flex" style="top: -190px;">
            <!--Button Skils-->
            <div class="flex gap-4 mt-10">
                <div class="px-6 py-2 rounded-full text-white font-semibold backdrop-blur-md shadow-[0_0_15px_rgba(0,230,255,0.4)] border border-cyan-400 hover:border-cyan-600 transition duration-300">
                    React
                </div>
                <div class="px-6 py-2 rounded-full text-white font-semibold backdrop-blur-md shadow-[0_0_15px_rgba(0,230,255,0.4)] border border-cyan-400 hover:border-cyan-600 transition duration-300">
                    SpringBoot
                </div>
                <div class="px-6 py-2 rounded-full text-white font-semibold backdrop-blur-md shadow-[0_0_15px_rgba(0,230,255,0.4)] border border-cyan-400 hover:border-cyan-600 transition duration-300">
                    Javascript
                </div>
                <div class="px-6 py-2 rounded-full text-white font-semibold backdrop-blur-md shadow-[0_0_15px_rgba(0,230,255,0.4)] border border-cyan-400 hover:border-cyan-600 transition duration-300">
                    Laravel
                </div>
            </div>
        </section>

        <section class="relative px-4 md:px-8 lg:px-36 py-4 flex flex-col md:flex-row gap-3 md:gap-6 justify-center md:justify-start items-center md:items-start -mt-4 md:mt-12 top-[-20px] md:top-[-220px]">
            <!--Butto Project-->
            <div class="flex flex-row w-full md:w-auto justify-center md:justify-start gap-3">
                <router-link to="/project" class="flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 max-w-[120px] sm:max-w-xs bg-black text-white text-sm md:text-base font-semibold rounded-md shadow-[0_0_15px_rgba(165,110,255,0.4)] hover:shadow-[0_0_20px_rgba(165,110,255,0.7)] transition duration-300">
                    Projects
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3h7v7m0-7L10 14m-7 7h7a2 2 0 002-2v-7" />
                    </svg>
                </router-link>
                <a href="#projects" class="flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 max-w-[120px] sm:max-w-xs bg-black text-white text-sm md:text-base font-semibold rounded-md shadow-[0_0_15px_rgba(165,110,255,0.4)] hover:shadow-[0_0_20px_rgba(165,110,255,0.7)] transition duration-300">
                    Contact
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3h7v7m0-7L10 14m-7 7h7a2 2 0 002-2v-7" />
                    </svg>
                </a>
            </div>
        </section>

        <!--Social Media-->
        <section class="relative flex flex-row gap-4 mt-6 justify-center md:justify-start md:pl-36 top-[-40px] md:top-[-230px] flex-wrap">
                <a href="#" target="_blank" class="p-2 sm:p-3 bg-[#1a1a2e] rounded-md shadow-[0_0_25px_rgba(165,110,255,0.5)] hover:shadow-[0_0_35px_rgba(165,110,255,0.8)] transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.4.7-4.1-1.5-4.1-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.7 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.3 1.2-3.2 0-.3-.5-1.4.1-2.9 0 0 1-.3 3.3 1.2a11.6 11.6 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.5.1 2.6.1 2.9.7.9 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0012 .3"></path>
                    </svg>
                </a>
                <a href="#" target="_blank" class="p-2 sm:p-3 bg-[#1a1a2e] rounded-md shadow-[0_0_25px_rgba(165,110,255,0.5)] hover:shadow-[0_0_35px_rgba(165,110,255,0.8)] transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.8-.8-1.8-1.8S5.5 4.1 6.5 4.1s1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.5 11.3h-3v-5.6c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 3v5.6h-3v-10h2.9v1.4h.1c.4-.7 1.4-1.4 2.9-1.4 3.1 0 3.7 2 3.7 4.5v5.5z" />
                    </svg>
                </a>
                <a href="#" target="_blank" class="p-2 sm:p-3 bg-[#1a1a2e] rounded-md shadow-[0_0_25px_rgba(165,110,255,0.5)] hover:shadow-[0_0_35px_rgba(165,110,255,0.8)] transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" class="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.2-.6.5-1 1-1.5s.9-.8 1.5-1c.5-.2 1.3-.4 2.5-.5 1.3-.1 1.7-.1 4.9-.1m0-2.2C8.7 0 8.3 0 7 0 5.7 0 4.7.2 3.9.5 3 .8 2.2 1.3 1.4 2.1.6 2.9.1 3.7-.2 4.6-.5 5.4-.7 6.4-.8 7.7c-.1 1.3-.1 1.7-.1 4.3s0 3 .1 4.3c.1 1.3.3 2.3.6 3.1.3.9.8 1.7 1.6 2.5.8.8 1.6 1.3 2.5 1.6.8.3 1.8.5 3.1.6 1.3.1 1.7.1 4.3.1s3 0 4.3-.1c1.3-.1 2.3-.3 3.1-.6.9-.3 1.7-.8 2.5-1.6.8-.8 1.3-1.6 1.6-2.5.3-.9.5-1.9.6-3.1.1-1.3.1-1.7.1-4.3s0-3-.1-4.3c-.1-1.3-.3-2.3-.6-3.1-.3-.9-.8-1.7-1.6-2.5-.8-.8-1.6-1.3-2.5-1.6-.9-.3-1.9-.5-3.1-.6C15 0 14.6 0 12 0z" />
                        <circle cx="12" cy="12" r="3.2" />
                    </svg>
                </a>
        </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import goalunscreen from '../assets/goalunscreen.gif'

const texts = ["Tech Enthusiast", "Data Enthusiast"]
const currentText = ref("")
let textIndex = 0
let charIndex = 0
let isDeleting = false

const typeEffect = () => {
  let current = texts[textIndex]
  
  if (isDeleting) {
    currentText.value = current.substring(0, charIndex--)
  } else {
    currentText.value = current.substring(0, charIndex++)
  }

  if (!isDeleting && charIndex === current.length) {
    setTimeout(() => isDeleting = true, 1500)
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    textIndex = (textIndex + 1) % texts.length
  }
  setTimeout(typeEffect, isDeleting ? 100 : 150)
}

onMounted(() => {
  typeEffect()
})

</script>
