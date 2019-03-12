'use strict';

const Articles = require('../models/articles');
const { CODE_OK } = require('../code');

module.exports = {
  async getAdminArticles(ctx) {
    const articles = await Articles.find({
      author: ctx.currentUser.username
    });

    ctx.body = {
      code: CODE_OK,
      data: articles
    };
  },

  async saveAdminArticle(ctx) {
    const article = new Articles(Object.assign(ctx.request.body, {
      author: ctx.currentUser.username
    }));

    await article.save();
    ctx.body = {
      code: CODE_OK,
      msg: '发布文章成功'
    };
  }
};
