import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export type Theme = 'light' | 'dark'
export type Language = 'tr' | 'en'

export const useSettingsStore = defineStore('settings', () => {
    // Theme State
    const theme = ref<Theme>((localStorage.getItem('theme') as Theme) || 'dark')

    // Language State
    const language = ref<Language>((localStorage.getItem('language') as Language) || 'tr')

    // Computed
    const isDark = computed(() => theme.value === 'dark')
    const isLight = computed(() => theme.value === 'light')
    const currentLanguage = computed(() => language.value)

    // Actions
    const setTheme = (newTheme: Theme) => {
        theme.value = newTheme
        localStorage.setItem('theme', newTheme)
        applyTheme(newTheme)
    }

    const toggleTheme = () => {
        setTheme(theme.value === 'dark' ? 'light' : 'dark')
    }

    const setLanguage = (newLanguage: Language) => {
        language.value = newLanguage
        localStorage.setItem('language', newLanguage)
    }

    const toggleLanguage = () => {
        setLanguage(language.value === 'tr' ? 'en' : 'tr')
    }

    // Apply theme to document
    const applyTheme = (themeValue: Theme) => {
        if (themeValue === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    // Initialize theme on load
    const initTheme = () => {
        applyTheme(theme.value)
    }

    // Watch for theme changes
    watch(theme, (newTheme) => {
        applyTheme(newTheme)
    })

    return {
        // State
        theme,
        language,
        // Computed
        isDark,
        isLight,
        currentLanguage,
        // Actions
        setTheme,
        toggleTheme,
        setLanguage,
        toggleLanguage,
        initTheme
    }
})
