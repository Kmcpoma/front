<template>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ms-auto">
      <li v-for="item in menuItems" :key="item.path" class="nav-item">
        <router-link
          :to="item.path"
          class="nav-link"
          :class="{ active: $route.path === item.path }"
        >
          {{ item.label }}
        </router-link>
      </li>
    </ul>
    <div v-if="isAuthenticated" class="ms-3">
      <button class="btn btn-outline-light" @click="logout">Cerrar Sesión</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
//import { useAuthStore } from '@/modules/auth/store/auth'

defineProps({
  menuItems: {
    type: Array,
    required: true,
    validator: (items) => items.every((item) => 'path' in item && 'label' in item),
  },
})

const authStore = 'ok' // useAuthStore() cambiar luego de terminar el auth// Uncomment this line when using Pinia or Vuex for state management
const isAuthenticated = computed(() => authStore.isAuthenticated)

const router = useRouter()
const logout = async () => {
  await authStore.logout()
  router.push('/login')
}
</script>
