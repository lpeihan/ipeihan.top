'use strict';

module.exports = {
  async login(ctx) {
    const data = await new Promise((resolve) => {
      setTimeout(() => {
        resolve('login');
      }, 2000);
    });

    ctx.body = data;
  }
};
