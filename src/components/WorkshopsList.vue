<template>
  <div>
    <h1>List of workshops</h1>
    <hr />
    <div class="d-flex justify-content-center" v-if="status === 'LOADING'">
      <div class="spinner-border" role="status">
        <!-- <span class="sr-only">Loading...</span> -->
      </div>
    </div>
    <div v-else-if="status === 'LOADED'">
      <ul>
        <li v-for="workshop in workshops" :key="workshop.id">
          {{ workshop.name }}
        </li>
      </ul>
    </div>
    <div v-else-if="status === 'ERROR'" class="alert alert-danger" role="alert">
      {{ error.message }}
    </div>
  </div>
</template>

<script>
import { getWorkshops } from '@/services/workshops.js';

export default {
  name: 'WorkshopsList',
  data() {
    return {
      workshops: [],
      status: 'LOADING',
      error: null,
    };
  },
  created() {
    getWorkshops()
      .then((data) => {
        this.workshops = data;
        this.status = 'LOADED';
      })
      .catch((error) => {
        this.status = 'ERROR';
        this.error = error;
      });
  },
};
</script>

<style scoped></style>
