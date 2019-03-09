import request from '@/utils/request';

export function getArticles(start = 0, limit = 10) {
  return request({
    url: 'http://127.0.0.1:8201/api/articles',
    params: {
      start,
      limit
    }
  });
}
