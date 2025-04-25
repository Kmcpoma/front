<template>
  <div class="d-flex flex-column min-vh-100">
    <AppOrganizerHeader />
    <main class="container flex-grow-1 py-4">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppOrganizerHeader from '../components/header/AppOrganizerHeader.vue'
import AppFooter from '../components/footer/AppFooter.vue'
</script>
