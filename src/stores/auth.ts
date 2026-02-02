import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface User {
    id: string
    username: string
    email: string
    name: string
}

export const useAuthStore = defineStore('auth', () => {
    // State
    const user = ref<User | null>(null)
    const isLoading = ref(false)
    const error = ref<string | null>(null)

    // Getters
    const isAuthenticated = computed(() => !!user.value)
    const currentUser = computed(() => user.value)

    // Actions
    const login = async (username: string, _password?: string): Promise<boolean> => {
        isLoading.value = true
        error.value = null

        try {
            // Simulated login - replace with actual API call
            await new Promise(resolve => setTimeout(resolve, 1000))

            user.value = {
                id: '1',
                username,
                email: `${username}@seferi.com`,
                name: username.charAt(0).toUpperCase() + username.slice(1)
            }

            return true
        } catch (e) {
            error.value = e instanceof Error ? e.message : 'Giriş başarısız'
            return false
        } finally {
            isLoading.value = false
        }
    }

    const logout = () => {
        user.value = null
        error.value = null
    }

    const clearError = () => {
        error.value = null
    }

    return {
        // State
        user,
        isLoading,
        error,
        // Getters
        isAuthenticated,
        currentUser,
        // Actions
        login,
        logout,
        clearError
    }
})
