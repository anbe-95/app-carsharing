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
    path: '/location',
    name: 'Location',
    component: () => import('../views/Location.vue'),
  },
  {
    path: '/location/model',
    name: 'Model',
    component: () => import('../views/Model.vue'),
  },
  {
    path: '/location/model/addition',
    name: 'Addition',
    component: () => import('../views/Addition.vue'),
  },
  {
    path: '/location/model/addition/total',
    name: 'Total',
    component: () => import('../views/Total.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
