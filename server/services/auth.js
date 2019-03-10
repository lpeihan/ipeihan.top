'use strict';

const Users = require('../models/users');
const { CODE_AUTH } = require('../code');

async function authenticate(ctx, next) {
  const userId = ctx.session.user;

  if (userId) {
    const user = await Users.findById(userId);

    if (user) {
      ctx.currentUser = user;
      await next();
    } else {
      ctx.status = 401;
      ctx.session.user = ctx.currentUser = null;
      ctx.body = { msg: '您还没登录', code: CODE_AUTH };
    }
  } else {
    ctx.status = 401;
    ctx.session.user = ctx.currentUser = null;
    ctx.body = { msg: '您还没登录', code: CODE_AUTH };
  }
}

module.exports = authenticate;
