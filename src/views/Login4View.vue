<template>
  <AuthLayout>
    <div class="login4-view min-h-screen w-full flex">
      <!-- Left Side - Hero -->
      <div class="hidden lg:block lg:w-1/2 bg-slate-950 border-r border-slate-800">
        <Login4Hero />
      </div>

      <!-- Right Side - Form -->
      <div class="w-full lg:w-1/2 bg-slate-900">
        <Login4Form />
      </div>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import { AuthLayout } from '@/layouts'
import { Login4Hero, Login4Form } from '@/components/login4'
</script>
