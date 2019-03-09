import request from '@/utils/request';

export function register({ username, password }) {
  return request({
    method: 'post',
    url: '/users/register',
    data: {
      username,
      password
    }
  });
}
export function login({ username, password }) {
  return request({
    method: 'post',
    url: '/users/login',
    data: {
      username,
      password
    }
  });
}
