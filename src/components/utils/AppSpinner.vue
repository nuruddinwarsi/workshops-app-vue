<template>
  <div class="d-flex justify-content-center">
    <div
      class="spinner-border"
      :class="`[spinnerSizeClass,spinnerThemeClass]`"
      role="status"
    >
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
import ThemeMixin from '@/mixins/theme';

export default {
  name: 'AppSpinnner',
  mixins: [ThemeMixin],
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
    spinnerThemeClass() {
      return {
        'text-primary': this.theme === 'primary',
        'text-secondary': this.theme === 'secondary',
        'text-success': this.theme === 'success',
        'text-info': this.theme === 'info',
        'text-warning': this.theme === 'warning',
        'text-danger': this.theme === 'danger',
        'text-dark': this.theme === 'dark',
        'text-light': this.theme === 'light',
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
