<template>
  <div class="login1-hero relative w-full h-full min-h-screen bg-[#1a2332] overflow-hidden">
    <!-- Wavy Background Lines -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <svg class="absolute w-full h-full opacity-25" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <!-- Birinci çizgi - geniş yumuşak dalgalar -->
        <path d="M0,240 Q300,200 600,280 Q900,360 1200,320" fill="none" stroke="rgba(100, 150, 200, 0.6)"
          stroke-width="1.5" />

        <!-- İkinci çizgi - birincinin tersi, üstünden geçiyor -->
        <path d="M0,320 Q300,360 600,280 Q900,200 1200,240" fill="none" stroke="rgba(100, 150, 200, 0.5)"
          stroke-width="1.5" />

        <!-- Alt çizgi - geniş yumuşak dalga -->
        <path d="M0,580 Q300,520 600,560 Q900,600 1200,540" fill="none" stroke="rgba(100, 150, 200, 0.4)"
          stroke-width="1.5" />
      </svg>
    </div>

    <!-- Animated Background Circles -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Kırmızımsı/Mor daire - üst solda -->
      <div class="circle-1 absolute w-[250px] h-[250px] rounded-full left-1/2 top-1/2" />

      <!-- Mavi daire - kırmızının sağ alt çaprazında, daha küçük -->
      <div class="circle-2 absolute w-[250px] h-[250px] rounded-full left-1/2 top-1/2" />
    </div>

    <!-- Content -->
    <div class="relative z-10 h-full flex flex-col p-8 lg:p-12 xl:p-16">
      <!-- Logo -->
      <div class="flex items-center gap-3 mb-12">
        <img :src="seferiLogo" alt="Seferi Logo" class="w-10 h-10 object-contain" />
        <span class="text-2xl font-bold text-white">Seferi</span>
      </div>

      <!-- Main Content with Transitions -->
      <div class="flex-1 flex flex-col justify-center max-w-2xl relative">
        <!-- Slides Container -->
        <div class="slides-container relative min-h-[350px]">
          <!-- Content 1 - Fleet Management -->
          <div :class="['slide', { 'slide-active': currentSlide === 0 }]">
            <div class="inline-flex items-center gap-2 mb-8">
              <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-green-500 text-sm font-medium tracking-wide uppercase">
                BASİTLEŞTİRİLMİŞ OPERASYONLAR
              </span>
            </div>

            <h1 class="hero-title font-bold text-white leading-tight mb-6">
              Seferi Lojistiği Yönetiyor
            </h1>

            <p class="text-gray-400 text-lg leading-relaxed mb-12">
              Platformumuz, sürücü atamalarından dijital dokümantasyona kadar karmaşık lojistik iş akışlarını
              otomatikleştirerek idari iş yükünü %65, insan hatasını ise %92 oranında azaltıyor.
            </p>

            <div class="space-y-3">
              <div class="w-3/4 flex items-center justify-between text-sm mb-2">
                <span class="text-gray-300 font-medium">Süreç Otomasyonu</span>
                <span class="text-white font-semibold">87% Doğruluk</span>
              </div>
              <div class="w-3/4 h-2 bg-slate-800/80 rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full transition-all duration-1000 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400"
                  style="width: 87%"></div>
              </div>
            </div>
          </div>

          <!-- Content 2 - Route Optimization -->
          <div :class="['slide', { 'slide-active': currentSlide === 1 }]">
            <div class="inline-flex items-center gap-2 mb-8">
              <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <span class="text-blue-400 text-sm font-medium tracking-wide uppercase">
                AKILLI ROTA OPTİMİZASYONU
              </span>
            </div>

            <h1 class="hero-title font-bold text-white leading-tight mb-6">
              Seferi Rotaları Optimize Ediyor
            </h1>

            <p class="text-gray-400 text-lg leading-relaxed mb-12">
              Yapay zeka destekli rota planlama sistemi, trafik verilerini analiz ederek en verimli güzergahları
              belirler ve yakıt maliyetlerini
              <span class="text-white font-semibold">%45</span> oranında düşürür.
            </p>

            <div class="space-y-3">
              <div class="w-3/4 flex items-center justify-between text-sm mb-2">
                <span class="text-gray-300 font-medium">Rota Optimizasyonu</span>
                <span class="text-white font-semibold">95% Verimlilik</span>
              </div>
              <div class="w-3/4 h-2 bg-slate-800/80 rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full transition-all duration-1000 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400"
                  style="width: 95%"></div>
              </div>
            </div>
          </div>

          <!-- Content 3 - Cargo Tracking -->
          <div :class="['slide', { 'slide-active': currentSlide === 2 }]">
            <div class="inline-flex items-center gap-2 mb-8">
              <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span class="text-purple-400 text-sm font-medium tracking-wide uppercase">
                GERÇEK ZAMANLI TAKİP
              </span>
            </div>

            <h1 class="hero-title font-bold text-white leading-tight mb-6">
              Seferi Kargoları İzliyor
            </h1>

            <p class="text-gray-400 text-lg leading-relaxed mb-12">
              Tüm kargolarınızı anlık olarak takip edin. IoT sensörleri ve GPS teknolojisi ile teslimat süreçlerini
              şeffaflaştırın ve müşteri memnuniyetini
              <span class="text-white font-semibold">%92</span> artırın.
            </p>

            <div class="space-y-3">
              <div class="w-3/4 flex items-center justify-between text-sm mb-2">
                <span class="text-gray-300 font-medium">Kargo Takibi</span>
                <span class="text-white font-semibold">99% Görünürlük</span>
              </div>
              <div class="w-3/4 h-2 bg-slate-800/80 rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full transition-all duration-1000 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400"
                  style="width: 99%"></div>
              </div>
            </div>
          </div>

          <!-- Content 4 - Warehouse Management -->
          <div :class="['slide', { 'slide-active': currentSlide === 3 }]">
            <div class="inline-flex items-center gap-2 mb-8">
              <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span class="text-amber-400 text-sm font-medium tracking-wide uppercase">
                AKILLI DEPO YÖNETİMİ
              </span>
            </div>

            <h1 class="hero-title font-bold text-white leading-tight mb-6">
              Seferi Depoları Yönetiyor
            </h1>

            <p class="text-gray-400 text-lg leading-relaxed mb-12">
              Otonom depo yönetim sistemi, stok seviyelerini optimize eder, ürün yerleşimini iyileştirir ve operasyonel
              verimliliği
              <span class="text-white font-semibold">%67</span> oranında artırır.
            </p>

            <div class="space-y-3">
              <div class="w-3/4 flex items-center justify-between text-sm mb-2">
                <span class="text-gray-300 font-medium">Depo Verimliliği</span>
                <span class="text-white font-semibold">96% Optimizasyon</span>
              </div>
              <div class="w-3/4 h-2 bg-slate-800/80 rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full transition-all duration-1000 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400"
                  style="width: 96%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination Indicator -->
      <div class="flex items-center justify-center mt-8">
        <div class="w-3 h-3 rounded-full bg-white cursor-pointer"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import seferiLogo from '@/assets/seferilogo.png'

const currentSlide = ref(0)
let intervalId: number | null = null

onMounted(() => {
  intervalId = window.setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % 4
  }, 5000)
})

onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
/* Animated Background Circles */
.circle-1 {
  transform: translate(-80%, -60%);
  background: radial-gradient(circle, rgba(100, 60, 80, 0.5) 0%, rgba(80, 50, 70, 0.35) 60%, rgba(60, 40, 60, 0.15) 85%, transparent 100%);
  animation: float1 10s ease-in-out infinite;
}

.circle-2 {
  transform: translate(-25%, -20%);
  background: radial-gradient(circle, rgba(40, 70, 110, 0.5) 0%, rgba(30, 60, 100, 0.35) 60%, rgba(20, 50, 90, 0.15) 85%, transparent 100%);
  animation: float2 8s ease-in-out infinite;
}

@keyframes float1 {

  0%,
  100% {
    transform: translate(-80%, -60%) translateY(0px) scale(1);
  }

  50% {
    transform: translate(-80%, -60%) translateY(-20px) scale(1.05);
  }
}

@keyframes float2 {

  0%,
  100% {
    transform: translate(-25%, -20%) translateY(0px) scale(1);
  }

  50% {
    transform: translate(-25%, -20%) translateY(-15px) scale(1.03);
  }
}

/* Slide Transitions */
.slides-container {
  position: relative;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.6s ease, visibility 0.6s ease;
  pointer-events: none;
}

.slide-active {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.hero-title {
  font-size: clamp(1.75rem, 4vw, 3.5rem);
  word-wrap: break-word;
  overflow-wrap: break-word;
}
</style>
