<template>
  <div :class="cardClasses" class="transition-all duration-300">
    <!-- Header -->
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>

    <!-- Body -->
    <div :class="bodyClasses">
      <slot />
    </div>

    <!-- Footer -->
    <div v-if="$slots.footer" class="card-footer border-t border-gray-100 dark:border-gray-700 pt-4 mt-4">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

/**
 * SCard Component
 * 
 * Props:
 * - variant: 'default' | 'elevated' | 'outlined' | 'glass'
 * - padding: 'none' | 'sm' | 'md' | 'lg'
 * - rounded: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
 */

export interface Props {
  variant?: 'default' | 'elevated' | 'outlined' | 'glass'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
  rounded: '2xl'
})

const variantClasses = computed(() => {
  const variants = {
    default: 'bg-white dark:bg-gray-800',
    elevated: 'bg-white dark:bg-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none',
    outlined: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
    glass: 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50'
  }
  return variants[props.variant]
})

const roundedClasses = computed(() => {
  const roundeds = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl'
  }
  return roundeds[props.rounded]
})

const paddingClasses = computed(() => {
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  return paddings[props.padding]
})

const cardClasses = computed(() => [
  variantClasses.value,
  roundedClasses.value
])

const bodyClasses = computed(() => [
  paddingClasses.value
])
</script>
