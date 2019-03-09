const getters = {
  articles: state => state.articles,
  user: state => state.user,
  auth: state => Boolean(Object.keys(state.users).length)
};

export default getters;
