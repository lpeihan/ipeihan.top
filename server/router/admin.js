'use strict';

const router = require('koa-router')();
const admin = require('../controllers/admin');
const { authenticate } = require('../services/auth');

router.get('/articles', authenticate, admin.getAdminArticles);
router.post('/articles', authenticate, admin.saveAdminArticle);

module.exports = router;
