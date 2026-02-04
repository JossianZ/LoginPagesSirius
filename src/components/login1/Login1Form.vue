<template>
  <div class="login1-form h-full flex flex-col bg-white">
    <!-- AI Agent Badge (Top Right) -->
    <div class="flex justify-end p-6">
      <div
        class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200">
        <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span class="text-xs font-medium text-gray-600">AI Agent Active</span>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex items-center justify-center px-8 lg:px-16">
      <div class="w-full max-w-md">
        <!-- Header -->
        <div class="text-center mb-10">
          <!-- Icon -->
          <div
            class="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-red-100 mb-6">
            <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4">
              </path>
            </svg>
          </div>

          <h2 class="text-3xl font-bold text-gray-900 mb-2">
            Seferi'ye Hoş Geldiniz
          </h2>
          <p class="text-gray-600">
            Lojistik kontrol panelinize erişmek için oturum açın
          </p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Username Label -->
          <div class="text-sm font-medium text-gray-900 mb-2">
            Kullanıcı Adı
          </div>

          <!-- Username Input -->
          <SInput v-model="username" type="text" placeholder="Enter your username" size="md" :error="error"
            autocomplete="username" :hasLeftIcon="true">
            <template #iconLeft>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </template>
          </SInput>

          <!-- Submit Button -->
          <SButton type="submit" variant="primary" size="md" :fullWidth="true" :loading="isLoading">
            Devam Et
            <template #iconRight>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </template>
          </SButton>
        </form>

        <!-- Help Links -->
        <div class="mt-8 text-center space-y-3">
          <!-- Divider with text -->
          <div class="flex items-center gap-4">
            <div class="flex-1 h-px bg-gray-200"></div>
            <span class="text-sm text-gray-500">
              Yardıma ihtiyacın var?
            </span>
            <div class="flex-1 h-px bg-gray-200"></div>
          </div>
          <a href="#" class="block text-sm opacity-50 text-red-500 hover:text-red-600 transition-colors">
            İletişim Desteği (Yakında)
          </a>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="p-6 text-center">
      <p class="text-xs text-gray-500">
        Powered by Sirius AI Tech © 2025
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SInput, SButton } from '@/components/ui'
import { useAuthStore } from '@/stores'


const authStore = useAuthStore()

const username = ref('')
const error = ref('')
const isLoading = ref(false)

const handleSubmit = async () => {
  if (!username.value.trim()) {
    error.value = 'Kullanıcı adı gereklidir'
    return
  }

  error.value = ''
  isLoading.value = true

  try {
    const success = await authStore.login(username.value)
    if (success) {
      // Redirect or handle success
      console.log('Login successful!')
    }
  } catch (e) {
    error.value = 'Giriş başarısız. Lütfen tekrar deneyin.'
  } finally {
    isLoading.value = false
  }
}
</script>
