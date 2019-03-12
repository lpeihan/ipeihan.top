
'use strict';

const Router = require('koa-router');

const router = new Router();

const articles = require('./articles');
const users = require('./users');
const admin = require('./admin');

router
  .use('/api/articles', articles.routes(), articles.allowedMethods())
  .use('/api/users', users.routes(), users.allowedMethods())
  .use('/api/admin', admin.routes(), admin.allowedMethods());

module.exports = router;
