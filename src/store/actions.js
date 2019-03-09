import { fetchArticles } from '@/api/articles';
import { SET_ARTICLES } from './mutation-types';

const actions = {
  async fetchArticles({ commit }) {
    const res = await fetchArticles();
    commit(SET_ARTICLES, res.data);
  }
};

export default actions;
