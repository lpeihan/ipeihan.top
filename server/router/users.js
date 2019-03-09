'use strict';

const router = require('koa-router')();
const users = require('../controllers/users');

router.post('/login', users.login);
router.post('/register', users.register);

module.exports = router;
