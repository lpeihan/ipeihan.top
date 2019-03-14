import Vue from 'vue';

import App from '@/app';
import createRouter from '@/router';
import createStore from '@/store';
import Icon from '@/components/icon';
import '@/assets/styles/index.styl';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import filters from '@/utils/filters';
import Meta from 'vue-meta';

Vue.config.productionTip = false;
Vue.use(Icon);
Vue.use(ElementUI);
Vue.use(filters);
Vue.use(Meta);

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
