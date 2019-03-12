import {
  SET_ARTICLES,
  SET_USER,
  SET_ADMIN_ARTICLES
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
  }
};

export default mutations;
