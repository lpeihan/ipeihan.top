import Vue from 'vue';

import '@/utils/flexible';
import App from '@/app';
import createRouter from '@/router';
import createStore from '@/store';
import Icon from '@/components/icon';
import '@/assets/styles/index.styl';

Vue.config.productionTip = false;
Vue.use(Icon);

export default () => {
  const router = createRouter();
  const store = createStore();

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });
  return { app, router, store };
};
