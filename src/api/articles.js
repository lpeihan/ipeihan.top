import request from '@/utils/request';

export function fetchArticles(start = 0, limit = 10) {
  return request({
    url: '/articles',
    params: {
      start,
      limit
    }
  });
}
