import Vue from 'vue';
import Vuex from 'vuex';
import { getArticles } from '@/api/articles';

import createLogger from 'vuex/dist/logger';

// import modules from './modules';

Vue.use(Vuex);

export default function() {
  return new Vuex.Store({
    state: {
      articles: []
    },
    getters: {
      articles: state => state.articles
    },
    mutations: {
      'SET_ARTICLES'(state, articles) {
        state.articles = articles;
      }
    },
    actions: {
      async getArticles({ commit }) {
        const res = await getArticles();
        commit('SET_ARTICLES', res.data);
      }
    },
    // modules,

    plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : []
  });
}
