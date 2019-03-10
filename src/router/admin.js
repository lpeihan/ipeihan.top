export default [
  {
    path: '/admin',
    name: 'admin',
    component: require('@/views/admin/admin').default,
    meta: {
      auth: true
    },
    children: [
      {
        path: '/admin/articles',
        name: 'adminArticlesList',
        component: require('@/views/admin/articles-list').default,
        meta: {
          auth: true
        }
      }
    ]
  },
  {
    path: '/admin/login',
    name: 'login',
    component: require('@/views/admin/login').default,
    meta: {
      auth: false
    }
  }
];
