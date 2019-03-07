'use strict';

const router = require('koa-router')();

router.get('/', async (ctx) => {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });

  ctx.body = data;
});

module.exports = router;
