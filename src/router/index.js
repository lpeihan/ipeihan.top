
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const files = require.context('.', true, /\.js$/);

let routes = [];

files.keys().forEach((key) => {
  if (key === './index.js') { return; }
  routes = routes.concat(files(key).default);
});

export default function() {
  const router = new Router({
    mode: 'history',
    scrollBehavior (to, from, pos) {
      return pos || { x: 0, y: 0 };
    },
    routes: [
      {
        path: '/',
        component: require('@/views/blog/blog').default,
        children: [
          {
            path: '/',
            component: require('@/views/blog/articles').default,
            name: '博客首页'
          },
          {
            path: '/articles/details/:index',
            component: require('@/views/blog/articles-details').default,
            name: '文章内容'
          },
          {
            path: '/tags',
            component: require('@/views/blog/tags').default,
            name: '标签'
          }
        ]
      }
    ].concat(routes)
  });

  // router.beforeEach((to, from, next) => {
  //   next();
  // });

  return router;
}
