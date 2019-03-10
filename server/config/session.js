const session = require('koa-session');

module.exports = (app, config) => session({
  key: config.app.name,
  maxAge: config.cookie.expire,
  overwrite: true,
  httpOnly: true,
  signed: true
}, app);
