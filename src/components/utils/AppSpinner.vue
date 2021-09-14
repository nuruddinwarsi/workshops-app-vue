<template>
  <div class="d-flex justify-content-center">
    <div class="spinner-border" :class="`spinnerSizeClass`" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'medium',
    },
  },
  computed: {
    spinnerSizeClass() {
      return {
        'spinner-border-large': this.size === 'large',
        'spinner-border-medium': this.size === 'medium',
        'spinner-border-small': this.size === 'small',
      };
    },
  },
};
</script>

<style scoped>
.spinner-border-large {
  width: 3rem;
  height: 3rem;
}
.spinner-border-medium {
  width: 1.5rem;
  height: 1.5rem;
}
.spinner-border-small {
  width: 1rem;
  height: 1rem;
}
</style>
