<template>
    <div class="login4-form h-full flex flex-col items-center justify-center p-8 lg:p-12 bg-[#0c1a2e]">
        <div class="w-full max-w-md">
            <!-- Header -->
            <div class="mb-8 text-center">
                <h1 class="text-2xl font-bold text-white mb-2">Hoş Geldiniz</h1>
                <p class="text-slate-400 text-sm">Hesabınıza giriş yapın</p>
            </div>

            <!-- Form -->
            <form @submit="handleSubmit" class="space-y-5">
                <!-- Email -->
                <div>
                    <label class="block text-sm text-white/80 mb-2">Email Adresi</label>
                    <div class="relative">
                        <div class="absolute left-4 top-1/2 -translate-y-1/2">
                            <svg class="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <input v-model="email" type="email" required placeholder="ornek@sirket.com"
                            class="w-full pl-12 pr-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-cyan-500/40 transition-colors" />
                    </div>
                </div>

                <!-- Password -->
                <div>
                    <div class="flex items-center justify-between mb-2">
                        <label class="text-sm text-white/80">Şifre</label>
                        <a href="#" class="text-xs text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3">
                                <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"></path>
                                <path d="M18 12v.5"></path>
                                <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"></path>
                                <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"></path>
                                <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"></path>
                                <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"></path>
                            </svg>
                            Şifremi Unuttum
                        </a>
                    </div>
                    <div class="relative">
                        <div class="absolute left-4 top-1/2 -translate-y-1/2">
                            <svg class="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                        </div>
                        <input v-model="password" :type="showPassword ? 'text' : 'password'" required placeholder="••••••••"
                            class="w-full pl-12 pr-12 py-3.5 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-cyan-500/40 transition-colors" />
                        <button type="button" @click="showPassword = !showPassword"
                            class="absolute inset-y-0 right-0 px-2 text-white/60 hover:text-white transition-colors hover:bg-blue-900 rounded-r-lg flex items-center justify-center">
                            <svg v-if="!showPassword" class="w-4 h-4" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Organization Domain -->
                <div>
                    <label class="block text-sm text-white/80 mb-2">Organizasyon Domain</label>
                    <div class="relative">
                        <div class="absolute left-4 top-1/2 -translate-y-1/2">
                            <svg class="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                                <path d="M10 6h4"></path>
                                <path d="M10 10h4"></path>
                                <path d="M10 14h4"></path>
                                <path d="M10 18h4"></path>
                            </svg>
                        </div>
                        <input v-model="domain" type="text" placeholder="sirket-adi"
                            class="w-full pl-12 pr-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-cyan-500/40 transition-colors" />
                    </div>
                    <p class="text-xs text-white/40 mt-1.5">Organizasyonunuzun benzersiz domain adı</p>
                </div>

                <!-- Submit Button -->
                <button type="submit"
                    class="w-full py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white font-semibold transition-colors flex items-center justify-center gap-2 hover:scale-[1.02] shadow-[0_4px_12px_rgba(6,182,212,0.4)] hover:shadow-[0_6px_16px_rgba(6,182,212,0.6)] transition-all duration-300">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Giriş Yap
                </button>
            </form>

            <!-- Footer -->
            <p class="text-center text-xs text-slate-500 mt-6 whitespace-nowrap">
                Giriş yaparak <a href="#" class="text-blue-600 hover:underline">Kullanım Koşulları</a> ve
                <a href="#" class="text-blue-600 hover:underline">Gizlilik Politikası</a>'nı kabul etmiş olursunuz.
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const domain = ref('')
const showPassword = ref(false)

const handleSubmit = (event: Event) => {
    event.preventDefault()
    console.log('Login submitted:', { email: email.value, domain: domain.value })
}
</script>
