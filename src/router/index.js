import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test.vue'),
  },
  {
    path: '/rent',
    name: 'Rent',
    component: () => import('../views/Rent/Index.vue'),
    redirect: '/rent/location',
    children: [
      {
        path: 'location',
        name: 'Location',
        component: () => import('../views/Rent/Location.vue'),
      },
      {
        path: 'model',
        name: 'Model',
        component: () => import('../views/Rent/Model.vue'),
      },
      {
        path: 'addition',
        name: 'Addition',
        component: () => import('../views/Rent/Addition.vue'),
      },
      {
        path: 'total',
        name: 'Total',
        component: () => import('../views/Rent/Total.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
