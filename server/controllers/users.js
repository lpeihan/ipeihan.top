'use strict';

const Users = require('../models/users');
const jwt = require('jsonwebtoken');
const config = require('../../config');
const { CODE_USER_REGISTER, CODE_OK } = require('../config/code');

module.exports = {
  async login(ctx) {

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

      await user.save();

      const token = jwt.sign({
        id: user.id,
        username: user.username
      }, config.jwtSecret);

      ctx.body = { code: CODE_OK, data: token };
    } catch (err) {
      console.log(err);
    }
  }
};
