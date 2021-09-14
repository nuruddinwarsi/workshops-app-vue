<template>
  <div class="alert alert-danger" role="alert">
    <header class="alert-heading">
      <slot name="heading"></slot>
    </header>
    <div class="alert-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
};
</script>

<style scoped>
.alert-heading {
  font-weight: bold;
}
</style>
