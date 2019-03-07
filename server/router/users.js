'use strict';

const router = require('koa-router')();
const users = require('../controllers/users');

router.get('/login', users.login);

module.exports = router;
