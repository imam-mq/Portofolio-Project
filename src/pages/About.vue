<template>
    <div class="text-white min-h-screen bg-gradient-to-r from-[#1a1a2e] via-[#162477] to-[#1f4068] bg-[length:400%_400%] animate-gradient-shift py-10 px-4">
        <section id="tentang" class="bg-[#11235A] rounded-3xl shadow-xl max-w-screen-xl mx-auto px-6 py-16 mt-16">
        
            <!-- Flex Container -->
            <div class="flex flex-col md:flex-row md:items-center gap-10">

                <!-- Foto -->
                <div class="md:w-1/3 flex justify-center">
                <img :src="foto" alt="Foto Profil"
                    class="w-[350px] h-[350px] object-cover rounded-full border-4 border-purple-500 shadow-md">
                </div>

                <!-- Deskripsi -->
                <div class="flex flex-col md:w-7/12 text-white px-4 md:px-0">
                    <h2 class="text-2xl md:text-4xl font-bold border-l-4 border-purple-500 pl-4 mb-6 -mt-4">
                        Tentang Saya
                    </h2>
                    <p class="text-white text-base md:text-lg text-left md:text-justify font-semibold leading-relaxed mb-3 md:mb-7">
                        &nbsp; &nbsp; &nbsp; Saya Bagus Maulana lulusan Universitas Ahmad Dahlan dengan latar belakang Informatika. 
                        Saya memiliki minat yang kuat di bidang Teknologi Informasi, terutama pengembangan web, analisis sistem, 
                        dan analisis data. 
                    </p>
                    <p class="text-white text-base md:text-lg text-left md:text-justify font-semibold leading-relaxed mb-4">
                        &nbsp; &nbsp; Saya Bagus Maulana lulusan Universitas Ahmad Dahlan dengan latar belakang Informatika. Saya memiliki minat 
                        yang kuat di bidang Teknologi Informasi, terutama pengembangan web, analisis sistem, dan analisis data
                    </p>
                </div>
            </div>
        </section>

        <!--Button Download Cv & Project-->
        <section id="cta" class="mt-8 px-4 md:px-12 lg:px-44">
                <div class="flex gap-4 justify-center md:justify-start flex-wrap">
                    <a href="/resume/resume_imam.pdf"
                        download
                        class="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-2 px-2 md:py-3 md:px-6 rounded-lg flex items-center gap-2 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                        </svg>
                        Download CV
                    </a>
                    
                    <router-link
                        to="/project"
                        class="border border-fuchsia-500 text-white hover:bg-fuchsia-600 hover:text-white font-semibold py-2 px-2 md:py-3 md:px-6 rounded-lg 
                        flex items-center gap-2 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                        </svg>
                        View Project
                    </router-link>
                </div>
        </section>

        <section class="py-16 px-4 md:px-8 lg:px-16">
                <div class="max-w-7xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <!--Card-1-->
                        <div class="bg-[#1e2b56] rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 border border-white/10">
                            <div class="flex justify-between items-start">
                                <div class="bg-white/40 p-2 rounded-full">
                                    <!--Icon-->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" viewBox="0 0 576 512" fill="currentColor">
                                        <path d="M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z"/>
                                    </svg>
                                </div>
                                <p class="text-xl font-bold">10</p>
                            </div>
                            <div class="mt-3">
                                <h3 class="text -white font-sans font-semibold text-lg">Total Project</h3>
                                <p class="text-sm text-white/80 mt-3 font-sans text-md">
                                    Membuat Web Solusi Asam Lambung dsdsdsdsdsdsdsdsd
                                </p>
                            </div>
                        </div>

                        <div class="bg-[#1e2b56] rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 border border-white/10">
                            <div class="flex justify-between items-start">
                                <div class="bg-white/40 p-2 rounded-full">
                                    <!--Icon-->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" viewBox="0 0 640 640" fill="currentColor">
                                        <path d="M271.2 56C265.1 49.8 256.2 47.3 247.8 49.6C239.4 51.9 232.9 58.4 230.8 66.8L215.5 127C214.4 131.4 209.9 134 205.6 132.7L145.8 115.9C137.4 113.5 128.4 115.9 122.3 122C116.2 128.1 113.8 137.1 116.2 145.5L133.1 205.3C134.3 209.6 131.7 214.1 127.4 215.2L67.1 230.5C58.7 232.6 52.1 239.2 49.8 247.6C47.5 256 50 264.9 56.2 271L100.7 314.3C103.9 317.4 103.9 322.6 100.7 325.8L56.3 369.1C50.1 375.2 47.6 384.1 49.9 392.5C52.2 400.9 58.8 407.4 67.2 409.6L127.4 424.9C131.8 426 134.4 430.5 133.1 434.8L116.2 494.5C113.8 502.9 116.2 511.9 122.3 518C128.4 524.1 137.4 526.5 145.8 524.1L205.6 507.2C209.9 506 214.4 508.6 215.5 512.9L230.8 573.1C232.9 581.5 239.5 588.1 247.9 590.4C256.3 592.7 265.2 590.2 271.3 584L314.6 539.5C317.7 536.3 322.9 536.3 326.1 539.5L369.3 584C375.4 590.2 384.3 592.7 392.7 590.4C401.1 588.1 407.6 581.5 409.8 573.1L425.1 513C426.2 508.6 430.7 506 435 507.3L494.8 524.2C503.2 526.6 512.2 524.2 518.3 518.1C524.4 512 526.8 503 524.4 494.6L507.5 434.8C506.3 430.5 508.9 426 513.2 424.9L573.4 409.6C581.8 407.5 588.4 400.9 590.7 392.5C593 384.1 590.5 375.1 584.3 369.1L539.8 325.8C536.6 322.7 536.6 317.5 539.8 314.3L584.3 271C590.5 264.9 593 256 590.7 247.6C588.4 239.2 581.8 232.7 573.4 230.5L513.2 215.2C508.8 214.1 506.2 209.6 507.5 205.3L524.4 145.5C526.8 137.1 524.4 128.1 518.3 122C512.2 115.9 503.2 113.5 494.8 115.9L435 132.8C430.7 134 426.2 131.4 425.1 127.1L409.8 66.8C407.7 58.4 401.1 51.8 392.7 49.5C384.3 47.2 375.4 49.7 369.3 55.9L326 100.5C322.9 103.7 317.7 103.7 314.5 100.5L271.2 56z"/>
                                    </svg>
                                </div>
                                <p class="text-xl font-bold">10</p>
                            </div>
                            <div class="mt-3">
                                <h3 class="text -white font-sans font-semibold text-lg">Total Sertificate</h3>
                                <p class="text-sm text-white/80 mt-3 font-sans text-md">
                                    Keahlian profesional dan tervalidasi
                                </p>
                            </div>
                        </div>

                        <div class="bg-[#1e2b56] rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 border border-white/10">
                            <div class="flex justify-between items-start">
                                <div class="bg-white/40 p-2 rounded-full">
                                    <!-- LinkedIn Icon -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" viewBox="0 0 640 640" fill="currentColor">
                                        <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"/>
                                    </svg>
                                </div>
                                <p class="text-xl font-bold">10</p>
                            </div>
                            <div class="mt-3">
                                <h3 class="text -white font-sans font-semibold text-lg">Total Project</h3>
                                <p class="text-sm text-white/80 mt-3 font-sans text-md">
                                    Membuat Web Solusi Asam Lambung dsdsdsdsdsdsdsdsd
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>

        <!--Skill Saya-->
        <section class="py-12 px-4 sm:px-6 md:px-8 lg:px-20 xl:px-44">
                <div class="flex items-center">
                    <div class="w-12 sm:w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded mr-3"></div>
                    <h2 class="text-xl sm:text-2xl md:text-3xl font-bold font-sans text-white">Skill Saya</h2>
                </div>

                <!--Tombol Tabs-->
                <div class="flex flex-wrap gap-3 sm:gap-4 mt-4">
                    <button @click="setTab('tech')" :class="['px-3 sm:px-4 py-2 rounded-xl text-sm sm:text-base text-white font-semibold transition duration-300', activeTab==='tech' ? 'bg-gradient-to-r from-purple-600 to-pink-500 opacity-100' : 'bg-gray-700 opacity-70']">
                        Tech Stack
                    </button>
                    <button @click="setTab('tools')" :class="['px-3 sm:px-4 py-2 rounded-xl text-sm sm:text-base text-white font-semibold transition duration-300', activeTab==='tools' ? 'bg-gradient-to-r from-purple-600 to-pink-500 opacity-100' : 'bg-gray-700 opacity-70']">
                        Tools
                    </button>
                    <button @click="setTab('sertificate')" :class="['px-3 sm:px-4 py-2 rounded-xl text-sm sm:text-base text-white font-semibold transition duration-300', activeTab==='sertificate' ? 'bg-gradient-to-r from-purple-600 to-pink-500 opacity-100' : 'bg-gray-700 opacity-70']">
                        Sertificate
                    </button>
                </div>

                <!--Tech Stack-->
                <div v-show="activeTab==='tech'" id="tab-tech" class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 sm:gap-8 mt-7">
                    <div class="border border-purple-500 bg-[#2b195f] p-4 rounded flex items-center gap-3 hover:scale-105 transition-transform">
                        <img :src="html" alt="HTML5" class="w-10 h-10">
                        <span class="text-white text-md font-sans font-semibold whitespace-nowrap">HTML</span>
                    </div>
                    <div class="border border-purple-500 bg-[#2b195f] p-4 rounded flex items-center gap-3 hover:scale-105 transition-transform">
                        <img :src="Css" alt="HTML5" class="w-10 h-10">
                        <span class="text-white text-md font-sans font-semibold whitespace-nowrap">CSS</span>
                    </div>
                    <div class="border border-purple-500 bg-[#2b195f] p-4 rounded flex items-center gap-3 hover:scale-105 transition-transform">
                        <img :src="Php" alt="HTML5" class="w-10 h-10">
                        <span class="text-white text-md font-sans font-semibold whitespace-nowrap">PHP</span>
                    </div>
                    <div class="border border-purple-500 bg-[#2b195f] p-4 rounded flex items-center gap-3 hover:scale-105 transition-transform">
                        <img :src="Javascript" alt="HTML5" class="w-10 h-10">
                        <span class="text-white text-md font-sans font-semibold whitespace-nowrap">Javascript</span>
                    </div>
                    <div class="border border-purple-500 bg-[#2b195f] p-4 rounded flex items-center gap-3 hover:scale-105 transition-transform">
                        <img :src="React" alt="HTML5" class="w-10 h-10">
                        <span class="text-white text-md font-sans font-semibold whitespace-nowrap">React</span>
                    </div>
                    <div class="border border-purple-500 bg-[#2b195f] p-4 rounded flex items-center gap-3 hover:scale-105 transition-transform">
                        <img :src="Laravel" alt="HTML5" class="w-10 h-10">
                        <span class="text-white text-md font-sans font-semibold whitespace-nowrap5">Laravel</span>
                    </div>
                </div>

                <!--Konten Tools-->
                <div v-show="activeTab==='tools'" id="tab-tools" class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 sm:gap-8 mt-7">
                    <div class="border border-purple-500 bg-[#2b195f] p-4 rounded flex items-center gap-3 hover:scale-105 transition-transform">
                        <img :src="vscodeIcon" alt="VS Code" class="w-10 h-10">
                        <span class="text-white text-md font-sans font-semibold whitespace-nowrap pl-1 lg:pl-5">VS Code</span>
                    </div>
                    <div class="border border-purple-500 bg-[#2b195f] p-4 rounded flex items-center gap-3 hover:scale-105 transition-transform">
                        <img :src="Figma" alt="Figma" class="w-11 h-11">
                        <span class="text-white text-md font-sans font-semibold whitespace-nowrap pl-1 lg:pl-5">Figma</span>
                    </div>
                    <div class="border border-purple-500 bg-[#2b195f] p-4 rounded flex items-center gap-3 hover:scale-105 transition-transform">
                        <img :src="MysQl" alt="MysQl" class="w-10 h-10">
                        <span class="text-white text-md font-sans font-semibold whitespace-nowrap pl-1 lg:pl-5">MysQl</span>
                    </div>
                    <div class="border border-purple-500 bg-[#2b195f] p-4 rounded flex items-center gap-3 hover:scale-105 transition-transform">
                        <img :src="Github" alt="Github" class="w-10 h-10">
                        <span class="text-white text-md font-sans font-semibold whitespace-nowrap pl-1 lg:pl-5">Github</span>
                    </div>
                </div>

                 <!--Konten Sertificate-->
                <div v-show="activeTab==='sertificate'" id="tab-tools" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-7">
                    <div class="border border-purple-500 bg-[#2b195f] rounded-lg shadow-lg p-6 overflow-hidden">
                        <img :src="sertifikat1" alt="Business Analys" class="w-full object-cover rounded-sm">
                        <div class="p-4">
                            <h3 class="text-white font-bold text-lg">Lorem Ipsum</h3>
                            <p class="text-gray-300 text-sm">
                                Build interactive websites with additional functionality, including creating web applications with storage using Web Storage
                            </p>
                        </div>
                    </div>
                    <div class="border border-purple-500 bg-[#2b195f] rounded-lg shadow-lg p-6 overflow-hidden">
                        <img :src="sertifikat1" alt="Business Analys" class="w-full object-cover rounded-sm">
                        <div class="p-4">
                            <h3 class="text-white font-bold text-lg">Lorem Ipsum</h3>
                            <p class="text-gray-300 text-sm">
                                Build interactive websites with additional functionality, including creating web applications with storage using Web Storage
                            </p>
                        </div>
                    </div>
                </div>
        </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import goalunscreen from '../assets/goalunscreen.gif'
import foto from '../assets/foto.jpg'
import html from '../assets/html.png'
import Css from  '../assets/Css.png'
import Php from  '../assets/Php.png'
import vscodeIcon from '../assets/vscodeicon.png'
import Javascript from '../assets/Javascript.png'
import React from '../assets/React.png'
import Laravel from '../assets/Laravel.png'
import Figma from '../assets/Figma.png'
import MysQl from '../assets/MysQl.png'
import Github from '../assets/Github.png'
import sertifikat1 from '../assets/sertifikat1.png'

const activeTab = ref('tech')
function setTab(tab) {
  activeTab.value = tab
}

</script>
