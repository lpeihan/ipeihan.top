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

  cookie: {
    keys: [
      'aaba640898e746c83694b93395bf272b',
      '23bf36c339cf73e3b22a9b0f9df2e6d9'
    ],
    expire: 60000 * 60 * 24 * 30,
    prefix: 's:'
  },

  app
};
