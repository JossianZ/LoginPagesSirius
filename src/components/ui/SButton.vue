<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
    class="inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <!-- Loading Spinner -->
    <svg
      v-if="loading"
      class="animate-spin -ml-1 mr-2 h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>

    <!-- Icon Left -->
    <span v-if="$slots.iconLeft && !loading" class="flex-shrink-0">
      <slot name="iconLeft" />
    </span>

    <!-- Button Content -->
    <span>
      <slot />
    </span>

    <!-- Icon Right -->
    <span v-if="$slots.iconRight" class="flex-shrink-0">
      <slot name="iconRight" />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

/**
 * SButton Component
 * 
 * Props:
 * - variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
 * - size: 'sm' | 'md' | 'lg'
 * - type: 'button' | 'submit' | 'reset'
 * - disabled: boolean
 * - loading: boolean
 * - fullWidth: boolean
 */

export interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  loading: false,
  fullWidth: false
})

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-lg',
    md: 'px-5 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-xl'
  }
  return sizes[props.size]
})

const variantClasses = computed(() => {
  const variants = {
    primary: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500',
    outline: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800',
    ghost: 'text-gray-600 hover:bg-gray-100 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-800',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
  }
  return variants[props.variant]
})

const buttonClasses = computed(() => [
  sizeClasses.value,
  variantClasses.value,
  props.fullWidth ? 'w-full' : ''
])
</script>
