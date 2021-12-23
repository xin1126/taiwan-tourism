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
        path: 'activity',
        component: () => import('../views/Activity.vue'),
      },
      {
        path: 'attractions',
        component: () => import('../views/Attractions.vue'),
      },
      {
        path: 'delicacy',
        component: () => import('../views/Delicacy.vue'),
      },
      {
        path: 'delicacy',
        component: () => import('../views/Delicacy.vue'),
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
