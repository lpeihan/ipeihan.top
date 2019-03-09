'use strict';

const mongoose = require('mongoose');
const crypto = require('crypto');
const Promise = require('bluebird');
const _ = require('lodash');

const pbkdf2 = Promise.promisify(crypto.pbkdf2);

const Schema = mongoose.Schema;

/**
 * UserSchema
 */
const UsersSchema = new Schema({
  username: { type: String, required: true, unique: true },
  nickname: String,
  avatar: String,
  sex: { type: Number, default: 0 }, // 0 male 1 female
  salt: String,
  hash_password: { type: String, required: true },
  create_date: { type: Number, default: Date.now() },
  update_date: String
});

/**
 * Hooks
 */
UsersSchema
  .pre('save', function(next) {
    this.update_date = Date.now();
    next();
  });

/**
 * Virtuals
 */
UsersSchema
  .virtual('_info')
  .get(function() {
    const result = _.pick(this, [
      'id',
      'username',
      'avatar',
      'nickname',
      'sex',
      'create_date',
      'update_date'
    ]);
    return result;
  });

UsersSchema
  .virtual('password')
  .set(function(password) {
    this.salt = crypto.randomBytes(15).toString('base64');
    this.hash_password = this.encryptPasswordSync(password);
  });

/**
 * Methods
 */
UsersSchema.methods = {
  async authenticate(password) {
    return (await this.encryptPassword(password)) === this.hash_password;
  },
  encryptPasswordSync(password) {
    return crypto.pbkdf2Sync(password, this.salt, 1, 63, 'sha256').toString('base64');
  },
  async encryptPassword(password) {
    return (await pbkdf2(password, this.salt, 1, 63, 'sha256')).toString('base64');
  }
};

module.exports = mongoose.model('Users', UsersSchema);
