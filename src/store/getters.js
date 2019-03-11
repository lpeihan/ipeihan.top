const getters = {
  articles: state => state.articles,
  user: state => state.user,
  auth: state => Boolean(Object.keys(state.user).length)
};

export default getters;
