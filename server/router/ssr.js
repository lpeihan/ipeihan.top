const Router = require('koa-router');
const fs = require('fs');
const path = require('path');
const { createBundleRenderer } = require('vue-server-renderer');

const { isProd } = require('../utils');

module.exports = async (app) => {
  const router = new Router();

  let renderer;
  let readyPromise;

  const template = fs.readFileSync(path.join(__dirname, '../../public/index.html'), 'utf-8');

  if (isProd) {
    const bundle = require('../../dist/vue-ssr-server-bundle.json');
    const clientManifest = require('../../dist/vue-ssr-client-manifest.json');

    renderer = createBundleRenderer(bundle, {
      runInNewContext: false,
      template,
      clientManifest
    });
  } else {
    readyPromise = require('../../build/setup-dev-server')(app, (bundle, clientManifest) => {
      renderer = createBundleRenderer(bundle, {
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
      title: 'ssr'
    };

    const html = await renderer.renderToString(context);
    ctx.body = html;
  }

  router.get('*', isProd ? render : async(ctx) => {
    await readyPromise.then(() => render(ctx));
  });

  app.use(router.routes()).use(router.allowedMethods());
};
