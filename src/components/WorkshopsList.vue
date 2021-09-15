<template>
  <div>
    <h1>List of workshops</h1>
    <hr />
    <AppSpinner
      v-if="status === 'LOADING'"
      size="large"
      theme="primary"
    ></AppSpinner>
    <div v-else-if="status === 'LOADED'">
      <div class="row">
        <div
          class="col-12 col-md-4"
          v-for="workshop in workshops"
          :key="workshop.id"
        >
          <WorkshopCard :workshop="workshop"></WorkshopCard>
        </div>
      </div>
    </div>
    <AppAlert
      v-else-if="status === 'ERROR'"
      class="alert alert-danger"
      role="alert"
      theme="danger"
    >
      <template v-slot:heading>
        <h4>Error</h4>
        <hr />
      </template>
      <template v-slot:body>{{ error.message }} </template>
      {{ error.message }}
    </AppAlert>
  </div>
</template>

<script>
import { getWorkshops } from '@/services/workshops.js';
import WorkshopCard from './WorkshopCard.vue';

export default {
  name: 'WorkshopsList',
  components: {
    WorkshopCard,
  },
  data() {
    return {
      workshops: [],
      status: 'LOADING',
      error: null,
    };
  },

  async created() {
    try {
      const data = await getWorkshops();
      this.status = 'LOADED';
      this.workshops = data;
    } catch (error) {
      this.status = 'ERROR';
      this.error = error;
    }
  },
};
</script>

<style scoped></style>
