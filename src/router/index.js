import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
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
        beforeEnter: (to, from, next) => {
          const { city, point } = store.state;
          if (city && point) {
            next();
          } else {
            next(false);
          }
        },
      },
      {
        path: 'addition',
        name: 'Addition',
        component: () => import('../views/Rent/Addition.vue'),
        beforeEnter: (to, from, next) => {
          const { car } = store.state;
          if (car && car.colors) {
            next();
          } else {
            next(false);
          }
        },
      },
      {
        path: 'total',
        name: 'Total',
        component: () => import('../views/Rent/Total.vue'),
      },
    ],
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin/Index.vue'),
    redirect: '/admin/cars',
    children: [
      {
        path: 'car/:id?',
        name: 'Car',
        component: () => import('../views/Admin/Car.vue'),
      },
      {
        path: 'cars',
        name: 'Cars',
        component: () => import('../views/Admin/Cars.vue'),
      },
      {
        path: 'list',
        name: 'Orders',
        component: () => import('../views/Admin/Orders'),
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
