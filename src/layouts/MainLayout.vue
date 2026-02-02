<template>
  <!-- 
    MainLayout.vue
    Ana uygulama layout'u. Header, Sidebar ve Footer içerebilir.
    Dashboard vb. sayfalar bu layout içinde görüntülenir.
  -->
  <div class="main-layout min-h-screen w-full bg-gray-50 dark:bg-gray-900">
    <slot />
  </div>
</template>

<script setup lang="ts">
/**
 * MainLayout Component
 * 
 * Ana uygulama layout'u.
 * Giriş yapıldıktan sonra gösterilen sayfalar için kullanılır.
 */
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
}
</style>
