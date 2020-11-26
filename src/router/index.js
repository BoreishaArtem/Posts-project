import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    name: 'posts',
    path: '/',
    component: () => import('../views/Posts.vue')
  },
  {
    name: 'postview',
    path: '/postview/:id/:post/comments/:specified',
    component: () => import('../views/PostView.vue'),
    props: true
  },
  {
    name: 'create-post',
    path: '/create',
    component: () => import('../components/NewPost.vue')
  },
  {
    name: 'users',
    path: '/users',
    component: () => import('../views/Users.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
