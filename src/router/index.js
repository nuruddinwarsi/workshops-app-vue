import Router from 'vue-router';

// @ -> src folder
import AppHome from '@/components/AppHome';
import WorkshopsList from '@/components/WorkshopsList';

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'AppHome',
      path: '/',
      component: AppHome,
    },
    {
      name: 'WorkshopsList',
      path: '/workshops',
      component: WorkshopsList,
    },
  ],
});

export default router;
