import { getArticles } from '@/api/articles';
import { SET_ARTICLES } from './mutation-types';

const actions = {
  async getArticles({ commit }) {
    const res = await getArticles();
    commit(SET_ARTICLES, res.data);
  }
};

export default actions;
