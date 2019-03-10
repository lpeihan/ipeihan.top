const session = require('koa-session');

module.exports = (app, config) => session({
  key: config.app.name,
  maxAge: 24 * 60 * 60 * 1000,
  overwrite: true,
  httpOnly: true,
  signed: true
}, app);
