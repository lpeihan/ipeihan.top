import {
  SET_ARTICLES,
  SET_USER,
  SET_ADMIN_ARTICLES,
  SET_CURRENT_ARTICLE,
  SET_ADMIN_ARTICLES_TOTAL,
  SET_ARTICLES_TOTAL
} from './mutation-types';

const mutations = {
  [SET_ARTICLES](state, articles) {
    state.articles = articles;
  },
  [SET_USER](state, user) {
    state.user = user;
  },
  [SET_ADMIN_ARTICLES](state, articles) {
    state.adminArticles = articles;
  },
  [SET_CURRENT_ARTICLE](state, article) {
    state.currentArticle = article;
  },
  [SET_ADMIN_ARTICLES_TOTAL](state, total) {
    state.adminArticlesTotal = total;
  },
  [SET_ARTICLES_TOTAL](state, total) {
    state.articlesTotal = total;
  }
};

export default mutations;
