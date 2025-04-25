<template>
  <div class="home-view">
    <!-- Banner -->
    <section class="bg-primary text-white py-5 mb-4">
      <div class="container text-center">
        <h1 class="display-4 fw-bold">Bicentenario de Bolivia 2025</h1>
        <p class="lead mb-4">Celebramos 200 años de historia, cultura y orgullo boliviano.</p>
        <router-link to="/agenda" class="btn btn-light btn-lg">
          Descubre la Reseña Histórica
        </router-link>
      </div>
    </section>

    <!-- Sección de bienvenida -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="h3 mb-4">Bienvenidos al Bicentenario</h2>
            <p class="text-muted">
              Únete a la celebración del Bicentenario de Bolivia, un momento para reflexionar sobre
              nuestro pasado, honrar nuestro presente y construir un futuro unido. Explora eventos,
              reseñas históricas y más.
            </p>
            <router-link to="/events" class="btn btn-outline-primary mt-3">
              Ver Agente Virtual
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'

// Definir el nombre del componente
defineComponent({
  name: 'HomeView',
})
</script>
