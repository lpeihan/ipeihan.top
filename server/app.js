const Koa = require('koa');
const fs = require('fs');
const path = require('path');
const koaStatic = require('koa-static');
const VueServerRenderer = require('vue-server-renderer');

const config = require('../config');

const isProd = process.env.NODE_ENV === 'production';

const app = new Koa();

// static
app.use(koaStatic(path.join(__dirname, '..', 'dist'), {
  maxage: 365 * 24 * 60 * 60 * 1000
}));

const Router = require('koa-router');

const router = new Router();

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

let bundle;
let clientManifest;
let renderer;
let readyPromise;
const template = fs.readFileSync(path.join(__dirname, '..', 'public/index.html'), 'utf-8');

if (isProd) {
  bundle = require('../dist/vue-ssr-server-bundle.json');
  clientManifest = require('../dist/vue-ssr-client-manifest.json');

  renderer = VueServerRenderer.createBundleRenderer(bundle, {
    runInNewContext: false,
    template,
    clientManifest
  });
} else {
  readyPromise = require('../build/setup-dev-server')(app, (b, c) => {
    bundle = b;
    clientManifest = c;

    renderer = VueServerRenderer.createBundleRenderer(bundle, {
      runInNewContext: false,
      template,
      clientManifest
    });
  });
}

async function render(ctx) {
  ctx.headers['Content-type'] = 'text/html';
  const context = {
    url: ctx.path,
    title: 'hello'
  };

  const html = await renderer.renderToString(context);
  ctx.body = html;
}

router.get('/', isProd ? render : async(ctx) => {
  await readyPromise.then(() => render(ctx));
});

router.get('/login', isProd ? render : async(ctx) => {
  console.log('hhhh');
  await readyPromise.then(() => render(ctx));
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(config.port, '0.0.0.0', () => {
  console.log('Your application is running on port: ' + config.port);
});
