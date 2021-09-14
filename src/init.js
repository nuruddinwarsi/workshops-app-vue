import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Router from 'vue-router';

import AppSpinner from '@/components/utils/AppSpinner';
import dateFilter from '@/filters/date';

Vue.component('AppSpinner', AppSpinner);
Vue.filter('date', dateFilter);

Vue.use(Router);
