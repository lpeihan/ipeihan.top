import { getArticles } from '@/api/articles';

const SET_ARTICLES = 'SET_ARTICLES';

const state = {
  articles: []
};

const getters = {
  articles: state => state.articles
};

const mutations = {
  [SET_ARTICLES](state, articles) {
    state.articles = articles;
  }
};

const actions = {
  async getArticles({ commit }, articles) {
    const res = await getArticles();
    commit(SET_ARTICLES, res.data);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
