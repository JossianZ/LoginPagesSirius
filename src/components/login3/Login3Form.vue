<template>
    <div class="login3-form h-full flex flex-col">
        <!-- Header -->
        <div class="mb-10 text-center">
            <h1 class="text-3xl font-bold text-zinc-900 mb-2 font-space-grotesk">
                Hoş<span class="text-[#4000F0]">geldiniz</span>
            </h1>
            <p class="text-zinc-500">İşletmenizin AI destekli asistanına giriş yapın</p>
        </div>

        <!-- Form -->
        <form @submit="handleSubmit" class="space-y-6 flex-1">
            <!-- Email -->
            <div>
                <label class="block text-sm text-zinc-600 mb-2">E-posta Adresi</label>
                <div class="relative">
                    <div class="absolute left-4 top-1/2 -translate-y-1/2">
                        <svg class="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <input v-model="email" type="email" required placeholder="E-posta adresinizi girin"
                        @input="error = ''"
                        :class="['w-full pl-12 pr-4 py-3.5 bg-zinc-50 border rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none transition-all',
                            error ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20' : 'border-zinc-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20']" />
                </div>
                <p v-if="error" class="mt-2 text-sm text-red-500">{{ error }}</p>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-end">
                <button type="submit"
                    class="bg-transparent border-0 p-0 text-violet-600 hover:text-violet-700 font-medium text-sm flex items-center gap-1 transition-colors cursor-pointer">
                    Devam Et
                    <svg class="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>
        </form>

        <!-- Divider -->
        <div class="flex items-center gap-4 my-8">
            <div class="flex-1 h-px bg-zinc-200"></div>
            <span class="text-sm text-zinc-400">veya şununla devam edin</span>
            <div class="flex-1 h-px bg-zinc-200"></div>
        </div>

        <!-- Alternative Login Options -->
        <div class="grid grid-cols-2 gap-4">
            <!-- Guest -->
            <button type="button"
                class="flex items-center justify-center gap-2 px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-700 hover:bg-zinc-100 transition-colors">
                <svg class="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="font-medium text-sm">Misafir</span>
            </button>

            <!-- SSO -->
            <button type="button"
                class="flex items-center justify-center gap-2 px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-700 hover:bg-zinc-100 transition-colors">
                <svg class="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span class="font-medium text-sm">SSO</span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const error = ref('')

const handleSubmit = (event: Event) => {
    console.log('handleSubmit called')
    event.preventDefault()
    console.log('Email value:', email.value)
    
    if (!email.value.trim()) {
        console.log('Email is empty')
        error.value = 'E-posta adresi gereklidir'
        return
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.value)) {
        console.log('Email format invalid')
        error.value = 'Geçerli bir e-posta adresi girin'
        return
    }
    
    error.value = ''
    console.log('Form submitted:', email.value)
}
</script>
