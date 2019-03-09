const session = require('koa-session');

module.exports = (app) => session({
  key: 'koa-sess',
  maxAge: 24 * 60 * 60 * 1000,
  overwrite: true,
  httpOnly: true,
  signed: true
}, app);
