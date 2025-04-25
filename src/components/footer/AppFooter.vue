<template>
  <footer class="bg-light text-dark py-4 text-center" aria-label="Footer">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <p>
          <a href="mailto:Bicentenario@gmail.com" class="lc-text-dark text-decoration-none">
            Contactos al : 78899123 Bicentenario@gmail.com
          </a>
        </p>
        <div class="social-icons mt-3">
          <a href="https://www.facebook.com" target="_blank" class="text-dark mx-2">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" class="text-dark mx-2">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
          <a href="https://www.google.com" target="_blank" class="text-dark mx-2">
            <i class="fab fa-google fa-2x"></i>
          </a>
          <a href="https://wa.me/1234567890" target="_blank" class="text-dark mx-2">
            <i class="fab fa-whatsapp fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'AppFooter',
})
</script>

<style scoped>
.social-icons a {
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #007bff;
}
</style>
