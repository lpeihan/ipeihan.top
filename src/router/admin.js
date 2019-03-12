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
        path: '/admin/articles-edit',
        name: '编辑文章',
        component: require('@/views/admin/articles-edit').default,
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
      },
      {
        path: '/admin/modify',
        name: '修改资料',
        component: require('@/views/admin/modify').default,
        meta: {
          auth: true
        }
      },
      {
        path: '/admin/web-info',
        name: '网站信息',
        component: require('@/views/admin/web-info').default,
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
