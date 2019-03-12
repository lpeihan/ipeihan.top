import {
  SET_ARTICLES,
  SET_USER,
  SET_ADMIN_ARTICLES,
  SET_CURRENT_ARTICLE
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
  }
};

export default mutations;
