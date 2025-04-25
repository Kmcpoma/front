<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
    <div class="container-fluid">
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <img src="../assets/logo.svg" alt="Logo" height="40" class="me-2" />
        <span class="fs-4">BICENTENARIO DE BOLIVIA 2025</span>
      </router-link>

      <!-- Botón para móviles (se muestra solo en pantallas pequeñas) -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menú principal (izquierda) -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li v-for="item in mainMenuItems" :key="item.path" class="nav-item">
            <router-link :to="item.path" class="nav-link px-3 fw-medium" active-class="active">
              {{ item.label }}
            </router-link>
          </li>
        </ul>

        <!-- Menú de sesión (derecha) -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              :to="isLoggedIn ? '/dashboard' : '/login'"
              class="nav-link px-3 fw-medium"
              active-class="active"
            >
              {{ isLoggedIn ? 'Dashboard' : 'Iniciar sesión/Registro' }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

// Estado de autenticación (reemplazar con tu lógica real de autenticación)
const isLoggedIn = ref(false) // Cambia a true cuando el usuario esté autenticado

// Elementos del menú principal (a la izquierda)
const mainMenuItems = [
  { path: '/', label: 'Inicio' },
  { path: '/about', label: 'Nosotros' },
  { path: '/faq', label: 'Faq' },
  { path: '/agent', label: 'Agente Virtual' },
  { path: '/historica', label: 'Reseña Histórica' },
]
</script>

<style scoped>
/* Efecto hover y estilos personalizados */
.nav-link {
  transition: all 0.3s ease;
  border-radius: 4px;
}
.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}
.nav-link.active {
  color: white !important;
  font-weight: bold;
  border-bottom: 2px solid white;
}
</style>
