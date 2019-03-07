
'use strict';

const Router = require('koa-router');

const users = require('./articles');

const router = new Router();

router
  .use('/api/articles', users.routes(), users.allowedMethods());

module.exports = router;
