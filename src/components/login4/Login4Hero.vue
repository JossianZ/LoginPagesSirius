<template>
    <div class="login4-hero h-full flex flex-col items-center justify-center p-10 relative">
        <!-- Top Decoration -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 border-b border-cyan-500/30 rounded-b-full">
        </div>

        <!-- Logo and Subtitle -->
        <div class="relative mb-16">
            <img :src="callingaiLogo" alt="CallingAI" class="h-24 object-contain brightness-0 invert" />
            <p class="absolute -bottom-4 left-1/2 text-cyan-600/60 text-sm whitespace-nowrap">Yapay Zeka Çağrı Merkezi
            </p>
        </div>

        <!-- Feature Cards -->
        <div class="w-full max-w-md space-y-8">
            <!-- Feature 1 - Left aligned -->
            <div class="flex items-start gap-4">
                <div
                    class="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </div>
                <div>
                    <h3 class="text-white font-semibold text-base mb-1">Akıllı Çağrı Yönetimi</h3>
                    <p class="text-slate-400 text-sm">Yapay zeka destekli otomatik yönlendirme</p>
                </div>
            </div>

            <!-- Feature 2 - Right aligned -->
            <div class="flex items-start gap-4 justify-end">
                <div class="text-right">
                    <h3 class="text-white font-semibold text-base mb-1">Sesli AI Asistan</h3>
                    <p class="text-slate-400 text-sm">7/24 doğal dil işleme ile destek</p>
                </div>
                <div
                    class="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                </div>
            </div>

            <!-- Feature 3 - Left aligned -->
            <div class="flex items-start gap-4">
                <div
                    class="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                </div>
                <div>
                    <h3 class="text-white font-semibold text-base mb-1">Gelişmiş Analitik</h3>
                    <p class="text-slate-400 text-sm">Gerçek zamanlı performans metrikleri</p>
                </div>
            </div>

            <!-- Divider Line -->
            <div class="w-full h-px bg-slate-700/50 my-6"></div>

            <!-- Bottom Text -->
            <div class="flex items-center justify-center gap-2">
                <svg class="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path
                        d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3">
                    </path>
                </svg>
                <span class="text-slate-500 text-sm">Geleceğin çağrı merkezi teknolojisi</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import callingaiLogo from '@/assets/callingailogo.png'
</script>
