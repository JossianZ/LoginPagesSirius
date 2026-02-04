<template>
  <AuthLayout>
    <div :class="['login2-view h-screen w-full flex items-center justify-center p-6 relative transition-colors duration-300 overflow-hidden',
      settingsStore.theme === 'dark' ? 'bg-zinc-950' : 'bg-slate-100']">

      <!-- Top Right Controls - Fixed position -->
      <div class="absolute top-6 right-8 flex items-center gap-3 z-50">
        <!-- Language Dropdown -->
        <div class="relative">
          <button @click="showLangDropdown = !showLangDropdown"
            :class="['flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-full transition-colors',
              settingsStore.theme === 'dark' ? 'bg-zinc-800 text-white hover:bg-zinc-700' : 'bg-white text-zinc-800 hover:bg-zinc-100 shadow-sm']">
            <span :class="['text-xs font-bold', settingsStore.theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500']">{{
              currentLang?.code }}</span>
            <span>{{ currentLang?.shortCode }}</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <!-- Dropdown Menu -->
          <div v-if="showLangDropdown" :class="['absolute top-full right-0 mt-3 w-40 border rounded-xl shadow-xl overflow-hidden',
            settingsStore.theme === 'dark' ? 'bg-zinc-800 border-zinc-700' : 'bg-white border-zinc-200']">
            <button v-for="lang in languages" :key="lang.code" @click="selectLanguage(lang.value)"
              :class="['w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors',
                settingsStore.theme === 'dark' ? 'text-white hover:bg-zinc-700' : 'text-zinc-800 hover:bg-zinc-100']">
              <span
                :class="['text-xs font-bold', settingsStore.theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500']">{{
                lang.code }}</span>
              <span>{{ lang.name }}</span>
              <svg v-if="settingsStore.language === lang.value" class="w-4 h-4 text-red-500 ml-auto" fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Theme Toggle - Pill style with sun and moon -->
        <div :class="['flex items-center rounded-full p-1',
          settingsStore.theme === 'dark' ? 'bg-zinc-800' : 'bg-white shadow-sm']">
          <!-- Sun Icon (Light mode) -->
          <button @click="settingsStore.setTheme('light')" :class="['w-8 h-8 flex items-center justify-center rounded-full transition-colors',
            settingsStore.theme === 'light' ? 'bg-zinc-200' : 'hover:bg-zinc-700/50']">
            <svg :class="['w-4 h-4', settingsStore.theme === 'light' ? 'text-yellow-500' : 'text-zinc-500']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>
          <!-- Moon Icon (Dark mode) -->
          <button @click="settingsStore.setTheme('dark')" :class="['w-8 h-8 flex items-center justify-center rounded-full transition-colors',
            settingsStore.theme === 'dark' ? 'bg-zinc-700' : 'hover:bg-zinc-200/50']">
            <svg :class="['w-4 h-4', settingsStore.theme === 'dark' ? 'text-zinc-300' : 'text-zinc-500']" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Centered Container with Grid -->
      <div class="w-full max-w-6xl h-[calc(100vh-3rem)] grid grid-cols-1 lg:grid-cols-[400px_1fr] grid-rows-[1fr_auto] gap-4">

        <!-- Left Side - Form (spans 2 rows) -->
        <div
          :class="['row-span-2 rounded-3xl p-6 border transition-colors duration-300',
            settingsStore.theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200 shadow-lg']">
          <Login2Form />
        </div>

        <!-- Right Top - Hero Section -->
        <div :class="['hidden lg:block rounded-3xl p-8 border transition-colors duration-300',
          settingsStore.theme === 'dark'
            ? 'bg-gradient-to-br from-zinc-900 via-rose-950/30 to-zinc-900 border-zinc-800'
            : 'bg-gradient-to-br from-white via-rose-50/50 to-white border-zinc-200 shadow-lg']">
          <Login2Hero />
        </div>

        <!-- Right Bottom - 2 Feature Cards (separate) -->
        <div class="hidden lg:grid grid-cols-2 gap-4">
          <!-- AI Assistant Card - hover red border -->
          <div
            :class="['p-6 rounded-2xl border hover:border-red-500 transition-colors cursor-pointer',
              settingsStore.theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200 shadow-lg']">
            <div class="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
              <img :src="lobsterSmallLogo" alt="Lobster Lead" class="w-6 h-6 object-contain" />
            </div>
            <h3
              :class="['text-lg font-semibold mb-2', settingsStore.theme === 'dark' ? 'text-white' : 'text-zinc-900']">
              {{ t.hero.features.aiAssistant.title }}</h3>
            <p :class="['text-sm', settingsStore.theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600']">{{
              t.hero.features.aiAssistant.description }}</p>
          </div>

          <!-- Happy Users Card - hover purple/blue gradient border -->
          <div
            :class="['p-6 rounded-2xl border hover:border-violet-500 transition-colors cursor-pointer',
              settingsStore.theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200 shadow-lg']">
            <div class="flex items-center mb-4">
              <span
                :class="['w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold',
                  settingsStore.theme === 'dark' ? 'bg-zinc-800 border-zinc-900 text-zinc-400' : 'bg-zinc-100 border-white text-zinc-500']">A</span>
              <span
                :class="['w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold -ml-2',
                  settingsStore.theme === 'dark' ? 'bg-zinc-800 border-zinc-900 text-zinc-400' : 'bg-zinc-100 border-white text-zinc-500']">B</span>
              <span
                :class="['w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold -ml-2',
                  settingsStore.theme === 'dark' ? 'bg-zinc-800 border-zinc-900 text-zinc-400' : 'bg-zinc-100 border-white text-zinc-500']">C</span>
              <span
                :class="['w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold -ml-2',
                  settingsStore.theme === 'dark' ? 'bg-zinc-800 border-zinc-900 text-zinc-400' : 'bg-zinc-100 border-white text-zinc-500']">D</span>
              <span :class="['w-8 h-8 rounded-full bg-red-500 border-2 flex items-center justify-center text-xs font-bold text-white -ml-2',
                settingsStore.theme === 'dark' ? 'border-zinc-900' : 'border-white']">+2k</span>
            </div>
            <h3
              :class="['text-lg font-semibold mb-2', settingsStore.theme === 'dark' ? 'text-white' : 'text-zinc-900']">
              {{ t.hero.features.happyUsers.title }}</h3>
            <p :class="['text-sm', settingsStore.theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600']">{{
              t.hero.features.happyUsers.description }}</p>
          </div>
        </div>

      </div>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { AuthLayout } from '@/layouts'
import { Login2Form, Login2Hero } from '@/components/login2'
import { useSettingsStore } from '@/stores'
import { useTranslations } from '@/i18n'
import lobsterSmallLogo from '@/assets/lobstersmalllogo.png'

const settingsStore = useSettingsStore()
const t = computed(() => useTranslations(settingsStore.language))

// Language dropdown
const showLangDropdown = ref(false)

const languages = [
  { code: 'TR', shortCode: 'TR', name: 'Türkçe', value: 'tr' as const },
  { code: 'GB', shortCode: 'EN', name: 'English', value: 'en' as const }
]

const currentLang = computed(() => {
  const found = languages.find(l => l.value === settingsStore.language)
  return found ?? languages[0]
})

const selectLanguage = (lang: 'tr' | 'en') => {
  settingsStore.setLanguage(lang)
  showLangDropdown.value = false
}

onMounted(() => {
  settingsStore.initTheme()
})
</script>
