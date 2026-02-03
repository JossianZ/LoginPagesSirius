<template>
    <div class="login3-hero h-full flex flex-col relative overflow-hidden">
        <!-- Background Decorations -->
        <div
            class="absolute top-10 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-400/30 blur-xl">
        </div>
        <div
            class="absolute top-20 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400/40 to-blue-400/40 blur-lg">
        </div>

        <!-- 3D Sphere/Logo -->
        <div class="flex-1 flex flex-col items-center justify-center">
            <!-- Animated Sphere -->
            <div class="relative mb-8">
                <div
                    class="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-2xl shadow-purple-500/50 animate-float">
                </div>
                <div class="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-white/20 to-transparent">
                </div>
            </div>

            <!-- Main Title -->
            <h1 class="text-4xl lg:text-5xl font-bold text-white text-center mb-6">
                İşletmenizin
                <br />
                <span class="text-white">Dijital Asistanı</span>
            </h1>

            <!-- Features Button -->
            <button
                class="px-6 py-2.5 border border-white/30 rounded-full text-white text-sm font-medium hover:bg-white/10 transition-colors mb-8">
                Özellikler
            </button>

            <!-- Carousel Dots -->
            <div class="flex items-center gap-2 mb-8">
                <span class="w-2 h-2 rounded-full bg-white"></span>
                <span class="w-2 h-2 rounded-full bg-white/40"></span>
                <span class="w-2 h-2 rounded-full bg-white/40"></span>
                <span class="w-2 h-2 rounded-full bg-white/40"></span>
            </div>
        </div>

        <!-- Feature Card -->
        <div class="mx-auto mb-8 max-w-md">
            <div class="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
                <div class="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                </div>
                <div>
                    <h3 class="text-lg font-semibold text-white mb-1">Akıllı Görev Takibi</h3>
                    <p class="text-sm text-white/70 leading-relaxed">Rutin iş görevlerinizi otomatikleştirerek
                        ekibinizin zamanını stratejik girişimlere odaklayın</p>
                </div>
            </div>
        </div>

        <!-- Navigation Arrows & CTA -->
        <div class="flex items-center justify-between px-8 pb-8">
            <!-- Left Arrow -->
            <button
                class="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <!-- CTA Button -->
            <button
                class="px-6 py-3 border border-white/30 rounded-full text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
                BOSS AI Deneyimleyin
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>

            <!-- Right Arrow -->
            <button
                class="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}
</style>
