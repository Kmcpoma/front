<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
    <div class="container-fluid">
      <!-- Logo y título -->
      <router-link class="navbar-brand d-flex align-items-center" to="/organizer">
        <img src="../assets/logo.svg" alt="Logo" height="40" class="me-2" />
        <span class="fs-4">BICENTENARIO 2025 | Organizador</span>
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
        <ul class="navbar-nav align-items-center">
          <!-- Notificaciones (Campanita) -->
          <li class="nav-item">
            <button class="nav-link px-3 position-relative" @click="viewNotifications">
              <i class="bi bi-bell-fill"></i>
              <span
                v-if="unreadNotifications > 0"
                class="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle"
              >
                {{ unreadNotifications }}
              </span>
            </button>
          </li>
          <!-- Cerrar Sesión -->
          <li class="nav-item">
            <button v-if="isLoggedIn" class="btn btn-outline-light ms-2" @click="logout">
              Cerrar Sesión
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Estado de autenticación (conectar con tu store real)
const isLoggedIn = ref(true) // Asumimos que el organizador está autenticado
const router = useRouter()

// Elementos del menú principal (a la izquierda)
const mainMenuItems = [
  { path: '/events', label: 'Inicio' },
  { path: '/events/events', label: 'Mis Eventos' },
  { path: '/events/requests', label: 'Mis Solicitudes' },
  { path: '/events/calendar', label: 'Calendario' },
  { path: '/events/profile', label: 'Mi Perfil' },
]

// Estado de notificaciones (simulado, puedes conectarlo a una API o store)
const unreadNotifications = ref(3) // Ejemplo: 3 notificaciones no leídas

// Función para ver notificaciones
const viewNotifications = () => {
  // Lógica para mostrar notificaciones (ej. abrir un modal o redirigir)
  alert('Mostrar notificaciones') // Temporal, reemplaza con tu lógica
}

// Función para cerrar sesión
const logout = () => {
  localStorage.removeItem('token') // Limpiar token
  localStorage.removeItem('userRole') // Limpiar rol
  router.push('/login') // Redirigir al login
}
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
.bi-bell-fill {
  font-size: 1.2rem;
}
.badge {
  font-size: 0.7rem;
}
.btn-outline-light {
  font-size: 0.9rem;
}
</style>
