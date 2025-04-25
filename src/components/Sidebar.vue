<template>
  <aside class="sidebar">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/events">Events</router-link></li>
        <li><router-link to="/agenda">Agenda</router-link></li>
        <li><router-link to="/users">Users</router-link></li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #f8f9fa;
  padding: 1rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  margin: 1rem 0;
}

nav ul li a {
  color: #000000;
  text-decoration: none;
  font-size: 1rem;
}

nav ul li a:hover {
  text-decoration: underline;
}
</style>
