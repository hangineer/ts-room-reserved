import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        hiddenHeader: true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signUp',
      name: 'sigUp',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      redirect: '/login'
    }
  ]
});

export default router;