export default [
  {
    path: '/login',
    name: 'login',
    component: require('@/views/user/login').default,
    meta: {
      auth: true
    }
  }
];
