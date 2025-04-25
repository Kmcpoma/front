<template>
  <div class="d-flex flex-column min-vh-100">
    <AppPublicHeader />
    <main class="container flex-grow-1 py-4">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppPublicHeader from '../components/header/AppPublicHeader.vue'
import AppFooter from '../components/footer/AppFooter.vue'
</script>
