<template>
  <div class="s-input-wrapper w-full">
    <!-- Label -->
    <label
      v-if="label"
      :for="inputId"
      class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
    >
      {{ label }}
      <span v-if="required" class="text-rose-500 ml-0.5">*</span>
    </label>

    <!-- Input Container -->
    <div class="relative">
      <!-- Icon Left -->
      <div
        v-if="$slots.iconLeft"
        class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400"
      >
        <slot name="iconLeft" />
      </div>

      <!-- Input Element -->
      <input
        :id="inputId"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :autocomplete="autocomplete"
        :class="inputClasses"
        class="w-full bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 disabled:opacity-50 disabled:cursor-not-allowed"
        @input="onInput"
        @blur="$emit('blur', $event)"
        @focus="$emit('focus', $event)"
      />

      <!-- Icon Right -->
      <div
        v-if="$slots.iconRight"
        class="absolute inset-y-0 right-0 pr-4 flex items-center"
      >
        <slot name="iconRight" />
      </div>
    </div>

    <!-- Error Message -->
    <p v-if="error" class="mt-1.5 text-sm text-rose-500">
      {{ error }}
    </p>

    <!-- Helper Text -->
    <p v-else-if="helperText" class="mt-1.5 text-sm text-gray-500 dark:text-gray-400">
      {{ helperText }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

/**
 * SInput Component
 * 
 * Props:
 * - modelValue: string - v-model değeri
 * - type: 'text' | 'email' | 'password' | 'number' | 'tel'
 * - label: string - Input etiketi
 * - placeholder: string - Placeholder metni
 * - error: string - Hata mesajı
 * - helperText: string - Yardımcı metin
 * - disabled: boolean
 * - readonly: boolean
 * - required: boolean
 * - size: 'sm' | 'md' | 'lg'
 */

export interface Props {
  modelValue?: string | number
  type?: 'text' | 'email' | 'password' | 'number' | 'tel'
  label?: string
  placeholder?: string
  error?: string
  helperText?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  size?: 'sm' | 'md' | 'lg'
  autocomplete?: string
  id?: string
  hasLeftIcon?: boolean
  hasRightIcon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  disabled: false,
  readonly: false,
  required: false,
  size: 'md',
  autocomplete: 'off'
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
}>()

const inputId = computed(() => props.id || `input-${Math.random().toString(36).substr(2, 9)}`)

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'py-2 px-3 text-sm',
    md: 'py-3.5 px-4 text-base',
    lg: 'py-4 px-5 text-lg'
  }
  return sizes[props.size]
})

const inputClasses = computed(() => {
  const classes = [sizeClasses.value]
  
  // Add padding for left icon
  if (props.hasLeftIcon) {
    classes.push('pl-12')
  }
  
  // Add padding for right icon
  if (props.hasRightIcon) {
    classes.push('pr-12')
  }
  
  // Add error state styling
  if (props.error) {
    classes.push('border-rose-500 focus:border-rose-500 focus:ring-rose-500/20')
  }
  
  return classes
})

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<style scoped>
@reference "tailwindcss";

.s-input-wrapper input::placeholder {
  @apply text-gray-400;
}
</style>
