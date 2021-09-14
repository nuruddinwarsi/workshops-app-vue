<template>
  <div class="card">
    <div class="card-body">
      <div class="card-img-container">
        <img
          class="card-img-top w-50 d-block mx-auto"
          :src="workshop.imageUrl"
          :alt="workshop.name"
        />
      </div>
      <h4 class="card-title">{{ workshop.name }}</h4>
      <div class="card-text">
        <div>
          {{ workshop.startDate }}
          {{ workshop.endDate }}
        </div>
        <div>
          <span> {{ workshop.time }} </span>
        </div>
        <div class="my-3" v-html="workshop.description"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkshopCard',
  props: {
    workshop: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
