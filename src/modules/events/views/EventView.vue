<template>
  <div class="event-view py-5">
    <div class="container">
      <!-- Título -->
      <h1 class="h3 mb-4">Panel de Organizador</h1>

      <!-- Tarjetas de estadísticas -->
      <div class="row mb-5">
        <!-- Total de Eventos -->
        <div class="col-md-3 mb-4">
          <div class="card shadow-sm text-white bg-primary">
            <div class="card-body text-center">
              <h5 class="card-title">Total de Eventos</h5>
              <p class="card-text display-4">{{ stats.totalEvents }}</p>
            </div>
          </div>
        </div>
        <!-- Eventos Aprobados -->
        <div class="col-md-3 mb-4">
          <div class="card shadow-sm text-white bg-success">
            <div class="card-body text-center">
              <h5 class="card-title">Eventos Aprobados</h5>
              <p class="card-text display-4">{{ stats.approvedEvents }}</p>
            </div>
          </div>
        </div>
        <!-- Eventos Pendientes -->
        <div class="col-md-3 mb-4">
          <div class="card shadow-sm text-white bg-warning">
            <div class="card-body text-center">
              <h5 class="card-title">Eventos Pendientes</h5>
              <p class="card-text display-4">{{ stats.pendingEvents }}</p>
            </div>
          </div>
        </div>
        <!-- Eventos Rechazados -->
        <div class="col-md-3 mb-4">
          <div class="card shadow-sm text-white bg-danger">
            <div class="card-body text-center">
              <h5 class="card-title">Eventos Rechazados</h5>
              <p class="card-text display-4">{{ stats.rejectedEvents }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Actividad Reciente -->
      <section class="activity-section">
        <h2 class="h4 mb-4">Actividad Reciente</h2>
        <div class="card shadow-sm">
          <div class="card-body">
            <!-- Placeholder para el gráfico -->
            <div class="chart-placeholder text-center text-muted">
              <p>Gráfico de actividad reciente (pendiente de implementación)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Estado para las estadísticas
const stats = ref({
  totalEvents: 0,
  approvedEvents: 0,
  pendingEvents: 0,
  rejectedEvents: 0,
})

// Función para cargar datos desde LocalStorage
const loadStatsFromLocalStorage = () => {
  // Obtener eventos del LocalStorage
  const events = JSON.parse(localStorage.getItem('events')) || []

  // Calcular estadísticas
  stats.value.totalEvents = events.length
  stats.value.approvedEvents = events.filter((event) => event.status === 'approved').length
  stats.value.pendingEvents = events.filter((event) => event.status === 'pending').length
  stats.value.rejectedEvents = events.filter((event) => event.status === 'rejected').length
}

// Cargar datos al montar el componente
onMounted(() => {
  // Simulación de datos si LocalStorage está vacío
  const events = JSON.parse(localStorage.getItem('events'))
  if (!events || events.length === 0) {
    const mockEvents = [
      { id: 1, name: 'Evento 1', status: 'approved' },
      { id: 2, name: 'Evento 2', status: 'approved' },
      { id: 3, name: 'Evento 3', status: 'rejected' },
      // ... más eventos simulados para coincidir con las estadísticas
    ]
    localStorage.setItem('events', JSON.stringify(mockEvents))
  }
  loadStatsFromLocalStorage()
})
</script>

<style scoped>
.organizer-dashboard {
  font-family: Arial, sans-serif;
}

.card {
  border: none;
  border-radius: 8px;
}

.card-title {
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.card-text {
  font-weight: bold;
}

.chart-placeholder {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  border-radius: 8px;
}
</style>
