<template>
  <div class="profile-view py-5">
    <div class="container">
      <h1 class="h3 mb-4">Perfil</h1>
      <p>Aquí podrás gestionar tu perfil de organizador.</p>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'ProfileView',
})
</script>

<style scoped>
.profile-view {
  font-family: Arial, sans-serif;
}
</style>
