'use strict';

const Users = require('../models/users');
const { CODE_USER_REGISTER, CODE_OK } = require('../code');

module.exports = {
  async login(ctx) {
    const { username, password } = ctx.request.body;
    const user = await Users.findOne({ username });

    if (user && await user.authenticate(password)) {
      ctx.session.user = user;
      ctx.body = {
        code: CODE_OK,
        data: user
      };
    } else {
      ctx.status = 401;
      ctx.body = { msg: '用户名或密码错误' };
    }
  },
  async register(ctx) {
    try {
      const { username, password } = ctx.request.body;
      // todo: validate

      if (await Users.findOne({ username })) {
        ctx.body = {
          code: CODE_USER_REGISTER,
          msg: '该用户名已存在'
        };
      }

      const user = new Users({ username, password });

      ctx.session.user = await user.save();

      ctx.body = { code: CODE_OK, data: ctx.session.user };
    } catch (err) {
      console.log(err);
    }
  }
};
