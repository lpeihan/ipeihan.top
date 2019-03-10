import axios from 'axios';
import { Message } from 'element-ui';
import bus from '@/utils/bus';

import { isServer } from '@/config';

const CODE_OK = 0;

const request = axios.create({
  baseURL: isServer ? 'http://127.0.0.1:8201/api/' : '/api',
  timeout: 5000,
  params: {},
  _loading: false, // 是否显示 loading
  _toast: true // 报错后是否显示 toast
});

request.interceptors.request.use(
  config => {
    if (config._cookies) {
      config.headers['cookie'] = config._cookies;
    }

    return config;
  },
  err => {
    Promise.reject(err);
  }
);

request.interceptors.response.use(
  res => {
    if (res.config._loading) {}

    // success
    if (res.data.code === CODE_OK) {
      return res.data;
    }

    res.config._toast && Message.error(res.data.msg);

    return Promise.reject(res.data);
  },
  err => {
    if (err.config._loading) {}

    err.config._toast && Message.error(err.response.data.msg);

    // 请求超时处理
    if (err.code === 'ECONNABORTED' && err.message.indexOf('timeout') > -1) {
      // todo
    }

    if (err.response.status === 401) {
      bus.$emit('auth');
    }

    return Promise.reject(err);
  }
);

export default request;
