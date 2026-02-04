<template>
  <div class="s-progress-bar w-full">
    <!-- Label Row -->
    <div v-if="showLabel" class="flex items-center justify-between mb-2 text-sm">
      <span v-if="label" class="text-white/80 font-medium">{{ label }}</span>
      <span class="text-white/60">{{ progress }}% {{ completedText }}</span>
    </div>

    <!-- Progress Track -->
    <div 
      class="h-2 rounded-full overflow-hidden"
      :class="trackClasses"
    >
      <!-- Progress Bar -->
      <div
        class="h-full rounded-full transition-all duration-500 ease-out relative overflow-hidden"
        :class="barClasses"
        :style="{ width: `${progress}%` }"
      >
        <!-- Animated Shine Effect -->
        <div 
          v-if="animated"
          class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

/**
 * SProgressBar Component
 * 
 * Props:
 * - progress: number (0-100)
 * - label: string
 * - showLabel: boolean
 * - completedText: string
 * - variant: 'default' | 'gradient' | 'success' | 'warning' | 'danger'
 * - animated: boolean
 * - size: 'sm' | 'md' | 'lg'
 */

export interface Props {
  progress?: number
  label?: string
  showLabel?: boolean
  completedText?: string
  variant?: 'default' | 'gradient' | 'success' | 'warning' | 'danger'
  animated?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  progress: 0,
  showLabel: true,
  completedText: 'Tamamlandı',
  variant: 'gradient',
  animated: true,
  size: 'md'
})

const trackClasses = computed(() => {
  return 'bg-gray-700/50'
})

const barClasses = computed(() => {
  const variants = {
    default: 'bg-rose-500',
    gradient: 'bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400',
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    danger: 'bg-rose-500'
  }
  return variants[props.variant]
})
</script>

<style scoped>
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}
</style>
