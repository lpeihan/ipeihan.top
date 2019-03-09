import jwtDecode from 'jwt-decode';

import { getArticles } from '@/api/articles';

import {
  login,
  register
} from '@/api/admin';

import {
  SET_ARTICLES,
  SET_USER
} from './mutation-types';

const actions = {
  async getArticles({ commit }) {
    const res = await getArticles();
    commit(SET_ARTICLES, res.data);
  },
  async loginAction({ commit }, user) {
    const res = await login(user);
    const currentUser = jwtDecode(res.data);

    commit(SET_USER, currentUser);

    console.log(currentUser);
  },
  async registerAction({ commit }, user) {
    const res = await register(user);
    const token = res.data;

    commit(SET_USER, jwtDecode(token));
  }
};

export default actions;
