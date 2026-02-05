<template>
  <AuthLayout>
    <div class="login1-view min-h-screen w-full flex flex-row">
      <!-- Left Side - Hero Section -->
      <div class="flex-1 min-h-screen">
        <Login1Hero />
      </div>

      <div class="w-[600px] min-h-screen flex-shrink-0">
      <!-- Right Side - Form Section -->
        <Login1Form />
      </div>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import { AuthLayout } from '@/layouts'
import { Login1Hero, Login1Form } from '@/components/login1'
</script>

<style scoped>
.login1-view {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
}
</style>
