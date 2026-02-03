<template>
    <div class="login2-hero h-full flex flex-col relative">
        <!-- Version Badge - Top Right -->
        <div class="absolute top-0 right-0">
            <span class="px-3 py-1.5 bg-zinc-800 text-white text-xs font-medium rounded-full">
                {{ t.hero.version }}
            </span>
        </div>

        <!-- Content: Workflow + Title + Description -->
        <div class="flex-1 flex flex-col items-center justify-center">
            <!-- Workflow Diagram -->
            <div class="flex items-center gap-3 mb-8">
                <!-- Brand Box -->
                <div class="flex flex-col items-center">
                    <div
                        class="w-14 h-14 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                        <svg class="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </div>
                    <span class="text-xs text-zinc-500 mt-1.5">{{ t.hero.badge.brand }}</span>
                </div>

                <!-- Arrow -->
                <svg class="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>

                <!-- Lobster Lead Box -->
                <div class="flex flex-col items-center">
                    <div
                        class="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/30">
                        <img :src="lobsterLogo" alt="Lobster Lead" class="w-8 h-8 object-contain" />
                    </div>
                    <span class="text-xs font-semibold text-white mt-1.5">Lobster Lead</span>
                    <span class="text-xs text-red-500">{{ t.hero.badge.aiAssistant }}</span>
                </div>

                <!-- Arrow -->
                <svg class="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>

                <!-- Output Options -->
                <div class="flex flex-col gap-1.5">
                    <div
                        class="px-2.5 py-1.5 rounded-lg bg-zinc-800/80 border border-zinc-700 text-xs font-medium text-zinc-300 flex items-center gap-2">
                        <svg class="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
                        </svg>
                        {{ t.hero.badge.socialMedia }}
                        <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    </div>
                    <div
                        class="px-2.5 py-1.5 rounded-lg bg-zinc-800/80 border border-zinc-700 text-xs font-medium text-zinc-300 flex items-center gap-2">
                        <svg class="w-3.5 h-3.5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                        </svg>
                        {{ t.hero.badge.blog }}
                        <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    </div>
                    <div
                        class="px-2.5 py-1.5 rounded-lg bg-zinc-800/80 border border-zinc-700 text-xs font-medium text-zinc-300 flex items-center gap-2">
                        <svg class="w-3.5 h-3.5 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                        {{ t.hero.badge.email }}
                        <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    </div>
                </div>
            </div>

            <!-- Title -->
            <h1 class="text-3xl lg:text-4xl font-bold text-center mb-3">
                <span class="text-white">{{ t.hero.title }}</span>
                <br />
                <span class="text-red-500">{{ t.hero.titleHighlight }}</span>
            </h1>

            <!-- Description -->
            <p class="text-zinc-400 text-center text-sm max-w-md">
                {{ t.hero.description }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSettingsStore } from '@/stores'
import { useTranslations } from '@/i18n'
import lobsterLogo from '@/assets/lobsterleadlogo.png'

const settingsStore = useSettingsStore()
const t = computed(() => useTranslations(settingsStore.language))
</script>
