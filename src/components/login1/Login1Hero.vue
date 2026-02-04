<template>
  <div
    class="login1-hero relative w-full h-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
    <!-- Wavy Background Lines -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Wave Line 1 -->
      <svg class="absolute w-full h-full opacity-20" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <path d="M0,100 Q300,50 600,100 T1200,100" fill="none" stroke="rgba(148, 163, 184, 0.3)" stroke-width="1"
          class="wave-line" />
        <path d="M0,200 Q300,150 600,200 T1200,200" fill="none" stroke="rgba(148, 163, 184, 0.25)" stroke-width="1"
          class="wave-line" style="animation-delay: 0.5s" />
        <path d="M0,300 Q300,350 600,300 T1200,300" fill="none" stroke="rgba(148, 163, 184, 0.2)" stroke-width="1"
          class="wave-line" style="animation-delay: 1s" />
        <path d="M0,500 Q300,450 600,500 T1200,500" fill="none" stroke="rgba(148, 163, 184, 0.15)" stroke-width="1"
          class="wave-line" style="animation-delay: 1.5s" />
        <path d="M0,650 Q300,700 600,650 T1200,650" fill="none" stroke="rgba(148, 163, 184, 0.2)" stroke-width="1"
          class="wave-line" style="animation-delay: 2s" />
        <path d="M0,750 Q300,700 600,750 T1200,750" fill="none" stroke="rgba(148, 163, 184, 0.15)" stroke-width="1"
          class="wave-line" style="animation-delay: 2.5s" />
      </svg>
    </div>

    <!-- Animated Background Circles -->
    <div class="absolute inset-0 overflow-hidden">  
      <!-- Medium Rose/Burgundy Circle -->
      <div class="absolute w-72 h-72 rounded-full bg-gradient-to-br from-rose-900/50 to-rose-800/30"
        style="top: 25%; right: 35%; animation: float 6s ease-in-out infinite 1s;" />
      <!-- Small Teal Circle -->
      <div class="absolute w-56 h-56 rounded-full bg-gradient-to-br from-teal-600/30 to-cyan-700/20"
        style="top: 45%; right: 25%; animation: float 7s ease-in-out infinite 0.5s;" />
    </div>

    <!-- Content -->
    <div class="relative z-10 h-full flex flex-col p-8 lg:p-12 justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <img :src="seferiLogo" alt="Seferi Logo" class="w-12 h-12 object-contain" />
        <span class="text-xl font-bold text-white">Seferi</span>
      </div>

      <!-- Main Content - Carousel -->
      <div class="flex flex-col justify-center max-w-3xl">
        <!-- Slides Container -->
        <div class="relative min-h-[400px]">
          <div class="relative">
            <!-- Slide 1 -->
            <div 
              class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              :class="currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'"
            >
              <!-- Badge -->
              <div class="flex items-center gap-2 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-green-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span class="text-green-400 text-sm font-medium tracking-widest uppercase">
                  Basitleştirilmiş Operasyonlar
                </span>
              </div>

              <!-- Heading -->
              <h1 class="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Seferi Lojistiği  Yönetiyor
              </h1>

              <!-- Description -->
              <p class="text-gray-300 text-base lg:text-lg leading-relaxed mb-12 max-w-2xl">
                Platformumuz, sürücü atamalarından dijital dokümantasyona kadar karmaşık lojistik iş akışlarını otomatikleştirerek idari iş yükünü <span class="text-white font-semibold">%65</span>, insan hatasını ise <span class="text-white font-semibold">%92</span> oranında azaltıyor.
              </p>

              <!-- Progress Section -->
              <div class="space-y-3 max-w-xl">
                <SProgressBar :progress="87" label="Süreç Otomasyonu" variant="gradient" :animated="true" />
              </div>
            </div>

            <!-- Slide 2 -->
            <div 
              class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              :class="currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'"
            >
              <!-- Badge -->
              <div class="flex items-center gap-2 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-blue-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span class="text-blue-400 text-sm font-medium tracking-widest uppercase">
                  Hızlı ve Verimli
                </span>
              </div>

              <!-- Heading -->
              <h1 class="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Anlık Takip Sistemi
              </h1>

              <!-- Description -->
              <p class="text-gray-300 text-base lg:text-lg leading-relaxed mb-12 max-w-2xl">
                Gerçek zamanlı GPS takibi ve akıllı rota optimizasyonu ile teslimat sürelerini <span class="text-white font-semibold">%45</span> kısaltın, yakıt maliyetlerini <span class="text-white font-semibold">%38</span> azaltın.
              </p>

              <!-- Progress Section -->
              <div class="space-y-3 max-w-xl">
                <SProgressBar :progress="92" label="Teslimat Başarısı" variant="gradient" :animated="true" />
              </div>
            </div>

            <!-- Slide 3 -->
            <div 
              class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              :class="currentSlide === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'"
            >
              <!-- Badge -->
              <div class="flex items-center gap-2 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-purple-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
                <span class="text-purple-400 text-sm font-medium tracking-widest uppercase">
                  Akıllı Analitik
                </span>
              </div>

              <!-- Heading -->
              <h1 class="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Veri Odaklı Kararlar
              </h1>

              <!-- Description -->
              <p class="text-gray-300 text-base lg:text-lg leading-relaxed mb-12 max-w-2xl">
                Detaylı raporlama ve tahmine dayalı analizlerle operasyonel verimliliği artırın. Karar alma süreçlerini <span class="text-white font-semibold">%73</span> hızlandırın.
              </p>

              <!-- Progress Section -->
              <div class="space-y-3 max-w-xl">
                <SProgressBar :progress="78" label="Veri Doğruluğu" variant="gradient" :animated="true" />
              </div>
            </div>

            <!-- Slide 4 -->
            <div 
              class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              :class="currentSlide === 3 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'"
            >
              <!-- Badge -->
              <div class="flex items-center gap-2 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-amber-400">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
                <span class="text-amber-400 text-sm font-medium tracking-widest uppercase">
                  Ekip Yönetimi
                </span>
              </div>

              <!-- Heading -->
              <h1 class="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Merkezi Kontrol Paneli
              </h1>

              <!-- Description -->
              <p class="text-gray-300 text-base lg:text-lg leading-relaxed mb-12 max-w-2xl">
                Tüm ekibinizi tek bir platformdan yönetin. Görev atamaları, performans takibi ve iletişim araçlarıyla üretkenliği <span class="text-white font-semibold">%56</span> artırın.
              </p>

              <!-- Progress Section -->
              <div class="space-y-3 max-w-xl">
                <SProgressBar :progress="95" label="Ekip Koordinasyonu" variant="gradient" :animated="true" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination Indicator - Single dot that resets carousel -->
      <div class="flex items-center justify-center mt-8">
        <button 
          @click="resetCarousel"
          class="w-2.5 h-2.5 rounded-full transition-all duration-300 hover:scale-150 cursor-pointer"
          :class="currentSlide === 0 ? 'bg-white' : 'bg-white/40 hover:bg-white/60'"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { SProgressBar } from '@/components/ui'
import seferiLogo from '@/assets/seferilogo.png'

const currentSlide = ref(0)
let intervalId: number | null = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % 4
}

const resetCarousel = () => {
  currentSlide.value = 0
}

const startAutoPlay = () => {
  intervalId = window.setInterval(() => {
    nextSlide()
  }, 10000) // 10 saniyede bir değişir
}

const stopAutoPlay = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
@keyframes float {

  0%,
  100% {
    transform: translateY(0px) scale(1);
  }

  50% {
    transform: translateY(-20px) scale(1.05);
  }
}

.wave-line {
  animation: wave-move 15s ease-in-out infinite;
}

@keyframes wave-move {

  0%,
  100% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(-50px);
  }
}
</style>
