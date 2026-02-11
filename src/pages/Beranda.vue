<template>
    <div class="h-screen w-full bg-gradient-to-br from-[#0f1729] via-[#1a1f3a] to-[#0f1729] text-white overflow-hidden relative flex items-center justify-center">
        <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-fuchsia-900/20 animate-gradient"></div>
    
        <div class="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl"></div>
        
        <div class="relative z-10 w-full pt-24 md:pt-12">
            <section class="container mx-auto px-6 py-20 md:py-48">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="space-y-6">
                        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L13 9L20 10L13 11L12 18L11 11L4 10L11 9L12 2Z" />
                            </svg>
                            <span class="text-sm font-medium bg-gradient-to-r from-white via-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
                                Berinovasi dengan Percaya Diri
                            </span>
                        </div>
                        <div class="space-y-2">
                            <h2 class="text-xl md:text-2xl text-gray-300 font-medium">
                                Hey everyone, I'm
                            </h2>
                            <h1 class="text-5xl md:text-7xl font-bold">
                                <span class="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                                    Imam Mubaraq
                                </span>
                            </h1>
                        </div>
                        <div class="flex items-center gap-2 text-xl md:text-2xl font-semibold">
                            <span class="text-cyan-400">{{ currentText }}</span>
                            <span class="inline-block w-0.5 h-6 bg-cyan-400 animate-blink"></span>
                        </div>
                        <p class="text-lg text-gray-400 max-w-lg leading-relaxed">
                            Hello and welcome to my corner of the web!
                        </p>

                        <div class="flex flex-wrap gap-3 pt-4">
                            <span v-for="skill in skills" :key="skill" 
                                class="px-6 py-2.5 rounded-full text-sm font-semibold border border-cyan-500/50 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500 hover:scale-105 transition-all duration-300 cursor-default">
                                {{ skill }}
                            </span>
                        </div>

                        <div class="flex flex-wrap gap-4 pt-6">
                            <router-link to="/project" class="group flex items-center gap-2 px-6 py-3 bg-black hover:bg-gray-900 text-white font-semibold rounded-lg border border-purple-500/50 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300">
                                <span>Projects</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </router-link>
                            <router-link to="/contact" class="group flex items-center gap-2 px-6 py-3 bg-black hover:bg-gray-900 text-white font-semibold rounded-lg border border-purple-500/50 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300">
                                <span>Contact</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </router-link>
                        </div>

                    </div>

                    <div class="hidden md:flex justify-center md:justify-end">
                        <div class="relative group">
                            <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-fuchsia-500/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                            
                            <div class="relative z-10">
                                <img :src="goalunscreen" 
                                    alt="Developer Animation" 
                                    class="w-80 md:w-full max-w-md lg:max-w-lg drop-shadow-2xl group-hover:scale-105 transition-transform duration-500">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import goalunscreen from '../assets/goalunscreen.gif'

const texts = ["Junior System Analyst", "Frontend Web Developer", "IT Support Helpdesk"]
const currentText = ref("")
const skills = ['React', 'SpringBoot', 'Javascript', 'Laravel']

let textIndex = 0
let charIndex = 0
let isDeleting = false

const typeEffect = () => {
  const fullText = texts[textIndex];
  
  if (isDeleting) {
    currentText.value = fullText.substring(0, charIndex);
    charIndex--;
  } else {
    currentText.value = fullText.substring(0, charIndex);
    charIndex++;
  }

  let typingSpeed = isDeleting ? 80 : 150;

  if (!isDeleting && charIndex > fullText.length) {
    typingSpeed = 2000; // Berhenti sebentar di akhir kata
    isDeleting = true;
  } else if (isDeleting && charIndex < 0) {
    isDeleting = false;
    charIndex = 0;
    textIndex = (textIndex + 1) % texts.length;
    typingSpeed = 500; // Jeda sebelum mulai kata baru
  }

  setTimeout(typeEffect, typingSpeed);
}

onMounted(() => {
  typeEffect()
})
</script>