import request from '@/utils/request';

export function getArticles(start = 0, limit = 10) {
  return request({
    url: '/articles',
    params: {
      start,
      limit
    }
  });
}
