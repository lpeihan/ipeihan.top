'use strict';

const Articles = require('../models/articles');
const { CODE_OK } = require('../code');

module.exports = {
  async getAdminArticles(ctx) {
    const query = ctx.request.query;
    const articles = await Articles.find({
      author: ctx.currentUser.username
    })
      .sort({ create_date: -1 })
      .skip(Number(query.start))
      .limit(Number(query.limit));

    const total = (await Articles.find({
      author: ctx.currentUser.username
    })).length;

    ctx.body = {
      code: CODE_OK,
      data: {
        articles,
        total
      }
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
  },

  async updateAdminArticle(ctx) {
    const body = ctx.request.body;
    const article = await Articles.findById(body._id);

    Object.assign(article, {
      title: body.title,
      content: body.content,
      tags: body.tags
    });

    await article.save();

    ctx.body = {
      code: CODE_OK,
      msg: '修改文章成功'
    };
  },

  async deleteAdminArticle(ctx) {
    const id = ctx.params.id;

    await Articles.findByIdAndRemove(id);

    ctx.body = {
      code: CODE_OK,
      msg: '删除文章成功'
    };
  }
};
