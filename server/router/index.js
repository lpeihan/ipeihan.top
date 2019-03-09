
'use strict';

const Router = require('koa-router');

const router = new Router();

const articles = require('./articles');
const users = require('./users');

router
  .use('/api/articles', articles.routes(), articles.allowedMethods())
  .use('/api/users', users.routes(), users.allowedMethods());

module.exports = router;
