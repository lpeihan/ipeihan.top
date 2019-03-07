const app = require('../package.json');

module.exports = {
  port: 8201,

  mongo: {
    host: 'localhost',
    port: 27017
  },

  dir: {
    src: 'src',
    server: 'server',
    public: 'public',
    dist: 'dist'
  },

  app
};
