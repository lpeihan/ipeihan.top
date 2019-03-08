export default [
  {
    path: '/login',
    name: 'userLogin',
    component: require('@/views/user/login').default,
    meta: {
      auth: true
    }
  }
];
