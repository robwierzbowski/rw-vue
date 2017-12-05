import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';

Vue.use(Router);

function updateMeta(route) {
  const description = document.head.querySelector('meta[name=description]');

  description.setAttribute('content', route.meta.title);
  document.title = route.meta.description;
}

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,

      meta: {
        title: 'Rob Wierzbowski',
        description: 'Rob Wierzbowski | Web Engineer in Pittsburgh, PA',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  updateMeta(to);
  next();
});

export default router;
