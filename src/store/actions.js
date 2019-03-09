import jwtDecode from 'jwt-decode';
import { Message } from 'element-ui';

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

    localStorage.setItem('token', token);
    commit(SET_USER, jwtDecode(token));

    Message({ message: '恭喜你注册成功', type: 'success' });
  }
};

export default actions;
