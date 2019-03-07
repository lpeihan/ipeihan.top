'use strict';

const mongoose = require('mongoose');

module.exports = (config) => {
  const mongoConfig = config.mongo;
  const mongoStr = `mongodb://${mongoConfig.host}:${mongoConfig.port}/${config.app.name}`;

  mongoose.connect(mongoStr);
  const db = mongoose.connection;

  db.promise = new Promise((resolve, reject) => {
    db.once('open', () => {
      console.log(`MongoDB open on ${mongoStr}`);
      resolve();
    });

    db.on('error', (err) => {
      console.log('MongoDB error', err);
      reject(err);
    });

    db.on('connected', () => console.log('MongoDB connected'));

    db.on('reconnected', () => console.log('MongoDB reconnected'));

    db.on('disconnected', () => console.log('MongoDB disconnected'));
  });

  return db;
};
