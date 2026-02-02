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
      <!-- Large Dark Blue Circle -->
      <div class="absolute w-96 h-96 rounded-full bg-gradient-to-br from-slate-700/60 to-slate-800/40"
        style="top: 20%; right: 5%; animation: float 8s ease-in-out infinite;" />
      <!-- Medium Rose/Burgundy Circle -->
      <div class="absolute w-72 h-72 rounded-full bg-gradient-to-br from-rose-900/50 to-rose-800/30"
        style="top: 15%; right: 15%; animation: float 6s ease-in-out infinite 1s;" />
      <!-- Small Teal Circle -->
      <div class="absolute w-56 h-56 rounded-full bg-gradient-to-br from-teal-600/30 to-cyan-700/20"
        style="top: 45%; right: 25%; animation: float 7s ease-in-out infinite 0.5s;" />
    </div>

    <!-- Content -->
    <div class="relative z-10 h-full flex flex-col p-8 lg:p-12">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <img :src="seferiLogo" alt="Seferi Logo" class="w-12 h-12 object-contain" />
        <span class="text-xl font-bold text-white">Seferi</span>
      </div>

      <!-- Main Content -->
      <div class="flex-1 flex flex-col justify-center max-w-lg">
        <!-- Badge -->
        <div class="flex items-center gap-2 mb-6">
          <div class="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center">
            <svg class="w-3 h-3 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span class="text-teal-400 text-sm font-medium tracking-wide uppercase">
            Basitleştirilmiş Operasyonlar
          </span>
        </div>

        <!-- Heading -->
        <h1 class="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Seferi Lojistiği<br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
            Yönetiyor
          </span>
        </h1>

        <!-- Description -->
        <p class="text-gray-400 text-lg leading-relaxed mb-12">
          Platformumuz, sürücü atamalarından dijital dokümantasyona kadar karmaşık lojistik iş akışlarını
          otomatikleştirerek idari iş yükünü
          <span class="text-white font-semibold">%65</span>, insan hatasını ise
          <span class="text-white font-semibold">%92</span> oranında azaltıyor.
        </p>

        <!-- Progress Section -->
        <div class="space-y-3">
          <SProgressBar :progress="87" label="Süreç Otomasyonu" variant="gradient" :animated="true" />
        </div>
      </div>

      <!-- Pagination Indicator - Single dot -->
      <div class="flex items-center justify-center mt-8">
        <div class="w-2.5 h-2.5 rounded-full bg-white"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SProgressBar } from '@/components/ui'
import seferiLogo from '@/assets/seferilogo.png'
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
