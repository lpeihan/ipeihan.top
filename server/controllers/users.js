'use strict';

const Users = require('../models/users');
const {
  CODE_USER_REGISTER,
  CODE_OK,
  CODE_PASSWORD_ERROR
} = require('../code');

module.exports = {
  async login(ctx) {
    const { username, password } = ctx.request.body;
    const user = await Users.findOne({ username });

    if (user && await user.authenticate(password)) {
      ctx.session.user = user.id;
      ctx.currentUser = user;
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

      const data = await user.save();
      ctx.session.user = data.id;
      ctx.currentUser = data;

      ctx.body = { code: CODE_OK, data };
    } catch (err) {
      console.log(err);
    }
  },

  async logout(ctx) {
    ctx.session.user = null;
    ctx.currentUser = null;
    ctx.body = {
      code: CODE_OK, msg: '退出成功'
    };
  },

  async modify(ctx) {
    const { password, oldPassword } = ctx.request.body;

    const user = await Users.findById(ctx.currentUser.id);

    if (user && await user.authenticate(oldPassword)) {
      user.password = password;
      const data = await user.save();

      ctx.body = {
        code: CODE_OK,
        msg: '修改用户信息成功',
        data
      };
    } else {
      ctx.body = {
        code: CODE_PASSWORD_ERROR,
        msg: '密码错误'
      };
    }
  }
};
