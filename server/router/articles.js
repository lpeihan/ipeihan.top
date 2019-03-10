'use strict';

const router = require('koa-router')();
const articles = require('../controllers/articles');
const auth = require('../services/auth');

router.get('/', auth, articles.getArticles);
router.post('/', articles.saveArticle);

module.exports = router;
