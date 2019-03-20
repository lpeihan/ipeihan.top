'use strict';

const Articles = require('../models/articles');
const { CODE_OK } = require('../code');

module.exports = {
  async getArticles(ctx) {
    const query = ctx.request.query;
    const articles = await Articles.find({
      author: 'lpeihan'
    })
      .sort({ create_date: -1 })
      .skip(Number(query.start))
      .limit(Number(query.limit));

    const total = (await Articles.find({
      author: 'lpeihan'
    })).length;

    ctx.body = {
      code: CODE_OK,
      data: {
        articles,
        total
      }
    };
  }
};
