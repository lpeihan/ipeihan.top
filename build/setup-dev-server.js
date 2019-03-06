'use strict';

const webpack = require('webpack');
const path = require('path');
const MFS = require('memory-fs');

const webpackDevConf = require('./webpack.dev.conf');
const webpackServerConf = require('./webpack.server.conf');

const readFileSync = (fs, file) => {
  try {
    const f = fs.readFileSync(path.join(webpackDevConf.output.path, file), 'utf-8');
    return JSON.parse(f);
  } catch (__) {}
};

module.exports = function(app, cb) {
  let bundle;
  let clientManifest;
  let _resolve;
  let readyPromise = new Promise(resolve => { _resolve = resolve; });

  const update = () => {
    if (bundle && clientManifest) {
      _resolve();
      cb(bundle, clientManifest);
    }
  };

  const compiler = webpack(webpackDevConf);

  // dev-middleware
  const devMiddleware = require('koa-webpack-dev-middleware')(compiler, {
    publicPath: webpackDevConf.output.publicPath,
    noInfo: true,
    index: '/'
  });

  // hot-middleware
  const hotMiddleware = require('koa-webpack-hot-middleware')(compiler, {
    path: '/__webpack_hmr',
    reload: true,
    log: false
  });

  app
    .use(devMiddleware)
    .use(hotMiddleware);

  devMiddleware.waitUntilValid(() => {
    clientManifest = readFileSync(devMiddleware.fileSystem, 'vue-ssr-client-manifest.json');
    update();
  });

  // server
  const serverCompiler = webpack(webpackServerConf);
  const mfs = new MFS();
  serverCompiler.outputFileSystem = mfs;
  serverCompiler.watch({}, (err, stats) => {
    if (err) {
      throw err;
    }

    stats = stats.toJson();
    if (stats.errors.length) {
      return;
    };

    bundle = readFileSync(mfs, 'vue-ssr-server-bundle.json');

    update();
  });

  return readyPromise;
};
