<template>
  <!-- 
    Login1View.vue
    İlk login sayfası görünümü.
    Sol tarafta hero, sağ tarafta form bölümü bulunan split layout.
  -->
  <AuthLayout>
    <div class="login1-view min-h-screen w-full flex flex-row">
      <!-- Left Side - Hero Section -->
      <div class="hidden lg:block lg:w-1/2 xl:w-3/5 min-h-screen">
        <Login1Hero />
      </div>

      <!-- Right Side - Form Section -->
      <div class="w-full lg:w-1/2 xl:w-2/5 min-h-screen">
        <Login1Form />
      </div>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import { AuthLayout } from '@/layouts'
import { Login1Hero, Login1Form } from '@/components/login1'

/**
 * Login1View
 * 
 * İlk login sayfası.
 * Seferi lojistik platformu için modern login deneyimi.
 */
</script>

<style scoped>
.login1-view {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
}
</style>
