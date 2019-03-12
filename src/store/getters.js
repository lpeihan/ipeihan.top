const getters = {
  articles: state => state.articles,
  user: state => state.user,
  auth: state => Boolean(Object.keys(state.user).length),
  adminArticles: state => state.adminArticles,
  currentArticle: state => state.currentArticle
};

export default getters;
