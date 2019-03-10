'use strict';

const Users = require('../models/users');
const { CODE_AUTH } = require('../code');
// const config = require('../../config');

module.exports = {
  async setCurrentUser(ctx, next) {
    const userId = ctx.session.user;

    if (userId) {
      const user = await Users.findById(userId);

      if (user) {
        ctx.currentUser = user;
      } else {
        ctx.currentUser = null;
        ctx.session.user = null;
      }
    } else {
      ctx.currentUser = null;
      ctx.session.user = null;
    }

    await next();

    // let userCookie = ctx.currentUser ? encodeURIComponent(ctx.currentUser) : '';

    // ctx.cookies.set(`${config.app.name}.user`, userCookie, {
    //   httpOnly: false,
    //   maxAge: config.cookie.expire,
    //   signed: false,
    //   overwrite: true
    // });
  },
  async authenticate(ctx, next) {
    if (ctx.currentUser) {
      await next();
    } else {
      ctx.status = 401;
      ctx.body = { msg: '您还没登录', code: CODE_AUTH };
    }
  }
};
