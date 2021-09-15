import Router from 'vue-router';

// @ -> src folder
import AppHome from '@/components/AppHome';
import WorkshopsList from '@/components/WorkshopsList';
import WorkshopDetails from '@/components/WorkshopDetails';

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
    {
      name: 'WorkshopDetails',
      path: '/workshops/:id',
      component: WorkshopDetails,
      props: true,
    },
  ],
});

export default router;
