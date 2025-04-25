import { ref } from 'vue'

export function useNotifications() {
  const notifications = ref([])

  const addNotification = (message, type = 'info') => {
    notifications.value.push({ message, type, id: Date.now() })
  }

  const removeNotification = (id) => {
    notifications.value = notifications.value.filter((n) => n.id !== id)
  }

  return {
    notifications,
    addNotification,
    removeNotification,
  }
}
