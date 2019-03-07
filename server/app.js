const Koa = require('koa');
const path = require('path');
const koaStatic = require('koa-static');

const config = require('../config');
const handleSSR = require('./router/ssr');

const app = new Koa();

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

// ssr
handleSSR(app);

app.listen(config.port, '0.0.0.0', () => {
  console.log('Your application is running on port: ' + config.port);
});
