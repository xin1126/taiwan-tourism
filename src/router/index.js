import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Home.vue'),
      },
      {
        path: 'searchData',
        component: () => import('../views/SearchData.vue'),
      },
      {
        path: 'detailed/:id',
        component: () => import('../views/Detailed.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('../views/Layout.vue'),
        children: [
          {
            path: '',
            component: () => import('../views/Home.vue'),
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
