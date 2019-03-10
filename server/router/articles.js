'use strict';

const router = require('koa-router')();
const articles = require('../controllers/articles');
const { authenticate } = require('../services/auth');

router.get('/', authenticate, articles.getArticles);
router.post('/', articles.saveArticle);

module.exports = router;
