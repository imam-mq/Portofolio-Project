<template>
    <div class="min-h-screen text-white bg-gradient-to-r from-[#1a1a2e] via-[#162477] to-[#1f4068] bg-[length:400%_400%] animate-gradient-shift font-sans px-6 py-16 md:pl-36">
        <!-- Breadcrumb -->
        <div class="flex flex-col sm:items-center sm:flex-row gap-2 text-sm text-gray-400 mb-8">
          <button
            @click="$router.back()"
            class="flex items-center w-fit px-3 py-1 rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow hover:opacity-90 transition"
          >
            ← Back
          </button>
          <div class="flex flex-wrap gap-3 pl-2 sm:pl-4 text-lg sm:text-lg">
            <span class="font-sans">Projects</span>
            <span class="text-gray-500">›</span>
            <span class="text-pink-400 font-medium text-base">{{ project.title }}</span>
          </div>
        </div>

        <!-- Grid utama -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <!-- Kolom kiri -->
          <div>
            <!-- Judul & Deskripsi -->
            <h1 class="text-3xl font-bold text-white">{{ project.title }}</h1>
            <p class="text-gray-300 mt-4 leading-relaxed">
              {{ project.description || "No description available." }}
            </p>

            <!-- Stats -->
            <div class="grid grid-cols-2 gap-4 mt-16 sm:flex sm:flex-wrap sm:gap-6">
              <div v-if="project.techStack" class="flex items-center gap-3 bg-gradient-to-r from-purple-700 to-purple-500 rounded-lg p-4 shadow-lg w-full sm:w-52">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                </svg>
                <span class="font-semibold">{{ project.techStack.length }} Teknologi</span>
              </div>
              <div v-if="project.features" class="flex items-center gap-3 bg-gradient-to-r from-purple-700 to-purple-500 rounded-lg p-4 shadow-lg w-full sm:w-52">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2L2 7l10 5 10-5-10-5zm0 7l10 5-10 5-10-5 10-5z"/>
                </svg>
                <span class="font-semibold">{{ project.features.length }} Fitur Utama</span>
              </div>
            </div>

            <!-- Tombol Aksi -->
            <div class="flex gap-4 mt-16">
              <a v-if="project.liveDemo" :href="project.liveDemo" target="_blank"
                class="bg-gray-700 hover:bg-gray-800 px-5 py-2 rounded-lg text-white flex items-center gap-2 shadow">
                🔗 Live Demo
              </a>
              <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank"
                class="bg-gray-700 hover:bg-gray-800 px-5 py-2 rounded-lg text-white flex items-center gap-2 shadow">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.1-1.7-1.1-1.7-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.1-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.1-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.1 1.9 1.1 3.2 0 4.6-2.7 5.5-5.3 5.8.4.3.7.9.7 1.9v2.9c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
                </svg>
                GitHub
              </a>
            </div>

            <!-- Tech -->
            <div v-if="project.techStack" class="mt-16">
              <h2 class="flex items-center gap-2 text-xl font-semibold mb-6">
                  <span class="text-pink-400 text-2xl">&lt;/&gt;</span>
                  Technology Used
              </h2>
              <div class="flex flex-wrap gap-4">
                <span v-for="tech in project.techStack" :key="tech"
                      class="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-700 to-purple-500 text-white shadow-md text-sm font-medium flex items-center gap-2">
                  <span class="text-pink-300">&lt;/&gt;</span>{{ tech }}
                </span>
              </div>
            </div>
          </div>

          <!-- Kolom kanan -->
          <div class="max-w-4xl mx-auto px-8">
            <div class="rounded-lg shadow-lg overflow-hidden mb-16">
              <img
                :src="project.thumbnail || defaultImage"
                :alt="project.title + ' Thumbnail'"
                class="rounded-xl shadow-lg w-full object-cover h-48 sm:h-64 md:h-80 lg:h-[250px]"/>
            </div>
            <!-- Fitur Utama -->
            <div v-if="project.features && project.features.length" class="bg-[#3a2d70] rounded-2xl text-white shadow-md p-6 max-w-md">
              <h3 class="flex items-center gap-2 text-lg font-semibold mb-4">
                <span class="text-yellow-400 text-xl">⭐</span>
                Fitur Utama
              </h3>
              <!--List-->
              <div class="space-y-3 text-gray-200 text-sm">
                <ul class="space-y-3 text-gray-300">
                  <li v-for="(feature, i) in project.features" :key="i" class="flex items-start gap-2">
                    <span class="text-yellow-400">✔</span>
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import projectsData from "../data/projects.json"

const defaultImage = "https://via.placeholder.com/600x400.png?text=No+Image"

const route = useRoute()
const project = ref({})

onMounted(() => {
  project.value = projectsData.find(p => p.title === route.params.name) || {
    title: "Not Found",
    description: "Project not found."
  }
})
</script>
