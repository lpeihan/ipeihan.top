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

export function logout() {
  return request({
    method: 'delete',
    url: '/users/logout'
  });
}

export function modify(data) {
  return request({
    method: 'put',
    url: '/users/modify',
    data
  });
}

export function getAdminArticles({ start = 0, limit = 10, cookies }) {
  return request({
    url: '/admin/articles',
    params: {
      start,
      limit
    },
    _cookies: cookies
  });
}

export function saveAdminArticle(data) {
  return request({
    url: '/admin/articles',
    method: 'post',
    data
  });
}

export function updateAdminArticle(data) {
  return request({
    url: '/admin/articles',
    method: 'put',
    data
  });
}

export function deleteAdminArticle(id) {
  return request({
    url: `/admin/articles/${id}`,
    method: 'delete'
  });
}
