<template>
  <div class="container">
    <div class="jumbotron">
      <h1>Welcome to Workshops App</h1>
      <hr />
      <p class="lead">
        Welcome to the workshops app. You can find the details of the technical
        workshops happening nearby
        <router-link to="/workshops">here</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHome',
};
</script>

<style scoped></style>
