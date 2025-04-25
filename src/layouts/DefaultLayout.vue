<template>
  <div class="default-layout">
    <Header />
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
  },
}
</script>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 1rem;
}
</style>
