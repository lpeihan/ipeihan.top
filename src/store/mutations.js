import {
  SET_ARTICLES,
  SET_USER
} from './mutation-types';

const mutations = {
  [SET_ARTICLES](state, articles) {
    state.articles = articles;
  },
  [SET_USER](state, user) {
    state.user = user;
  }
};

export default mutations;
