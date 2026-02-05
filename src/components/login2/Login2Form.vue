<template>
    <div class="login2-form h-full flex flex-col justify-between py-8">
        <!-- Header -->
        <div class="mb-6">
            <h1 :class="['text-3xl font-bold mb-3', settingsStore.theme === 'dark' ? 'text-white' : 'text-zinc-900']">{{
                t.login.title }}</h1>
            <p :class="['text-base', settingsStore.theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600']">{{ t.login.subtitle }}</p>
        </div>

        <!-- Google Button -->
        <button type="button" :class="['w-full flex items-center justify-center gap-3 px-4 py-4 border rounded-xl transition-colors mb-8',
            settingsStore.theme === 'dark'
                ? 'bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700'
                : 'bg-zinc-50 border-zinc-300 text-zinc-800 hover:bg-zinc-100']">
            <svg class="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span class="font-medium">{{ t.login.googleButton }}</span>
        </button>

        <!-- Divider -->
        <div class="flex items-center gap-4 mb-8">
            <div :class="['flex-1 h-px', settingsStore.theme === 'dark' ? 'bg-zinc-700' : 'bg-zinc-300']"></div>
            <span :class="['text-sm font-medium', settingsStore.theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400']">{{ t.login.or
            }}</span>
            <div :class="['flex-1 h-px', settingsStore.theme === 'dark' ? 'bg-zinc-700' : 'bg-zinc-300']"></div>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="space-y-6 flex-1">
            <!-- Email -->
            <div>
                <label
                    :class="['block text-sm font-medium mb-2', settingsStore.theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600']">{{
                        t.login.emailLabel }}</label>
                <input v-model="email" type="email" :placeholder="t.login.emailPlaceholder" :class="['w-full px-4 py-4 border rounded-xl focus:outline-none focus:border-red-500 transition-colors',
                    settingsStore.theme === 'dark'
                        ? 'bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500'
                        : 'bg-zinc-50 border-zinc-300 text-zinc-900 placeholder-zinc-400']" />
            </div>

            <!-- Password -->
            <div>
                <label
                    :class="['block text-sm font-medium mb-2', settingsStore.theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600']">{{
                        t.login.passwordLabel }}</label>
                <div class="relative">
                    <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="••••••••" :class="['w-full px-4 py-4 pr-12 border rounded-xl focus:outline-none focus:border-red-500 transition-colors',
                        settingsStore.theme === 'dark'
                            ? 'bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500'
                            : 'bg-zinc-50 border-zinc-300 text-zinc-900 placeholder-zinc-400']" />
                    <button type="button" @click="showPassword = !showPassword"
                        :class="['absolute right-4 top-1/2 -translate-y-1/2', settingsStore.theme === 'dark' ? 'text-zinc-500 hover:text-zinc-300' : 'text-zinc-400 hover:text-zinc-600']">
                        <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Remember & Forgot -->
            <div class="flex items-center justify-between">
                <label class="flex items-center gap-2 cursor-pointer">
                    <input v-model="rememberMe" type="checkbox"
                        :class="['w-4 h-4 rounded focus:ring-red-500 focus:ring-offset-0',
                            settingsStore.theme === 'dark' ? 'border-zinc-600 bg-zinc-800 text-red-500' : 'border-zinc-300 bg-white text-red-500']" />
                    <span :class="['text-sm', settingsStore.theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600']">{{
                        t.login.rememberMe }}</span>
                </label>
                <a href="#" class="text-sm text-red-500 hover:text-red-400 transition-colors">
                    {{ t.login.forgotPassword }}
                </a>
            </div>

            <!-- Submit Button -->
            <button type="submit" :disabled="isLoading"
                class="w-full py-4 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-colors disabled:opacity-50 text-base">
                {{ t.login.loginButton }}
            </button>
        </form>

        <!-- Create Account -->
        <div class="mt-8 text-center">
            <span :class="['text-sm', settingsStore.theme === 'dark' ? 'text-zinc-500' : 'text-zinc-500']">{{
                t.login.noAccount }}</span>
            <a href="#"
                :class="['text-sm font-semibold ml-1 transition-colors',
                    settingsStore.theme === 'dark' ? 'text-white hover:text-red-500' : 'text-zinc-900 hover:text-red-500']">{{
                        t.login.createAccount }}</a>
        </div>

        <!-- Footer -->
        <div
            :class="['mt-6 flex items-center justify-between text-xs', settingsStore.theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400']">
            <span>{{ t.login.footer.copyright }}</span>
            <div class="flex items-center gap-6">
                <a href="#"
                    :class="['transition-colors', settingsStore.theme === 'dark' ? 'hover:text-zinc-300' : 'hover:text-zinc-600']">{{
                        t.login.footer.privacy }}</a>
                <a href="#"
                    :class="['transition-colors', settingsStore.theme === 'dark' ? 'hover:text-zinc-300' : 'hover:text-zinc-600']">{{
                        t.login.footer.terms }}</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useSettingsStore } from '@/stores'
import { useTranslations } from '@/i18n'

const settingsStore = useSettingsStore()
const t = computed(() => useTranslations(settingsStore.language))

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)
const isLoading = ref(false)

const handleSubmit = async () => {
    if (!email.value || !password.value) return
    isLoading.value = true
    await new Promise(resolve => setTimeout(resolve, 1500))
    isLoading.value = false}
</script>
