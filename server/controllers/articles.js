'use strict';

const Articles = require('../models/articles');
const { CODE_OK } = require('../code');

module.exports = {
  async getArticles(ctx) {
    const articles = await Articles.find();

    ctx.body = {
      code: CODE_OK,
      data: articles
    };
  },

  async saveArticle(ctx) {
    const article = new Articles({
      author: 'lpeihans',
      title: 'demo',
      content: 'a demo'
    });

    ctx.body = await article.save();
  }
};
