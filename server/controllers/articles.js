'use strict';

const Articles = require('../models/articles');

module.exports = {
  async getArticles(ctx) {
    const articles = await Articles.find();

    ctx.body = {
      code: 200,
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
