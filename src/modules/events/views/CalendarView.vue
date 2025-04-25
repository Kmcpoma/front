<template>
  <div class="calendar-view">
    <!-- Mensaje de depuración -->
    <div class="alert alert-info">¡El componente CalendarView se está renderizando!</div>

    <!-- Encabezado -->
    <section class="bg-primary text-white py-5 mb-4">
      <div class="container text-center">
        <h1 class="display-4 fw-bold">Calendario de Eventos</h1>
        <p class="lead mb-0">Visualiza los eventos del Bicentenario de Bolivia 2025</p>
      </div>
    </section>

    <!-- Calendario -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <FullCalendar :options="calendarOptions" />
          </div>
        </div>
      </div>
    </section>

    <!-- Modal para detalles del evento -->
    <div
      class="modal fade"
      id="eventModal"
      tabindex="-1"
      aria-labelledby="eventModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="eventModalLabel">Detalles del Evento</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body" v-if="selectedEvent">
            <p><strong>Nombre del Evento:</strong> {{ selectedEvent.title }}</p>
            <p><strong>Fecha:</strong> {{ selectedEvent.date }}</p>
            <p><strong>Lugar:</strong> {{ selectedEvent.location }}</p>
            <p><strong>Hora:</strong> {{ selectedEvent.time }}</p>
            <p>
              <strong>Categoría:</strong>
              <span class="badge" :class="getCategoryClass(selectedEvent.category)">
                {{ selectedEvent.category }}
              </span>
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useEventsStore } from '../store/eventsStore.js' // Usamos ruta relativa temporalmente
import { Modal } from 'bootstrap'

// Instancia del store
const eventsStore = useEventsStore()

// Datos del calendario
const calendarOptions = ref({
  plugins: [dayGridPlugin],
  initialView: 'dayGridMonth',
  events: [],
  eventClick: handleEventClick,
  locale: 'es',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: '',
  },
})

// Evento seleccionado para mostrar en el modal
const selectedEvent = ref(null)

// Cargar eventos al montar el componente
onMounted(async () => {
  await eventsStore.fetchEvents()
  calendarOptions.value.events = eventsStore.events.map((event) => ({
    title: event.title,
    start: event.date,
    extendedProps: {
      location: event.location,
      time: event.time,
      category: event.category,
    },
    backgroundColor: getEventColor(event.category),
    borderColor: getEventColor(event.category),
  }))
})

// Función para manejar el clic en un evento
function handleEventClick(info) {
  const event = info.event
  selectedEvent.value = {
    title: event.title,
    date: event.start.toLocaleDateString('es-ES'),
    location: event.extendedProps.location,
    time: event.extendedProps.time,
    category: event.extendedProps.category,
  }
  const modal = new Modal(document.getElementById('eventModal'))
  modal.show()
}

// Función para asignar colores según la categoría
function getEventColor(category) {
  switch (category) {
    case 'Social':
      return '#0d6efd' // Azul
    case 'Gastronómico':
      return '#198754' // Verde
    case 'Deportivo':
      return '#ffc107' // Amarillo
    case 'Cultural':
      return '#c3b1e1' // Lila
    default:
      return '#6c757d' // Gris por defecto
  }
}

// Clases de Bootstrap para las categorías en el modal
function getCategoryClass(category) {
  switch (category) {
    case 'Social':
      return 'bg-primary'
    case 'Gastronómico':
      return 'bg-success'
    case 'Deportivo':
      return 'bg-warning'
    case 'Cultural':
      return 'bg-lilac'
    default:
      return 'bg-secondary'
  }
}
</script>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css');

.bg-lilac {
  background-color: #c3b1e1 !important;
}
</style>
