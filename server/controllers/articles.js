'use strict';

const Articles = require('../models/articles');

module.exports = {
  async getArticles(ctx) {
    console.log('hhhh');
    const article = new Articles({
      author: 'lpeihans',
      title: 'demo',
      content: 'a demo'
    });

    ctx.body = await article.save();
  },

  async saveArticle(ctx) {
    ctx.body = 'createArticle';
  }
};
