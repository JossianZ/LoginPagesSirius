<template>
  <!-- 
    AuthLayout.vue
    Auth sayfaları için kullanılan layout bileşeni.
    Login, Register vb. sayfalar bu layout içinde görüntülenir.
  -->
  <div class="auth-layout min-h-screen w-full">
    <slot />
  </div>
</template>

<script setup lang="ts">
/**
 * AuthLayout Component
 * 
 * Yetkilendirme sayfaları için minimal layout.
 * Router-view içeriğini doğrudan render eder.
 */
</script>

<style scoped>
.auth-layout {
  display: flex;
  flex-direction: column;
}
</style>
