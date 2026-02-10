<template>
  <div
    class="text-white min-h-screen bg-gradient-to-r from-[#1a1a2e] via-[#162477] to-[#1f4068] bg-[length:400%_400%] animate-gradient-shift py-28"
  >
    <!-- Section Title -->
    <div class="text-center max-w-4xl mx-auto px-4 font-sans">
      <h2 class="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">CONTACT</h2>
      <p class="mt-4 text-sm sm:text-base md:text-lg font-semibold text-gray-200 leading-relaxed">
        Anda punya pertanyaan ? kirimi saya pesan dan saya akan segera membalasnya
      </p>
    </div>

    <div class="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
      <!-- Card kiri -->
      <div class="bg-[#31225A] rounded-xl shadow-lg p-6 flex flex-col h-auto min-h-[500px]  w-full max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
        <!-- Header -->
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-2xl md:text-3xl font-bold font-sans text-fuchsia-500">Hubungi</h3>
          <i class="fas fa-share-alt text-fuchsia-400 text-lg md:text-xl"></i>
        </div>

        <p class="text-gray-300 text-base md:text-lg mb-6 font-sans leading-relaxed">
          Ada yang ingin anda diskusikan? kirim saya pesan sekarang!
        </p>

        <!-- Form -->
        <form @submit.prevent="sendEmail" class="flex flex-col space-y-4">
          <!-- Nama -->
          <div class="bg-[#56437A] rounded-lg flex items-center px-3 py-2">
            <i class="fas fa-user text-gray-300 mr-4 md:mr-6 text-sm md:text-base"></i>
            <input
              v-model="contactForm.name"
              type="text"
              name="from_name"
              placeholder="Nama Anda"
              class="w-full bg-transparent text-base md:text-lg text-white placeholder-gray-300 focus:outline-none"
              required
            />
          </div>
          <!-- Email -->
          <div class="bg-[#56437A] rounded-lg flex items-center px-3 py-2">
            <i class="fas fa-envelope text-gray-300 mr-4 md:mr-6 text-sm md:text-base"></i>
            <input
              v-model="contactForm.email"
              type="email"
              name="from_email"
              placeholder="Email Anda"
              class="w-full bg-transparent text-base md:text-lg text-white placeholder-gray-300 focus:outline-none"
              required
            />
          </div>
          <!-- Pesan -->
          <div class="bg-[#56437A] rounded-lg flex items-start px-3 py-2">
            <i class="fas fa-comment text-gray-300 mr-4 md:mr-6 mt-1 text-sm md:text-base"></i>
            <textarea
              v-model="contactForm.message"
              name="message"
              placeholder="Pesan Anda"
              rows="3"
              class="w-full text-base md:text-lg bg-transparent text-white placeholder-gray-300 focus:outline-none resize-none"
              required
            ></textarea>
          </div>
          <!-- Tombol -->
          <button
            type="submit"
            class="bg-fuchsia-500 text-white font-semibold py-2 md:py-3 rounded-lg hover:bg-fuchsia-600 
                  flex items-center justify-center gap-2 text-sm md:text-base"
          >
            <i class="fas fa-paper-plane"></i>
            <span v-if="!loading">Kirim Pesan</span>
            <span v-else>Mengirim...</span>
          </button>
        </form>

        <div class="border-t border-gray-500 my-6"></div>

        <!-- Sosial Media -->
        <div class="bg-[#44336E] rounded-lg p-4">
          <p class="text-gray-200 font-semibold mb-3 text-sm md:text-base">Connect Dulu</p>
          <div class="flex flex-col sm:flex-row sm:flex-wrap gap-2">
            <a
              href="#"
              class="flex items-center bg-[#0077b5] text-white px-3 py-2 rounded-lg text-sm md:text-base w-full sm:w-auto"
            >
              <i class="fab fa-linkedin mr-2"></i> Lets Connect on LinkedIn
            </a>
            <a
              href="#"
              class="flex items-center bg-[#1877f2] text-white px-3 py-2 rounded-lg text-sm md:text-base w-full sm:w-auto"
            >
              <i class="fab fa-facebook mr-2"></i> Facebook @namaAnda
            </a>
            <a
              href="#"
              class="flex items-center bg-[#e4405f] text-white px-3 py-2 rounded-lg text-sm md:text-base w-full sm:w-auto"
            >
              <i class="fab fa-instagram mr-2"></i> Instagram @namaAnda
            </a>
          </div>
        </div>
      </div>


      <!-- Card kanan -->
      <div
        class="bg-[#31225A] rounded-xl h-[700px] shadow-lg col-span-2 p-4 flex flex-col"
      >
        <!-- Header -->
        <div
          class="flex items-center justify-between border-b border-gray-500 pb-3 mb-4"
        >
          <h2
            class="text-xl font-semibold text-white flex items-center gap-2 mt-3 pl-2"
          >
            <ChatBubbleLeftEllipsisIcon class="w-6 h-6 text-white" />
            Comment
          </h2>
        </div>

        <!-- Comment Form -->
        <form @submit.prevent="submitComment" class="space-y-4 px-2">
          <div>
            <label class="block text-sm text-white font-medium"
              >Name<span class="text-red-500">*</span></label
            >
            <input
              v-model="form.name"
              type="text"
              placeholder="Masukin Nama Anda"
              class="w-full bg-[#56437A] text-white rounded-lg px-3 py-4 focus:outline-none focus:ring-2 focus:ring-pink-400 mt-1"
            />
          </div>

          <div>
            <label class="block text-sm text-white font-medium"
              >Message<span class="text-red-500">*</span></label
            >
            <textarea
              v-model="form.message"
              placeholder="Tulis Pesan Anda...."
              class="w-full bg-[#56437A] text-white rounded-lg px-3 py-2 h-36 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400 mt-1"
            ></textarea>
          </div>

          <!-- Profile Photo -->
          <div>
            <label class="block text-sm text-white font-medium"
              >Profile Photo (optional)</label
            >
            <div
              class="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg py-4 cursor-pointer bg-[#251C4C] hover:border-pink-400"
            >
              <button
                type="button"
                @click="$refs.fileInput.click()"
                class="bg-[#1F1843] px-4 py-2 rounded-lg text-white text-sm flex items-center gap-2 hover:bg-pink-600 transition"
              >
                <ArrowUpTrayIcon class="w-4 h-4" />
                Choose Profile Photo
              </button>
              <input
                type="file"
                ref="fileInput"
                @change="handleFileUpload"
                accept="image/*"
                hidden
              />
              <div v-if="form.photo" class="mt-3">
                <img
                  :src="form.photo"
                  alt="Preview"
                  class="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <p class="text-xs text-gray-300 mt-2">Max file size: 5MB</p>
            </div>
          </div>

          <button
            type="submit"
            class="w-full bg-fuchsia-500 text-white font-semibold py-3 rounded-lg hover:bg-fuchsia-600 flex items-center justify-center gap-2 transition duration-200 shadow-md"
          >
            <i class="fas fa-paper-plane text-sm"></i>
            <span>Kirim Pesan</span>
          </button>
        </form>

        <!-- Comment List -->
        <div class="mt-4 flex-1 overflow-y-auto space-y-3 px-2">
          <div
            v-for="(comment, index) in comments"
            :key="index"
            class="flex items-center justify-between bg-[#1F1843] rounded-lg px-3 py-2"
          >
            <div class="flex items-center gap-3">
              <img :src="comment.photo" class="w-10 h-10 rounded-full" />
              <div>
                <p class="text-white font-semibold text-sm">{{ comment.name }}</p>
                <p class="text-gray-300 text-xs">{{ comment.message }}</p>
              </div>
            </div>
            <span class="text-xs text-gray-400">{{ comment.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import emailjs from "@emailjs/browser";
import { ref, onMounted, watch } from "vue";
import {
  ChatBubbleLeftEllipsisIcon,
  ArrowUpTrayIcon,
} from "@heroicons/vue/24/outline";

const form = ref({
  name: "",
  message: "",
  photo: "",
});

const comments = ref([]);

// Load dari localStorage saat page dibuka
onMounted(() => {
  const saved = localStorage.getItem("comments");
  if (saved) {
    comments.value = JSON.parse(saved);
  }
});

// Simpan otomatis ke localStorage setiap kali comments berubah
watch(
  comments,
  (val) => {
    localStorage.setItem("comments", JSON.stringify(val));
  },
  { deep: true }
);

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file && file.size <= 5 * 1024 * 1024) {
    const reader = new FileReader();
    reader.onload = (e) => {
      form.value.photo = e.target.result; // simpan base64
    };
    reader.readAsDataURL(file);
  } else {
    alert("File terlalu besar, maksimal 5MB");
  }
};

const submitComment = () => {
  if (!form.value.name || !form.value.message) return;

  const today = new Date();
  const options = { month: "short", day: "numeric", year: "numeric" };
  const date = today.toLocaleDateString("en-US", options);

  comments.value.unshift({
    name: form.value.name,
    message: form.value.message,
    photo: form.value.photo || "https://i.pravatar.cc/100",
    date,
  });

  // Reset form
  form.value.name = "";
  form.value.message = "";
  form.value.photo = "";
};

/* ------------------- FORM HUBUNGI (EmailJS) ------------------- */
const contactForm = ref({
  name: "",
  email: "",
  message: "",
});
const loading = ref(false);

const sendEmail = () => {
  loading.value = true;
  emailjs
    .send("service_GMaill", "template_22v6n36", {
      from_name: contactForm.value.name,
      from_email: contactForm.value.email,
      message: contactForm.value.message,
    }, "sYp2MNaxXDeYSXamv")
    .then(() => {
      alert("Pesan berhasil dikirim!");
      contactForm.value = { name: "", email: "", message: "" };
    })
    .catch((err) => {
      alert("Gagal mengirim pesan: " + JSON.stringify(err));
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>
