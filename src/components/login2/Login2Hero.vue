<template>
    <div class="login2-hero h-full flex flex-col relative justify-between">
        <!-- Version Badge - Top Right -->
        <div class="absolute -top-3 right-0 z-10">
            <span :class="['px-3 py-1.5 text-xs font-medium rounded-full',
                settingsStore.theme === 'dark' ? 'bg-zinc-800 text-white' : 'bg-zinc-900 text-white']">
                {{ t.hero.version }}
            </span>
        </div>

        <!-- Workflow Diagram - Centered -->
        <div class="flex items-center justify-center flex-1">
            <div class="flex items-center gap-6">
                <!-- Brand Box -->
                <div class="flex flex-col items-center">
                    <div
                        :class="['w-20 h-20 rounded-2xl border flex items-center justify-center animate-float',
                            settingsStore.theme === 'dark' ? 'bg-zinc-800 border-zinc-700' : 'bg-zinc-100 border-zinc-300']">
                        <svg :class="['w-9 h-9', settingsStore.theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500']"
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
                        :class="['text-sm mt-2', settingsStore.theme === 'dark' ? 'text-zinc-500' : 'text-zinc-600']">{{
                            t.hero.badge.brand }}</span>
                </div>

                <!-- Arrow 1 - Purple -->
                <svg class="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>

                <!-- Lobster Lead Box -->
                <div class="flex flex-col items-center">
                    <div :class="['w-24 h-24 rounded-2xl flex items-center justify-center border-2 border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.6)] animate-float-delayed',
                        settingsStore.theme === 'dark' ? 'bg-slate-900' : 'bg-white']">
                        <img :src="lobsterSmallLogo" alt="Lobster Lead" class="w-16 h-16 object-contain" />
                    </div>
                    <span
                        :class="['text-base font-semibold mt-2', settingsStore.theme === 'dark' ? 'text-white' : 'text-zinc-900']">Lobster
                        Lead</span>
                    <span class="text-sm text-purple-500">{{ t.hero.badge.aiAssistant }}</span>
                </div>

                <!-- Arrow 2 - Red -->
                <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>

                <!-- Output Options -->
                <div class="flex flex-col gap-2">
                    <!-- Sosyal Medya - Purple -->
                    <div
                        :class="['px-3 py-2 rounded-lg border text-xs font-medium flex items-center gap-2',
                            settingsStore.theme === 'dark' ? 'bg-zinc-800/80 border-zinc-700 text-zinc-300' : 'bg-white border-zinc-200 text-zinc-700 shadow-sm']">
                        <div
                            class="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-share2 lucide-share-2 size-3"
                                aria-hidden="true" style="color: rgb(89, 63, 217);">
                                <circle cx="18" cy="5" r="3"></circle>
                                <circle cx="6" cy="12" r="3"></circle>
                                <circle cx="18" cy="19" r="3"></circle>
                                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                            </svg>
                        </div>
                        {{ t.hero.badge.socialMedia }}
                        <span class="w-2 h-2 rounded-full bg-purple-500 animate-pulse-glow-purple ml-auto"></span>
                    </div>
                    <!-- Blog - Red -->
                    <div
                        :class="['px-3 py-2 rounded-lg border text-xs font-medium flex items-center gap-2',
                            settingsStore.theme === 'dark' ? 'bg-zinc-800/80 border-zinc-700 text-zinc-300' : 'bg-white border-zinc-200 text-zinc-700 shadow-sm']">
                        <div class="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                            <svg class="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                            </svg>
                        </div>
                        {{ t.hero.badge.blog }}
                        <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse-glow-red ml-auto"></span>
                    </div>
                    <!-- E-posta - Green -->
                    <div
                        :class="['px-3 py-2 rounded-lg border text-xs font-medium flex items-center gap-2',
                            settingsStore.theme === 'dark' ? 'bg-zinc-800/80 border-zinc-700 text-zinc-300' : 'bg-white border-zinc-200 text-zinc-700 shadow-sm']">
                        <div
                            class="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                            <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                        </div>
                        {{ t.hero.badge.email }}
                        <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse-glow-green ml-auto"></span>
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
import { computed } from 'vue'
import { useSettingsStore } from '@/stores'
import { useTranslations } from '@/i18n'
import lobsterSmallLogo from '@/assets/lobstersmalllogo.png'

const settingsStore = useSettingsStore()
const t = computed(() => useTranslations(settingsStore.language))
</script>


<style scoped>
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-15px);
    }
}

@keyframes float-delayed {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-15px);
    }
}

@keyframes pulse-glow-purple {
    0%, 100% {
        opacity: 1;
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.4);
    }
    50% {
        opacity: 0.5;
        transform: scale(1.3);
        box-shadow: 0 0 8px 2px rgba(168, 85, 247, 0.8);
    }
}

@keyframes pulse-glow-red {
    0%, 100% {
        opacity: 1;
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4);
    }
    50% {
        opacity: 0.5;
        transform: scale(1.3);
        box-shadow: 0 0 8px 2px rgba(239, 68, 68, 0.8);
    }
}

@keyframes pulse-glow-green {
    0%, 100% {
        opacity: 1;
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
    }
    50% {
        opacity: 0.5;
        transform: scale(1.3);
        box-shadow: 0 0 8px 2px rgba(34, 197, 94, 0.8);
    }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

.animate-float-delayed {
    animation: float-delayed 3s ease-in-out infinite;
    animation-delay: 0.5s;
}

.animate-pulse-glow-purple {
    animation: pulse-glow-purple 1.2s ease-in-out infinite;
}

.animate-pulse-glow-red {
    animation: pulse-glow-red 1.2s ease-in-out infinite;
    animation-delay: 0.2s;
}

.animate-pulse-glow-green {
    animation: pulse-glow-green 1.2s ease-in-out infinite;
    animation-delay: 0.4s;
}
</style>
