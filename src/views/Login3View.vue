<template>
  <AuthLayout>
    <div class="login3-view min-h-screen w-full flex">
      <!-- Left Side - Hero with Purple Gradient -->
      <div
        class="hidden lg:block lg:w-[55%] bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 relative overflow-hidden h-screen">
        <!-- Background Circle Decoration -->
        <div class="absolute top-8 left-8 w-48 h-48 rounded-full border border-white/20 bg-white/5"></div>

        <!-- Content Container -->
        <div class="h-full flex flex-col items-center justify-center p-10 overflow-hidden">
          <!-- Boss AI Logo -->
          <img :src="bossaiLogo" alt="Boss AI" class="w-28 h-28 object-contain mb-10 transition-transform duration-300 hover:scale-110" />

          <!-- Title -->
          <h1 class="text-4xl font-bold text-white text-center mb-6">
            İşletmenizin<br />
            <span class="inline-block bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">Dijital Asistanı</span>
          </h1>

          <!-- Features Button -->
          <button
            class="px-6 py-2.5 bg-white hover:bg-white/90 rounded-lg text-violet-600 text-sm font-semibold transition-all duration-200 mb-8">
            Özellikler
          </button>

          <!-- Carousel Dots -->
          <div class="flex items-center gap-3 mb-10">
            <button @click="currentSlide = 0"
              :class="['w-2.5 h-2.5 rounded-full transition-all', currentSlide === 0 ? 'bg-white' : 'bg-white/40']"></button>
            <button @click="currentSlide = 1"
              :class="['w-2.5 h-2.5 rounded-full transition-all', currentSlide === 1 ? 'bg-white' : 'bg-white/40']"></button>
            <button @click="currentSlide = 2"
              :class="['w-2.5 h-2.5 rounded-full transition-all', currentSlide === 2 ? 'bg-white' : 'bg-white/40']"></button>
            <button @click="currentSlide = 3"
              :class="['w-2.5 h-2.5 rounded-full transition-all', currentSlide === 3 ? 'bg-white' : 'bg-white/40']"></button>
          </div>

          <!-- Feature Card -->
          <div class="group relative max-w-md mb-4 cursor-pointer">
            <!-- Glass Background on Hover -->
            <div
              class="absolute -inset-4 rounded-2xl bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300">
            </div>

            <!-- Card Content -->
            <div class="relative flex items-start gap-4">
              <div
                class="w-14 h-14 rounded-2xl bg-violet-500/80 group-hover:bg-white flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110">
                <svg v-if="currentSlide === 0"
                  class="w-7 h-7 text-white group-hover:text-violet-600 transition-colors duration-300" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <svg v-else-if="currentSlide === 1"
                  class="w-7 h-7 text-white group-hover:text-violet-600 transition-colors duration-300" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg v-else-if="currentSlide === 2"
                  class="w-7 h-7 text-white group-hover:text-violet-600 transition-colors duration-300" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg v-else
                  class="w-7 h-7 text-white group-hover:text-violet-600 transition-colors duration-300" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 v-if="currentSlide === 0" class="text-xl font-bold text-white mb-2">Veri Görselleştirme ve İçgörüler
                </h3>
                <h3 v-else-if="currentSlide === 1" class="text-xl font-bold text-white mb-2">Akıllı Görev Yönetimi</h3>
                <h3 v-else-if="currentSlide === 2" class="text-xl font-bold text-white mb-2">Otomatik Raporlama</h3>
                <h3 v-else class="text-xl font-bold text-white mb-2">Gerçek Zamanlı Analitik</h3>

                <p v-if="currentSlide === 0" class="text-sm text-white/70 leading-relaxed">Karmaşık verileri anlaşılır
                  görsellerle sunarak trendleri ve fırsatları anında görün</p>
                <p v-else-if="currentSlide === 1" class="text-sm text-white/70 leading-relaxed">Rutin iş görevlerinizi
                  otomatikleştirerek ekibinizin zamanını stratejik girişimlere odaklayın</p>
                <p v-else-if="currentSlide === 2" class="text-sm text-white/70 leading-relaxed">Özelleştirilebilir
                  raporlar ile iş süreçlerinizi detaylı şekilde takip edin ve optimize edin</p>
                <p v-else class="text-sm text-white/70 leading-relaxed">Anlık veri akışı ile işletmenizin performansını
                  her an izleyin ve hızlı kararlar alın</p>
              </div>
            </div>

            <!-- Hover Buttons -->
            <div
              class="relative flex items-center justify-center gap-4 mt-6 max-h-0 opacity-0 overflow-hidden group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300">
              <button
                class="px-5 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-white text-sm font-medium transition-all hover:scale-105 flex items-center gap-2">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Nasıl çalışır
              </button>
              <button
                class="px-5 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-white text-sm font-medium transition-all hover:scale-105 flex items-center gap-2">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175l3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"/>
                </svg>
                Örnek göster
              </button>
            </div>
          </div>

          <!-- Navigation Arrows -->
          <div class="flex items-center justify-center gap-96 mb-6 mt-8">
            <button @click="prevSlide" :disabled="currentSlide === 0"
              :class="['w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-colors', currentSlide === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-white/20']">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button @click="nextSlide" :disabled="currentSlide === 3"
              :class="['w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-colors', currentSlide === 3 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-white/20']">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <!-- CTA Button -->
          <button
            class="px-6 py-3 bg-white hover:bg-white/90 hover:scale-105 rounded-lg text-violet-600 text-sm font-semibold transition-all duration-200 flex items-center gap-2">
            BOSS AI Deneyimleyin
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Right Side - Form -->
      <div class="w-full lg:w-[45%] bg-white flex items-center justify-center p-8 lg:p-12">
        <div class="w-full max-w-sm">
          <!-- Header -->
          <div class="mb-10 text-center">
            <h1 class="text-4xl font-bold text-zinc-900 mb-3">
              Hoş<span class="text-indigo-600">geldiniz</span>
            </h1>
            <p class="text-zinc-500 text-base">İşletmenizin AI destekli asistanına giriş yapın</p>
          </div>

          <!-- Email Input -->
          <div class="mb-6">
            <label class="block text-sm text-zinc-700 mb-3 font-semibold">E-posta Adresi</label>
            <div class="relative">
              <div class="absolute left-4 top-1/2 -translate-y-1/2">
                <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input type="email" placeholder="E-posta adresinizi girin"
                class="w-full pl-12 pr-4 py-2.5 bg-white border-2 border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-indigo-600 transition-colors text-sm" />
            </div>
          </div>

          <!-- Continue Button -->
          <div class="flex justify-end mb-8">
            <button type="button"
              class="text-indigo-600 hover:text-indigo-700 font-semibold text-sm flex items-center gap-2 transition-all duration-300 hover:translate-x-2 cursor-pointer">
              Devam Et
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <!-- Divider -->
          <div class="flex items-center gap-4 mb-6">
            <div class="flex-1 h-px bg-zinc-200"></div>
            <span class="text-xs text-zinc-400">veya şununla devam edin</span>
            <div class="flex-1 h-px bg-zinc-200"></div>
          </div>

          <!-- Alternative Login Options -->
          <div class="grid grid-cols-2 gap-3">
            <button type="button" disabled
              class="flex items-center justify-center gap-2 px-4 py-2.5 bg-zinc-100 border border-zinc-200 rounded-lg text-zinc-400 cursor-not-allowed hover:border-violet-400 hover:scale-105 transition-all duration-200">
              <svg class="h-5 w-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM12 2.4C17.353 2.4 21.6 6.647 21.6 12C21.6 17.353 17.353 21.6 12 21.6C6.647 21.6 2.4 17.353 2.4 12C2.4 6.647 6.647 2.4 12 2.4ZM12 5.6C10.651 5.6 9.6 6.651 9.6 8C9.6 9.349 10.651 10.4 12 10.4C13.349 10.4 14.4 9.349 14.4 8C14.4 6.651 13.349 5.6 12 5.6ZM12 16.8C9.6 16.8 7.476 15.328 6.4 13.2C6.4 12 9.6 11.2 12 11.2C14.4 11.2 17.6 12 17.6 13.2C16.524 15.328 14.4 16.8 12 16.8Z"
                  fill="currentColor"></path>
              </svg>
              <span class="text-sm">Misafir</span>
            </button>

            <button type="button" disabled
              class="flex items-center justify-center gap-2 px-4 py-2.5 bg-zinc-100 border border-zinc-200 rounded-lg text-zinc-400 cursor-not-allowed hover:border-violet-400 hover:scale-105 transition-all duration-200">
              <svg class="h-5 w-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.0002 12C22.0002 6.48 17.5202 2 12.0002 2C6.48016 2 2.00016 6.48 2.00016 12C2.00016 17.52 6.48016 22 12.0002 22C17.5202 22 22.0002 17.52 22.0002 12ZM9.00016 16.2L4.80016 12L6.21016 10.59L9.00016 13.38L15.7902 6.59L17.2002 8L9.00016 16.2Z"
                  fill="currentColor"></path>
              </svg>
              <span class="text-sm">SSO</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AuthLayout } from '@/layouts'
import bossaiLogo from '@/assets/bossailogo.svg'

const currentSlide = ref(0)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % 4
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? 3 : currentSlide.value - 1
}
</script>

<style scoped>
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.animate-shimmer {
  animation: shimmer 6s linear infinite;
}
</style>
