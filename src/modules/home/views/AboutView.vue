<template>
  <div class="about-view">
    <!-- Encabezado -->
    <section class="bg-primary text-white py-5 mb-4">
      <div class="container text-center">
        <h1 class="display-4 fw-bold">Sobre Nosotros</h1>
        <p class="lead mb-0">Conoce la misión y visión detrás del Bicentenario de Bolivia 2025</p>
      </div>
    </section>

    <!-- Contenido principal -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2 class="h3 mb-4">Nuestra Misión</h2>
            <p class="text-muted mb-4">
              En el marco del Bicentenario de Bolivia 2025, nuestra misión es celebrar y difundir la
              rica historia, cultura y diversidad de Bolivia, promoviendo la unidad y el orgullo
              nacional a través de eventos, reseñas históricas y plataformas digitales como nuestro
              Agente Virtual.
            </p>

            <h2 class="h3 mb-4">Nuestra Visión</h2>
            <p class="text-muted mb-4">
              Ser una plataforma referente que conecte a los bolivianos con su pasado, presente y
              futuro, inspirando a las nuevas generaciones a construir una Bolivia más fuerte y
              unida.
            </p>

            <div class="text-center">
              <router-link to="/events" class="btn btn-outline-primary">
                Explora el Agente Virtual
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>
