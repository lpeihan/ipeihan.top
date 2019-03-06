const Koa = require('koa');
const VueServerRenderer = require('vue-server-renderer');

const config = require('../config');

const app = new Koa();

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

let bundle;
let clientManifest;

const Router = require('koa-router');

const router = new Router();

const readyPromise = require('../build/setup-dev-server')(app, (b, c) => {
  bundle = b;
  clientManifest = c;
});

router.get('*', async ctx => {
  readyPromise.then(async () => {
    const renderer = await VueServerRenderer.createBundleRenderer(bundle, {
      inject: false,
      clientManifest
    });
    console.log(renderer);
  });
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(config.port, '0.0.0.0', () => {
  console.log('Your application is running on port: ' + config.port);
});
