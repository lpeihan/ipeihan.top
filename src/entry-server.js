import createApp from '@/create-app';

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp();

    if (context.user) {
      store.state.user = context.user;
    }

    router.beforeEach((to, from, next) => {
      if (to.meta.auth && store.getters.auth === false) {
        next('/admin/login');
      } else {
        next();
      }
    });

    router.push(context.url);

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();

      if (matchedComponents.length === 0) {
        return reject({ code: 404 });
      }

      Promise.all(matchedComponents.map(Component => {
        if (Component.asyncData) {
          return Component.asyncData({
            route: router.currentRoute,
            router,
            store,
            cookies: context.cookies,
            user: context.user
          });
        }
      })).then(data => {
        context.state = store.state;
        context.router = router;
        resolve(app);
      }).catch(reject);
    }, reject);
  });
};
