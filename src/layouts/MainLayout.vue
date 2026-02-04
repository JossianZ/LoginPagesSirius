<template>
  <div class="main-layout min-h-screen w-full bg-gray-50 dark:bg-gray-900">
    <slot />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
}
</style>
