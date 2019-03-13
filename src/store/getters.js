import marked from '@/utils/marked';

const getters = {
  articles: state => {
    return state.articles.map(item => {
      item.summary = marked(item.content.slice(0, 400));
      item.html = marked(item.content);
      return item;
    });
  },
  user: state => state.user,
  auth: state => Boolean(Object.keys(state.user).length),
  adminArticles: state => state.adminArticles,
  currentArticle: state => state.currentArticle,
  adminArticlesTotal: state => state.adminArticlesTotal,
  articlesTotal: state => state.articlesTotal
};

export default getters;
