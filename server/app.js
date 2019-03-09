const Koa = require('koa');
const path = require('path');
const koaStatic = require('koa-static');
const bodyParser = require('koa-bodyparser');

const mongoose = require('./config/mongoose');
const config = require('../config');
const router = require('./router');
const handleSSR = require('./router/ssr');
const auth = require('./services/auth');

// mongoose
mongoose(config);

const app = new Koa();

app.use(bodyParser());

// logger
app.use(async (ctx, next) => {
  const start = new Date();

  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// static
app.use(koaStatic(path.join(__dirname, '..', 'dist'), {
  maxage: 365 * 24 * 60 * 60 * 1000
}));

app.use(auth);

// api
app
  .use(router.routes())
  .use(router.allowedMethods());

// ssr
handleSSR(app);

app.listen(config.port, '0.0.0.0', () => {
  console.log('Your application is running on port: ' + config.port);
});
