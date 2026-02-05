<template>
    <div class="login2-hero h-full flex flex-col relative">
        <!-- Version Badge - Top Right -->
        <div class="absolute top-0 right-0">
            <span :class="['px-3 py-1.5 text-xs font-medium rounded-full',
                settingsStore.theme === 'dark' ? 'bg-zinc-800 text-white' : 'bg-zinc-900 text-white']">
                {{ t.hero.version }}
            </span>
        </div>

        <!-- Workflow Diagram - Centered -->
        <div class="flex-1 flex items-center justify-center" @mousemove="handleMouseMove" @mouseleave="resetPosition">
            <div class="flex items-center gap-4 transition-transform duration-500 ease-out" :style="{ transform: `translate(${offsetX}px, ${offsetY}px)` }">
                <!-- Brand Box -->
                <div class="flex flex-col items-center animate-float">
                    <div
                        :class="['w-16 h-16 rounded-xl border-2 flex items-center justify-center transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/50 cursor-pointer',
                            settingsStore.theme === 'dark' ? 'bg-zinc-800 border-zinc-700' : 'bg-zinc-100 border-zinc-300']">
                        <svg :class="['w-7 h-7', settingsStore.theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500']"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M10 12h4"></path>
                            <path d="M10 8h4"></path>
                            <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                            <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                            <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                        </svg>
                    </div>
                    <span
                        :class="['text-xs mt-1.5', settingsStore.theme === 'dark' ? 'text-zinc-500' : 'text-zinc-600']">{{
                            t.hero.badge.brand }}</span>
                </div>

                <!-- Arrow 1 - Purple -->
                <div class="relative">
                    <svg class="w-6 h-6 text-purple-500 animate-arrow-forward" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <!-- Animated dot -->
                    <div class="absolute top-1/2 -translate-y-1/2 left-0 w-1 h-1 rounded-full bg-purple-500 animate-dot-travel shadow-[0_0_6px_rgba(168,85,247,0.8)]"></div>
                </div>

                <!-- Lobster Lead Box -->
                <div class="flex flex-col items-center animate-float group" style="animation-delay: 0.2s;" @mouseenter="handleLogoHover">
                    <div
                        :class="['w-20 h-20 rounded-xl border-2 border-red-500/40 flex items-center justify-center shadow-xl transition-all duration-300 hover:shadow-red-500/50 cursor-pointer animate-pulse-glow-red-border group-hover:scale-110 relative',
                            settingsStore.theme === 'dark' ? 'bg-slate-800 shadow-slate-900/40' : 'bg-slate-100 shadow-slate-200/40']">
                        <!-- Rotating Dotted Rectangle -->
                        <div class="absolute inset-1 border-2 border-dashed border-red-500/20 rounded-lg animate-spin-slow"></div>
                        <img :src="lobsterSmallLogo" alt="Lobster Lead" :class="['w-12 h-12 object-contain relative z-10', { 'animate-shake': isShaking }]" />
                    </div>
                    <span
                        :class="['text-sm font-semibold mt-1.5', settingsStore.theme === 'dark' ? 'text-white' : 'text-zinc-900']">Lobster
                        Lead</span>
                    <span class="text-xs text-purple-500">{{ t.hero.badge.aiAssistant }}</span>
                </div>

                <!-- Arrow 2 - Red -->
                <div class="relative">
                    <svg class="w-6 h-6 text-red-500 animate-arrow-forward" style="animation-delay: 0.1s;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <!-- Animated dot -->
                    <div class="absolute top-1/2 -translate-y-1/2 left-0 w-1 h-1 rounded-full bg-red-500 animate-dot-travel shadow-[0_0_6px_rgba(239,68,68,0.8)]" style="animation-delay: 0.5s;"></div>
                </div>

                <!-- Output Options -->
                <div class="flex flex-col gap-1.5">
                    <!-- Sosyal Medya - Purple -->
                    <div
                        :class="['px-2.5 py-1.5 rounded-lg border-2 text-sm font-medium flex items-center gap-1.5 animate-float transition-all duration-300 cursor-pointer group relative overflow-visible',
                            settingsStore.theme === 'dark' ? 'bg-slate-800/80 border-slate-700 group-hover:border-purple-500/30 text-slate-300' : 'bg-slate-100 border-slate-300 group-hover:border-purple-500/30 text-slate-700 shadow-sm']"
                        style="animation-delay: 0.3s;">
                        <!-- Animated border on hover -->
                        <div class="absolute rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse-border pointer-events-none border-2 border-purple-500" style="inset: -1px;"></div>
                        <div class="w-6 h-6 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:animate-pulse-hover">
                            <svg class="w-3.5 h-3.5 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
                            </svg>
                        </div>
                        {{ t.hero.badge.socialMedia }}
                        <span class="w-2 h-2 rounded-full bg-purple-500 ml-1 animate-pulse-scale-glow-purple"></span>
                    </div>
                    <!-- Blog - Red -->
                    <div
                        :class="['px-2.5 py-1.5 rounded-lg border-2 text-sm font-medium flex items-center gap-1.5 animate-float transition-all duration-300 cursor-pointer group relative overflow-visible',
                            settingsStore.theme === 'dark' ? 'bg-slate-800/80 border-slate-700 group-hover:border-red-500/30 text-slate-300' : 'bg-slate-100 border-slate-300 group-hover:border-red-500/30 text-slate-700 shadow-sm']"
                        style="animation-delay: 0.4s;">
                        <!-- Animated border on hover -->
                        <div class="absolute rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse-border pointer-events-none border-2 border-red-500" style="inset: -1px;"></div>
                        <div class="w-6 h-6 rounded-lg bg-red-500/10 flex items-center justify-center group-hover:animate-pulse-hover">
                            <svg class="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                            </svg>
                        </div>
                        {{ t.hero.badge.blog }}
                        <span class="w-2 h-2 rounded-full bg-red-500 ml-1 animate-pulse-scale-glow-red"></span>
                    </div>
                    <!-- E-posta - Green -->
                    <div
                        :class="['px-2.5 py-1.5 rounded-lg border-2 text-sm font-medium flex items-center gap-1.5 animate-float transition-all duration-300 cursor-pointer group relative overflow-visible',
                            settingsStore.theme === 'dark' ? 'bg-slate-800/80 border-slate-700 group-hover:border-green-500/30 text-slate-300' : 'bg-slate-100 border-slate-300 group-hover:border-green-500/30 text-slate-700 shadow-sm']"
                        style="animation-delay: 0.5s;">
                        <!-- Animated border on hover -->
                        <div class="absolute rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse-border pointer-events-none border-2 border-green-500" style="inset: -1px;"></div>
                        <div class="w-6 h-6 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:animate-pulse-hover">
                            <svg class="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                        </div>
                        {{ t.hero.badge.email }}
                        <span class="w-2 h-2 rounded-full bg-green-500 ml-1 animate-pulse-scale-glow-green"></span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Title & Description - Bottom Left -->
        <div class="mt-auto">
            <h1 class="text-4xl lg:text-5xl font-bold mb-4">
                <span :class="settingsStore.theme === 'dark' ? 'text-white' : 'text-zinc-900'">{{ t.hero.title }}</span>
                <br />
                <span class="bg-gradient-to-r from-pink-500 via-red-500 to-violet-500 bg-clip-text text-transparent">{{
                    t.hero.titleHighlight }}</span>
            </h1>
            <p
                :class="['text-base max-w-lg leading-relaxed', settingsStore.theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600']">
                {{ t.hero.description }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useSettingsStore } from '@/stores'
import { useTranslations } from '@/i18n'
import lobsterSmallLogo from '@/assets/lobstersmalllogo.png'

const settingsStore = useSettingsStore()
const t = computed(() => useTranslations(settingsStore.language))

const offsetX = ref(0)
const offsetY = ref(0)
const isShaking = ref(false)

const handleMouseMove = (event: MouseEvent) => {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top
    
    // Calculate offset based on mouse position (max 8px movement for smoother effect)
    offsetX.value = ((mouseX - centerX) / centerX) * 8
    offsetY.value = ((mouseY - centerY) / centerY) * 8
}

const resetPosition = () => {
    offsetX.value = 0
    offsetY.value = 0
}

const handleLogoHover = () => {
    isShaking.value = true
    setTimeout(() => {
        isShaking.value = false
    }, 500)
}
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes arrow-forward {
  0%, 100% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(8px);
  }
}

@keyframes dot-travel {
  0% {
    left: 50%;
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    left: 150%;
    opacity: 0;
  }
}

@keyframes shake {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-3deg);
  }
  75% {
    transform: rotate(3deg);
  }
}

@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse-scale-glow-purple {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 4px 1px rgba(168, 85, 247, 0.3);
    opacity: 1;
  }
  50% {
    transform: scale(1.3);
    box-shadow: 0 0 10px 3px rgba(168, 85, 247, 0.5);
    opacity: 0.7;
  }
}

@keyframes pulse-scale-glow-red {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 4px 1px rgba(239, 68, 68, 0.3);
    opacity: 1;
  }
  50% {
    transform: scale(1.3);
    box-shadow: 0 0 10px 3px rgba(239, 68, 68, 0.5);
    opacity: 0.7;
  }
}

@keyframes pulse-scale-glow-green {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 4px 1px rgba(34, 197, 94, 0.3);
    opacity: 1;
  }
  50% {
    transform: scale(1.3);
    box-shadow: 0 0 10px 3px rgba(34, 197, 94, 0.5);
    opacity: 0.7;
  }
}

@keyframes pulse-glow-red-border {
  0%, 100% {
    box-shadow: 0 0 15px 5px rgba(239, 68, 68, 0.15), 0 0 25px 10px rgba(236, 72, 153, 0.1);
  }
  50% {
    box-shadow: 0 0 25px 8px rgba(239, 68, 68, 0.25), 0 0 35px 15px rgba(236, 72, 153, 0.15);
  }
}

@keyframes pulse-hover {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

@keyframes pulse-border {
  0%, 100% {
    inset: -1px;
    opacity: 0.6;
  }
  50% {
    inset: -3px;
    opacity: 0.9;
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-arrow-forward {
  animation: arrow-forward 2s ease-in-out infinite;
}

.animate-dot-travel {
  animation: dot-travel 1s linear infinite;
}

.animate-shake {
  position: relative;
  animation: shake 0.5s ease-in-out;
}

.group:hover .group-hover\:animate-pulse-hover {
  animation: pulse-hover 0.5s ease-in-out infinite;
}

.group:hover .group-hover\:animate-pulse-border {
  animation: pulse-border 0.8s ease-in-out infinite;
}

.animate-pulse-scale-glow-purple {
  animation: pulse-scale-glow-purple 1.5s ease-in-out infinite;
}

.animate-pulse-scale-glow-red {
  animation: pulse-scale-glow-red 1.5s ease-in-out infinite;
  animation-delay: 0.3s;
}

.animate-pulse-scale-glow-green {
  animation: pulse-scale-glow-green 1.5s ease-in-out infinite;
  animation-delay: 0.6s;
}

.animate-pulse-glow-red-border {
  animation: pulse-glow-red-border 2s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 15s linear infinite;
}
</style>
