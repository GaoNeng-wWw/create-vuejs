import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: () => import('../pages/home.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
