'use strict';

const jwt = require('jsonwebtoken');
const Users = require('../models/users');
const config = require('../../config');

async function authenticate(ctx, next) {
  const authorizationHeader = ctx.req.headers['authorization'];

  let token;
  let user;

  token = authorizationHeader ? authorizationHeader.split(' ')[1] : '';

  if (token) {
    await jwt.verify(token, config.jwtSecret, async (err, decoded) => {
      if (err) {
        ctx.status = 401;
        ctx.body = { msg: '您还没登录' };
        return;
      }
      user = await Users.findById(decoded.id);
      if (user) {
        ctx.user = user;
        await next();
      } else {
        ctx.status = 401;
        ctx.body = { msg: '您还没登录' };
      }
    });
  } else {
    ctx.status = 401;
    ctx.body = { msg: '您还没登录' };
  }
}

module.exports = authenticate;
