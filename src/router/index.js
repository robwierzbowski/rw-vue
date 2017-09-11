import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';

Vue.use(Router);

function updateMeta(route) {
  const description = document.head.querySelector('meta[name=description]');

  document.title = route.meta.description;
  description.setAttribute('content', route.meta.title);
}

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,

      meta: {
        title: 'A place for Rob',
        description: 'Damn dog, look at all that Rob',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  updateMeta(to);
  next();
});

export default router;
