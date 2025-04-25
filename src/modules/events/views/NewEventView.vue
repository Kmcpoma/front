<template>
  <div class="new-event-view py-4">
    <div class="container">
      <h1 class="h3 mb-4">{{ isEditing ? 'Editar Evento' : 'Nuevo Evento' }}</h1>
      <div class="card shadow-sm">
        <div class="card-body">
          <form @submit.prevent="submitEvent">
            <!-- Nombre del Evento -->
            <div class="mb-3">
              <label for="eventName" class="form-label">Nombre del Evento</label>
              <input
                type="text"
                class="form-control"
                id="eventName"
                v-model="eventData.name"
                required
              />
            </div>

            <!-- Descripción -->
            <div class="mb-3">
              <label for="eventDescription" class="form-label">Descripción</label>
              <textarea
                class="form-control"
                id="eventDescription"
                v-model="eventData.details.description"
                rows="3"
                required
              ></textarea>
            </div>

            <!-- Fecha y Hora de Inicio -->
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="startDate" class="form-label">Fecha de Inicio</label>
                <flat-pickr
                  v-model="eventData.dateTime.startDate"
                  class="form-control"
                  :config="dateConfig"
                  placeholder="Selecciona la fecha"
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="startTime" class="form-label">Hora de Inicio</label>
                <flat-pickr
                  v-model="eventData.dateTime.startTime"
                  class="form-control"
                  :config="timeConfig"
                  placeholder="Selecciona la hora"
                  required
                />
              </div>
            </div>

            <!-- Fecha y Hora de Fin -->
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="endDate" class="form-label">Fecha de Fin</label>
                <flat-pickr
                  v-model="eventData.dateTime.endDate"
                  class="form-control"
                  :config="dateConfig"
                  placeholder="Selecciona la fecha"
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="endTime" class="form-label">Hora de Fin</label>
                <flat-pickr
                  v-model="eventData.dateTime.endTime"
                  class="form-control"
                  :config="timeConfig"
                  placeholder="Selecciona la hora"
                  required
                />
              </div>
            </div>

            <!-- Lugar -->
            <div class="mb-3">
              <label for="eventLocation" class="form-label">Lugar</label>
              <input
                type="text"
                class="form-control"
                id="eventLocation"
                v-model="eventData.details.location"
                required
              />
            </div>

            <!-- Modalidad -->
            <div class="mb-3">
              <label class="form-label">Modalidad</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="presential"
                  value="Presencial"
                  v-model="eventData.details.modality"
                  required
                />
                <label class="form-check-label" for="presential">Presencial</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="virtual"
                  value="Virtual"
                  v-model="eventData.details.modality"
                  required
                />
                <label class="form-check-label" for="virtual">Virtual</label>
              </div>
            </div>

            <!-- Tipo de Público -->
            <div class="mb-3">
              <label for="eventAudience" class="form-label">Tipo de Público</label>
              <input
                type="text"
                class="form-control"
                id="eventAudience"
                v-model="eventData.details.audience"
                placeholder="Ej. Público general, Estudiantes, etc."
                required
              />
            </div>

            <!-- Categoría -->
            <div class="mb-3">
              <label class="form-label">Categoría</label>
              <div class="form-check" v-for="category in categories" :key="category.value">
                <input
                  class="form-check-input"
                  type="radio"
                  :id="category.value"
                  :value="category.value"
                  v-model="eventData.details.type"
                  required
                />
                <label class="form-check-label" :for="category.value">
                  {{ category.label }}
                </label>
              </div>
            </div>

            <!-- Expositor -->
            <div class="mb-3">
              <label for="eventSpeaker" class="form-label">Expositor</label>
              <input
                type="text"
                class="form-control"
                id="eventSpeaker"
                v-model="eventData.details.speaker"
                placeholder="Ej. Dr. Juan Pérez (dejar en blanco si no aplica)"
              />
            </div>

            <!-- Patrocinador -->
            <div class="mb-3">
              <label for="eventSponsor" class="form-label">Patrocinador</label>
              <input
                type="text"
                class="form-control"
                id="eventSponsor"
                v-model="eventData.details.sponsor"
                placeholder="Ej. Gobierno Autónomo (dejar en blanco si no aplica)"
              />
            </div>

            <!-- Botones -->
            <div class="d-flex gap-2">
              <button type="submit" class="btn btn-primary w-100">
                {{ isEditing ? 'Actualizar Evento' : 'Registrar Evento' }}
              </button>
              <router-link to="/event/events" class="btn btn-secondary w-100">
                Cancelar
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useEventsStore } from '../store/eventsStore'
import FlatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

// Inicializar router y store
const router = useRouter()
const route = useRoute()
const eventsStore = useEventsStore()

// Configuración de flatpickr
const dateConfig = {
  dateFormat: 'Y-m-d',
  minDate: 'today',
}

const timeConfig = {
  enableTime: true,
  noCalendar: true,
  dateFormat: 'H:i',
  time_24hr: true,
}

// Categorías disponibles
const categories = [
  { value: 'Social', label: 'Social' },
  { value: 'Gastronómico', label: 'Gastronómico' },
  { value: 'Deportivo', label: 'Deportivo' },
  { value: 'Cultural', label: 'Cultural' },
]

// Determinar si estamos editando
const isEditing = computed(() => !!route.params.id)

// Datos del evento
const eventData = ref({
  name: '',
  details: {
    type: '',
    description: '',
    organizer: 'Rosio Peralta', // Organizador fijo por ahora
    location: '',
    modality: 'Presencial',
    audience: '',
    speaker: '',
    sponsor: '',
  },
  dateTime: {
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
  },
  status: 'Pendiente', // Estado inicial
})

// Cargar datos si estamos editando
onMounted(async () => {
  if (isEditing.value) {
    await eventsStore.loadEvents()
    const event = eventsStore.events.find((e) => e.id === parseInt(route.params.id))
    if (event) {
      eventData.value = { ...event }
    } else {
      router.push('/event/events')
    }
  }
})

// Enviar el formulario
const submitEvent = async () => {
  if (isEditing.value) {
    await eventsStore.updateEvent(route.params.id, eventData.value)
  } else {
    await eventsStore.addEvent(eventData.value)
  }
  router.push('/event/events')
}
</script>

<style scoped>
.new-event-view {
  font-family: Arial, sans-serif;
}

.card {
  border: none;
  border-radius: 8px;
}

.form-label {
  font-weight: 500;
}

.form-control,
.form-check-input {
  border-radius: 5px;
}
</style>
