<template>
  <div class="login1-hero relative w-full h-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
    <!-- Animated Background Circles -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Large Teal Circle -->
      <div 
        class="absolute w-80 h-80 rounded-full bg-gradient-to-br from-teal-400/40 to-cyan-500/30 blur-sm"
        style="top: 30%; left: 15%; animation: float 8s ease-in-out infinite;"
      />
      <!-- Medium Rose Circle -->
      <div 
        class="absolute w-64 h-64 rounded-full bg-gradient-to-br from-rose-400/40 to-pink-500/30 blur-sm"
        style="top: 25%; left: 35%; animation: float 6s ease-in-out infinite 1s;"
      />
      <!-- Small Pink Circle -->
      <div 
        class="absolute w-48 h-48 rounded-full bg-gradient-to-br from-pink-400/40 to-rose-500/30 blur-sm"
        style="top: 40%; left: 25%; animation: float 7s ease-in-out infinite 0.5s;"
      />
    </div>

    <!-- Content -->
    <div class="relative z-10 h-full flex flex-col p-8 lg:p-12">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <!-- Logo Image Slot - Kullanıcı kendi logosunu ekleyebilir -->
        <slot name="logo">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </slot>
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
          Platformumuz, sürücü atamalarından dijital dokümantasyona kadar karmaşık lojistik iş akışlarını otomatikleştirerek idari iş yükünü 
          <span class="text-white font-semibold">%65</span>, insan hatasını ise 
          <span class="text-white font-semibold">%92</span> oranında azaltıyor.
        </p>

        <!-- Progress Section -->
        <div class="space-y-3">
          <SProgressBar
            :progress="87"
            label="Süreç Otomasyonu"
            variant="gradient"
            :animated="true"
          />
        </div>
      </div>

      <!-- Pagination Dots -->
      <div class="flex items-center justify-center gap-2 mt-8">
        <div class="w-2 h-2 rounded-full bg-white" />
        <div class="w-2 h-2 rounded-full bg-white/30" />
        <div class="w-2 h-2 rounded-full bg-white/30" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SProgressBar } from '@/components/ui'
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.05);
  }
}
</style>
