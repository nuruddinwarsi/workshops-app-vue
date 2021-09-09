<template>
  <div id="app">
    <app-navbar></app-navbar>
    <div class="container">
      Hello Vue
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    AppNavbar: Navbar,
  },
};
</script>

<style></style>
