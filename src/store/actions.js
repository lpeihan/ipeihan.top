import { Message } from 'element-ui';

import { getArticles } from '@/api/articles';

import {
  login,
  register,
  logout,
  modify,
  getAdminArticles,
  saveAdminArticle,
  updateAdminArticle,
  deleteAdminArticle
} from '@/api/admin';

import {
  SET_ARTICLES,
  SET_USER,
  SET_ADMIN_ARTICLES,
  SET_CURRENT_ARTICLE,
  SET_ADMIN_ARTICLES_TOTAL,
  SET_ARTICLES_TOTAL
} from './mutation-types';

const actions = {
  async getArticles({ commit }, payload) {
    const res = await getArticles(payload);
    commit(SET_ARTICLES, res.data.articles);
    commit(SET_ARTICLES_TOTAL, res.data.total);
  },
  async getAdminArticlesAction({ commit }, payload) {
    const res = await getAdminArticles(payload);
    commit(SET_ADMIN_ARTICLES, res.data.articles);
    commit(SET_ADMIN_ARTICLES_TOTAL, res.data.total);
  },
  async saveAdminArticleAction({ commit }, payload) {
    await saveAdminArticle(payload);
  },
  async loginAction({ commit }, user) {
    const res = await login(user);

    commit(SET_USER, res.data);
    Message({ message: '登录成功', type: 'success' });
  },
  async registerAction({ commit }, user) {
    const res = await register(user);

    commit(SET_USER, res.data);

    Message({ message: '恭喜你注册成功', type: 'success' });
  },
  async logoutAction({ commit }) {
    const res = await logout();

    Message({ message: res.msg, type: 'info' });

    commit(SET_USER, {});
  },
  async modifyAction({ commit }, payload) {
    const res = await modify(payload);
    commit(SET_USER, res.data);
  },

  setCurrentArticle({ commit }, article) {
    commit(SET_CURRENT_ARTICLE, article);
  },

  async updateAdminArticleAction({ commit }, article) {
    await updateAdminArticle(article);
  },

  async deleteAdminArticleAction({ commit }, id) {
    await deleteAdminArticle(id);
  }
};

export default actions;
