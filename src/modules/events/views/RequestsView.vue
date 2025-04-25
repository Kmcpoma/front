<template>
  <div class="requests-view">
    <!-- Encabezado -->
    <section class="bg-primary text-white py-5 mb-4">
      <div class="container text-center">
        <h1 class="display-4 fw-bold">Solicitudes de Eventos</h1>
        <p class="lead mb-0">
          Administra las solicitudes de eventos del Bicentenario de Bolivia 2025
        </p>
      </div>
    </section>

    <!-- Tabla de solicitudes -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-hover align-middle">
                <thead class="table-light">
                  <tr>
                    <th scope="col">Evento</th>
                    <th scope="col">Detalles</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="request in requests" :key="request.id">
                    <td>
                      {{ request.event }}
                      <span class="badge bg-primary ms-2">{{ request.category }}</span>
                    </td>
                    <td><i class="bi bi-geo-alt-fill me-2"></i>{{ request.details }}</td>
                    <td>{{ request.date }}</td>
                    <td>
                      <span
                        class="badge"
                        :class="request.status === 'Aprobado' ? 'bg-success' : 'bg-danger'"
                      >
                        {{ request.status }}
                      </span>
                    </td>
                    <td>
                      <button
                        v-if="request.status !== 'Aprobado'"
                        class="btn btn-sm btn-success me-2"
                        @click="updateStatus(request.id, 'Aprobado')"
                      >
                        Aprobar
                      </button>
                      <button
                        v-if="request.status !== 'Rechazado'"
                        class="btn btn-sm btn-danger me-2"
                        @click="updateStatus(request.id, 'Rechazado')"
                      >
                        Rechazar
                      </button>
                      <button class="btn btn-sm btn-outline-primary">
                        <i class="bi bi-eye-fill"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Datos simulados de solicitudes
const requests = ref([
  {
    id: 1,
    event: 'Taller de Historia Boliviana',
    category: 'Social',
    details:
      'Conferencia y debate sobre los 200 años de independencia. Lugar: Casa de la Cultura, La Paz',
    date: '28/04/2025',
    status: 'Aprobado',
  },
  {
    id: 2,
    event: 'Caminata por la Unidad Nacional',
    category: 'Social',
    details: 'Recorrido simbólico desde Sucre hasta Chuquisaca. Participación abierta al público.',
    date: '9/05/2025',
    status: 'Aprobado',
  },
  {
    id: 3,
    event: 'Festival Folklórico del Bicentenario',
    category: 'Cultural',
    details:
      'Presentación de danzas típicas de los 9 departamentos. Lugar: Estadio Hernando Siles, La Paz',
    date: '15/05/2025',
    status: 'Aprobado',
  },
  {
    id: 4,
    event: 'Exposición Arte y Libertad',
    category: 'Cultural',
    details: 'Muestra de pinturas coloniales y contemporáneas. Museo Nacional de Arte, La Paz',
    date: '05/05/2025',
    status: 'Aprobado',
  },
  {
    id: 5,
    event: 'Feria de la Cocina Boliviana',
    category: 'Gastronómico',
    details:
      'Degustación de platos típicos como la sajta, el silpancho y el sonso. Lugar: Plaza Mayor, Santa Cruz',
    date: '28/04/2025',
    status: 'Aprobado',
  },
  {
    id: 6,
    event: 'Concurso El mejor Plato Bicentenario',
    category: 'Gastronómico',
    details:
      'Chefs competirán reinventando recetas tradicionales. Patrocinado por el Gobierno Autónomo.',
    date: '22/06/2025',
    status: 'Aprobado',
  },
  {
    id: 7,
    event: 'Maratón 200KM por la Patria',
    category: 'Deportivo',
    details:
      'Carrera simbólica en equipos, representando cada departamento. Inscripciones abiertas.',
    date: '30/05/2025',
    status: 'Aprobado',
  },
  {
    id: 8,
    event: 'Torneo de Fútbol Interdepartamental',
    category: 'Deportivo',
    details: 'Competencia entre selecciones regionales. Estadio Tahuichi, Santa Cruz.',
    date: '11/06/2025',
    status: 'Aprobado',
  },
])

// Función para actualizar el estado de una solicitud
const updateStatus = (id, newStatus) => {
  const request = requests.value.find((req) => req.id === id)
  if (request) {
    request.status = newStatus
  }
}
</script>

<style scoped>
/* Ajustes adicionales para la tabla */
.table th,
.table td {
  vertical-align: middle;
}

/* Iconos de Bootstrap Icons */
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css');
</style>
