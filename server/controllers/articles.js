'use strict';

const Articles = require('../models/articles');
const { CODE_OK } = require('../code');

module.exports = {
  async getArticles(ctx) {
    const articles = await Articles.find({
      author: 'lipeihan'
    }).sort({
      create_date: -1
    });

    ctx.body = {
      code: CODE_OK,
      data: articles
    };
  }
};
