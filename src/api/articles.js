import request from '@/utils/request';

export function getArticles({ start = 0, limit = 10, cookies }) {
  return request({
    url: '/articles',
    params: {
      start,
      limit
    },
    _cookies: cookies
  });
}
