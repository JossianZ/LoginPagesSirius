<template>
  <AuthLayout>
    <div class="login2-view min-h-screen w-full flex items-center justify-center bg-zinc-950 p-8">
      <!-- Centered Container with Grid -->
      <div class="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[400px_1fr] grid-rows-[1fr_auto] gap-4">

        <!-- Left Side - Form (spans 2 rows) -->
        <div class="row-span-2 bg-zinc-900 rounded-3xl p-8 lg:p-10 border border-zinc-800">
          <Login2Form />
        </div>

        <!-- Right Top - Hero Section (kırmızı/pembe gradient) -->
        <div
          class="hidden lg:block bg-gradient-to-br from-zinc-900 via-rose-950/30 to-zinc-900 rounded-3xl p-8 border border-zinc-800">
          <Login2Hero />
        </div>

        <!-- Right Bottom - 2 Feature Cards (separate) -->
        <div class="hidden lg:grid grid-cols-2 gap-4">
          <!-- AI Assistant Card -->
          <div class="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
            <div class="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
              <img :src="lobsterSmallLogo" alt="Lobster Lead" class="w-6 h-6 object-contain" />
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ t.hero.features.aiAssistant.title }}</h3>
            <p class="text-sm text-zinc-400">{{ t.hero.features.aiAssistant.description }}</p>
          </div>

          <!-- Happy Users Card -->
          <div class="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
            <div class="flex items-center mb-4">
              <span class="w-8 h-8 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center text-xs font-bold text-zinc-400">A</span>
              <span class="w-8 h-8 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center text-xs font-bold text-zinc-400 -ml-2">B</span>
              <span class="w-8 h-8 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center text-xs font-bold text-zinc-400 -ml-2">C</span>
              <span class="w-8 h-8 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center text-xs font-bold text-zinc-400 -ml-2">D</span>
              <span class="w-8 h-8 rounded-full bg-red-500 border-2 border-zinc-900 flex items-center justify-center text-xs font-bold text-white -ml-2">+2k</span>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ t.hero.features.happyUsers.title }}</h3>
            <p class="text-sm text-zinc-400">{{ t.hero.features.happyUsers.description }}</p>
          </div>
        </div>

      </div>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { AuthLayout } from '@/layouts'
import { Login2Form, Login2Hero } from '@/components/login2'
import { useSettingsStore } from '@/stores'
import { useTranslations } from '@/i18n'
import lobsterSmallLogo from '@/assets/lobstersmalllogo.png'

const settingsStore = useSettingsStore()
const t = computed(() => useTranslations(settingsStore.language))

onMounted(() => {
  settingsStore.initTheme()
})
</script>
