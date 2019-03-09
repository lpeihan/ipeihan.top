import {
  SET_ARTICLES
} from './mutation-types';

const mutations = {
  [SET_ARTICLES](state, articles) {
    state.articles = articles;
  }
};

export default mutations;
