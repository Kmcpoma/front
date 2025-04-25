<template>
  <div class="events-view py-4">
    <div class="container">
      <!-- Título y botón de nuevo evento -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h1 class="h3 mb-0">Eventos</h1>
        <router-link to="/events/new" class="btn btn-success">
          <i class="bi bi-plus-circle me-2"></i>Nuevo Evento
        </router-link>
      </div>

      <!-- Filtros y tabla -->
      <div class="row">
        <!-- Filtros a la izquierda -->
        <div class="col-md-3 mb-4">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title mb-3">Tipo de evento</h5>
              <div class="form-check mb-2" v-for="type in eventTypes" :key="type.value">
                <input
                  class="form-check-input"
                  type="radio"
                  :id="type.value"
                  :value="type.value"
                  v-model="filters.type"
                  @change="applyFilters"
                />
                <label class="form-check-label" :for="type.value">
                  {{ type.label }}
                </label>
              </div>

              <h5 class="card-title mt-4 mb-3">Estado</h5>
              <div class="form-check mb-2" v-for="status in eventStatuses" :key="status.value">
                <input
                  class="form-check-input"
                  type="radio"
                  :id="status.value"
                  :value="status.value"
                  v-model="filters.status"
                  @change="applyFilters"
                />
                <label class="form-check-label" :for="status.value">
                  {{ status.label }}
                </label>
              </div>

              <!-- Botón de limpiar -->
              <div class="mt-4">
                <button class="btn btn-outline-secondary w-100" @click="clearFilters">
                  Limpiar
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Tabla de eventos -->
        <div class="col-md-9">
          <div class="card shadow-sm">
            <div class="card-body">
              <table class="table table-hover">
                <thead class="table-dark">
                  <tr>
                    <th>Evento</th>
                    <th>Detalles</th>
                    <th>Fecha/Hora</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="event in eventsStore.filteredEvents" :key="event.id">
                    <td>{{ event.name }}</td>
                    <td>
                      <small
                        >{{ event.details.type }}<br />{{ event.details.description }}<br />
                        {{ event.details.organizer }}</small
                      >
                    </td>
                    <td>{{ event.dateTime.startDate }} {{ event.dateTime.startTime }}</td>
                    <td>
                      <span
                        :class="{
                          'badge bg-success': event.status === 'Aprobado',
                          'badge bg-danger': event.status === 'Rechazado',
                          'badge bg-warning': event.status === 'Pendiente',
                        }"
                      >
                        {{ event.status }}
                      </span>
                    </td>
                    <td>
                      <button
                        class="btn btn-sm btn-outline-primary me-2"
                        @click="editEvent(event.id)"
                      >
                        <i class="bi bi-pencil"></i>
                      </button>
                      <button class="btn btn-sm btn-outline-danger" @click="deleteEvent(event.id)">
                        <i class="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useEventsStore } from '../store/eventsStore'

// Inicializar el store
const eventsStore = useEventsStore()
const router = useRouter()

// Opciones de filtro
const eventTypes = [
  { value: '', label: 'Todos los tipos' },
  { value: 'Social', label: 'Social' },
  { value: 'Gastronómico', label: 'Gastronómico' },
  { value: 'Deportivo', label: 'Deportivo' },
  { value: 'Cultural', label: 'Cultural' },
]

const eventStatuses = [
  { value: '', label: 'Todos los estados' },
  { value: 'Aprobado', label: 'Aprobado' },
  { value: 'Rechazado', label: 'Rechazado' },
  { value: 'Pendiente', label: 'Pendiente' },
]

// Filtros reactivos
const filters = computed(() => eventsStore.filters)

// Cargar eventos al montar el componente
onMounted(async () => {
  const storedEvents = await eventsStore.loadEvents()
  if (!storedEvents || storedEvents.length === 0) {
    // Datos de ejemplo si localStorage está vacío
    const mockEvents = [
      {
        id: 1,
        name: 'Taller de Historia Boliviana',
        details: {
          type: 'Social',
          description: 'Conferencia y debate sobre los 200 años de independencia.',
          organizer: 'Rosio Peralta',
          location: 'Casa de la Cultura, La Paz',
          modality: 'Presencial',
          audience: 'Público general',
          speaker: 'Dr. Juan Pérez',
          sponsor: 'Gobierno Autónomo',
        },
        dateTime: {
          startDate: '2025-04-28',
          startTime: '23:00',
          endDate: '2025-04-28',
          endTime: '23:30',
        },
        status: 'Aprobado',
      },
      {
        id: 2,
        name: 'Caminata por la Unidad Nacional',
        details: {
          type: 'Social',
          description:
            'Recorrido simbólico desde Sucre hasta Chuquisaca. Participación abierta al público.',
          organizer: 'Rosio Peralta',
          location: 'Sucre - Chuquisaca',
          modality: 'Presencial',
          audience: 'Público general',
          speaker: 'N/A',
          sponsor: 'Municipalidad de Sucre',
        },
        dateTime: {
          startDate: '2025-05-09',
          startTime: '13:00',
          endDate: '2025-05-09',
          endTime: '15:00',
        },
        status: 'Aprobado',
      },
      {
        id: 3,
        name: 'Festival Folklórico del Bicentenario',
        details: {
          type: 'Cultural',
          description: 'Presentación de danzas típicas de los 9 departamentos.',
          organizer: 'Rosio Peralta',
          location: 'Estadio Hernando Siles, La Paz',
          modality: 'Presencial',
          audience: 'Público general',
          speaker: 'N/A',
          sponsor: 'Ministerio de Cultura',
        },
        dateTime: {
          startDate: '2025-05-15',
          startTime: '18:00',
          endDate: '2025-05-15',
          endTime: '21:00',
        },
        status: 'Aprobado',
      },
      {
        id: 4,
        name: 'Exposición Arte y Libertad',
        details: {
          type: 'Cultural',
          description: 'Muestra de pinturas coloniales y contemporáneas.',
          organizer: 'Rosio Peralta',
          location: 'Museo Nacional de Arte, La Paz',
          modality: 'Presencial',
          audience: 'Estudiantes y artistas',
          speaker: 'Prof. María Gómez',
          sponsor: 'Galería Nacional',
        },
        dateTime: {
          startDate: '2025-05-05',
          startTime: '10:00',
          endDate: '2025-05-05',
          endTime: '12:00',
        },
        status: 'Aprobado',
      },
      {
        id: 5,
        name: 'Feria de la Cocina Boliviana',
        details: {
          type: 'Gastronómico',
          description: 'Degustación de platos típicos como la sajta, el silpancho y el sonso.',
          organizer: 'Rosio Peralta',
          location: 'Plaza Mayor, Santa Cruz',
          modality: 'Presencial',
          audience: 'Público general',
          speaker: 'Chef Carlos Vargas',
          sponsor: 'Gastronomía Boliviana S.A.',
        },
        dateTime: {
          startDate: '2025-04-28',
          startTime: '12:00',
          endDate: '2025-04-28',
          endTime: '15:00',
        },
        status: 'Aprobado',
      },
      {
        id: 6,
        name: 'Concurso El mejor Plato Bicentenario',
        details: {
          type: 'Gastronómico',
          description: 'Chefs competirán reinventando recetas tradicionales.',
          organizer: 'Rosio Peralta',
          location: 'Centro de Convenciones, La Paz',
          modality: 'Presencial',
          audience: 'Público general',
          speaker: 'Chef Ana López',
          sponsor: 'Gobierno Autónomo',
        },
        dateTime: {
          startDate: '2025-06-22',
          startTime: '15:00',
          endDate: '2025-06-22',
          endTime: '18:00',
        },
        status: 'Aprobado',
      },
      {
        id: 7,
        name: 'Maratón 200KM por la Patria',
        details: {
          type: 'Deportivo',
          description: 'Carrera simbólica en equipos, representando cada departamento.',
          organizer: 'Rosio Peralta',
          location: 'Ruta Nacional, La Paz',
          modality: 'Presencial',
          audience: 'Atletas',
          speaker: 'N/A',
          sponsor: 'Federación de Atletismo',
        },
        dateTime: {
          startDate: '2025-05-30',
          startTime: '08:00',
          endDate: '2025-05-30',
          endTime: '12:00',
        },
        status: 'Aprobado',
      },
      {
        id: 8,
        name: 'Torneo de Fútbol Interdepartamental',
        details: {
          type: 'Deportivo',
          description: 'Competencia entre selecciones regionales.',
          organizer: 'Rosio Peralta',
          location: 'Estadio Tahuichi, Santa Cruz',
          modality: 'Presencial',
          audience: 'Público general',
          speaker: 'N/A',
          sponsor: 'Federación Boliviana de Fútbol',
        },
        dateTime: {
          startDate: '2025-06-11',
          startTime: '16:00',
          endDate: '2025-06-11',
          endTime: '18:00',
        },
        status: 'Aprobado',
      },
    ]
    await eventsStore.addEvent(mockEvents[0])
    await eventsStore.addEvent(mockEvents[1])
    await eventsStore.addEvent(mockEvents[2])
    await eventsStore.addEvent(mockEvents[3])
    await eventsStore.addEvent(mockEvents[4])
    await eventsStore.addEvent(mockEvents[5])
    await eventsStore.addEvent(mockEvents[6])
    await eventsStore.addEvent(mockEvents[7])
  }
})

// Aplicar filtros
const applyFilters = () => {
  eventsStore.setFilters(filters.value)
}

// Limpiar filtros
const clearFilters = () => {
  eventsStore.clearFilters()
}

// Editar evento
const editEvent = (id) => {
  router.push(`/events/edit/${id}`)
}

// Eliminar evento
const deleteEvent = (id) => {
  if (confirm('¿Estás seguro de eliminar este evento?')) {
    eventsStore.deleteEvent(id)
  }
}
</script>

<style scoped>
.events-view {
  font-family: Arial, sans-serif;
}

.card {
  border: none;
  border-radius: 8px;
}

.card-title {
  font-size: 1.1rem;
}

.table th,
.table td {
  vertical-align: middle;
}

.badge {
  font-size: 0.9rem;
}

.btn-sm {
  padding: 0.25rem 0.5rem;
}

small {
  color: #666;
}
</style>
