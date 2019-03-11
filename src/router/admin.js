export default [
  {
    path: '/admin',
    component: require('@/views/admin/admin').default,
    meta: {
      auth: true
    },
    children: [
      {
        path: '/',
        redirect: '/admin/articles-list'
      },
      {
        path: '/admin/articles-list',
        name: '文章列表',
        component: require('@/views/admin/articles-list').default,
        meta: {
          auth: true
        }
      },
      {
        path: '/admin/articles-new',
        name: '发布文章',
        component: require('@/views/admin/articles-new').default,
        meta: {
          auth: true
        }
      },
      {
        path: '/admin/articles-type',
        name: '添加分类',
        component: require('@/views/admin/articles-type').default,
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
