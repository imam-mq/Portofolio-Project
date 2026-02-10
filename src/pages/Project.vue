<template>
  <div class="text-white min-h-screen bg-gradient-to-r from-[#1a1a2e] via-[#162477] to-[#1f4068] bg-[length:400%_400%] animate-gradient-shift py-10 px-4">
    
    <!-- Section Title -->
    <div class="text-center max-w-4xl mx-auto mt-20">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-fuchsia-500 font-sans">
        Portofolio Showcase
      </h2>
      <p class="mt-4 text-sm sm:text-base md:text-lg text-white-300 leading-relaxed font-sans">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>
    </div>

    <!-- Projects -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
      <div v-for="repo in projects" :key="repo.id" 
           class="bg-gradient-to-r from-purple-500 to-pink-500 p-[2px] rounded-2xl hover:scale-105 transition-transform">
        
        <div class="bg-gradient-to-br from-[#1e1e2f] to-[#2a2a40] rounded-lg shadow-lg p-6 overflow-hidden">
          <img 
            :src="repo.thumbnail || defaultImage"  
            :alt="repo.title + ' Thumbnail'"
            class="w-full h-48 rounded object-cover"
          >
          <div class="p-4">
            <h3 class="text-lg font-semibold font-sans text-white">{{ repo.title }}</h3>
            <p class="text-gray-300 text-sm mt-2 line-clamp-3 font-sans">
              {{ repo.description }}
            </p>

            <!-- Tech stack -->
            <div class="flex flex-wrap gap-2 mt-3">
              <span v-for="tech in repo.techStack" :key="tech" 
                    class="bg-purple-600 text-white px-2 py-1 text-xs rounded">
                {{ tech }}
              </span>
            </div>

            <!-- Actions -->
            <div class="flex items-center justify-between mt-5">
              <a v-if="repo.githubUrl" :href="repo.githubUrl" target="_blank" 
                 class="text-pink-400 text-sm font-sans hover:underline flex items-center gap-1">
                View Repo <span>↗</span>
              </a>
              <button
                @click="$router.push({ name: 'ProjectDetails', params: { name: repo.title } })"
                class="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded font-sans transition-colors"
              >
                Details →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import projectsData from "../data/projects.json" // ✅ ambil dari data.json

const projects = projectsData
const defaultImage = "https://via.placeholder.com/300x200.png?text=No+Image"
</script>
