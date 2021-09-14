import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Router from 'vue-router';

import AppSpinner from '@/components/utils/AppSpinner';

Vue.component('AppSpinner', AppSpinner);

Vue.use(Router);
