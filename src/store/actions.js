import { Message } from 'element-ui';

import { getArticles } from '@/api/articles';

import {
  login,
  register,
  logout,
  modify
} from '@/api/admin';

import {
  SET_ARTICLES,
  SET_USER
} from './mutation-types';

const actions = {
  async getArticles({ commit }, payload) {
    const res = await getArticles(payload);
    commit(SET_ARTICLES, res.data);
  },
  async loginAction({ commit }, user) {
    const res = await login(user);

    commit(SET_USER, res.data);
    Message({ message: '登录成功', type: 'success' });
  },
  async registerAction({ commit }, user) {
    const res = await register(user);

    commit(SET_USER, res.data);

    Message({ message: '恭喜你注册成功', type: 'success' });
  },
  async logoutAction({ commit }) {
    const res = await logout();

    Message({ message: res.msg, type: 'info' });

    commit(SET_USER, {});
  },
  async modifyAction({ commit }, payload) {
    const res = await modify(payload);
    commit(SET_USER, res.data);
  }
};

export default actions;
