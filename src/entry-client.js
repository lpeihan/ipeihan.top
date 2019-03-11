import createApp from '@/create-app';
import '@/utils/console';
import { Message } from 'element-ui';
import bus from '@/utils/bus';

const { app, router, store } = createApp();

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

router.beforeEach((to, from, next) => {
  if (to.meta.auth && store.getters.auth === false) {
    next('/admin/login');
    Message.error('您还没登录');
  } else {
    next();
  }
});

bus.$on('auth', () => {
  router.push('/admin/login');
});

router.onReady(() => {
  app.$mount('#app');
});
