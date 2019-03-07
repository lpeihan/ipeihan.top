'use strict';

const Articles = require('../models/articles');

module.exports = {
  async getArticles(ctx) {
    const article = new Articles({
      author: 'lpeihan',
      title: 'demo',
      content: 'a demo'
    });

    ctx.body = await article.save();
  },

  async createArticle(ctx) {
    ctx.body = 'createArticle';
  }
};
