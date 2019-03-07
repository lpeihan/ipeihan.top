'use strict';

const router = require('koa-router')();
const articles = require('../controllers/articles');

router.get('/', articles.getArticles);
router.post('/', articles.saveArticle);

module.exports = router;
