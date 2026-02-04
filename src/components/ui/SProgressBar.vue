<template>
  <div class="s-progress-bar w-full">
    <!-- Label Row -->
    <div v-if="showLabel" class="flex items-center justify-between mb-3 text-sm">
      <span v-if="label" class="text-white font-medium">{{ label }}</span>
      <span class="text-white/80 font-medium">{{ progress }}% {{ completedText }}</span>
    </div>

    <!-- Progress Track -->
    <div class="relative">
      <div 
        class="h-3 rounded-full overflow-hidden"
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
      
      <!-- Checkpoint Markers -->
      <div class="absolute top-1/2 -translate-y-1/2 left-0 w-full h-3 flex items-center justify-between px-1">
        <div class="w-3 h-3 rounded-sm border-2 border-teal-400 bg-slate-800 rotate-45"></div>
        <div class="w-3 h-3 rounded-sm border-2 border-teal-400 bg-slate-800 rotate-45"></div>
        <div class="w-3 h-3 rounded-sm border-2 border-teal-400 bg-slate-800 rotate-45"></div>
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
  return 'bg-slate-950/90'
})

const barClasses = computed(() => {
  const variants = {
    default: 'bg-rose-500',
    gradient: 'bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-600',
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
