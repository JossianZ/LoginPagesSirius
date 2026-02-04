<template>
    <div class="login4-hero h-full flex flex-col items-center justify-center p-10 relative overflow-hidden bg-[#0a1628]">
        <!-- Glow Effects -->
        <div class="absolute top-10 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
        <div class="absolute bottom-10 right-10 w-80 h-80 bg-cyan-600/15 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>

        <!-- Star Dots -->
        <div class="absolute top-20 left-1/4 w-2 h-2 bg-cyan-400/40 rounded-full"></div>
        <div class="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-blue-400/30 rounded-full"></div>
        <div class="absolute top-1/2 left-1/3 w-1 h-1 bg-cyan-300/50 rounded-full"></div>
        <div class="absolute bottom-1/3 right-1/3 w-2 h-2 bg-blue-300/40 rounded-full"></div>
        <div class="absolute bottom-1/4 left-1/5 w-1.5 h-1.5 bg-cyan-500/30 rounded-full"></div>
        <div class="absolute top-2/3 right-1/5 w-1 h-1 bg-blue-400/40 rounded-full"></div>

        <!-- Content -->
        <div class="relative z-10 flex flex-col items-center">
            <!-- Logo and Subtitle -->
            <div class="mb-20 text-center">
                <img :src="callingaiLogo" alt="CallingAI" class="h-28 object-contain mx-auto mb-3 brightness-0 invert" />
                <p class="text-slate-400 text-sm ml-auto mr-0 w-fit">Yapay Zeka Çağrı Merkezi</p>
            </div>

            <!-- Feature Cards -->
            <div class="w-full max-w-md space-y-8">
                <!-- Feature 1 - Akıllı Çağrı Yönetimi (Left) -->
                <div class="flex items-start gap-4 pr-24">
                    <div class="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110 hover:bg-cyan-500/20 hover:border-cyan-500/40">
                        <svg class="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-white font-semibold text-base mb-1">Akıllı Çağrı Yönetimi</h3>
                        <p class="text-slate-400 text-sm">Yapay zeka destekli otomatik yönlendirme</p>
                    </div>
                </div>

                <!-- Feature 2 - Sesli AI Asistan (Right) -->
                <div class="flex items-start gap-4 justify-end pl-24">
                    <div class="text-right">
                        <h3 class="text-white font-semibold text-base mb-1">Sesli AI Asistan</h3>
                        <p class="text-slate-400 text-sm">7/24 doğal dil işleme ile destek</p>
                    </div>
                    <div class="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110 hover:bg-cyan-500/20 hover:border-cyan-500/40">
                        <svg class="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                    </div>
                </div>

                <!-- Feature 3 - Gelişmiş Analitik (Left) -->
                <div class="flex items-start gap-4 pr-24">
                    <div class="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110 hover:bg-cyan-500/20 hover:border-cyan-500/40">
                        <svg class="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-white font-semibold text-base mb-1">Gelişmiş Analitik</h3>
                        <p class="text-slate-400 text-sm">Gerçek zamanlı performans metrikleri</p>
                    </div>
                </div>
            </div>

            <!-- Bottom Text with Headphone Icon -->
            <div class="mt-12 pt-6 border-t border-cyan-500/30 flex items-center justify-center gap-2 w-full max-w-lg">
                <svg class="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 14h3a2 2 0 012 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a9 9 0 0118 0v7a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3" />
                </svg>
                <span class="text-slate-500 text-sm">Geleceğin çağrı merkezi teknolojisi</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import callingaiLogo from '@/assets/callingailogo.png'
</script>
