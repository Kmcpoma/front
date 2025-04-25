import { ref } from 'vue'
import { useAuthStore } from '../modules/auth/store/authStore'

export function useAuth() {
  const authStore = useAuthStore()
  const isAuthenticated = ref(!!authStore.token)

  const login = async (credentials) => {
    try {
      await authStore.login(credentials)
      isAuthenticated.value = true
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  const logout = () => {
    authStore.logout()
    isAuthenticated.value = false
  }

  return {
    isAuthenticated,
    login,
    logout,
  }
}
