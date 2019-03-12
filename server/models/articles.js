'use strict';

const mongoose = require('mongoose');
const _ = require('lodash');

const Schema = mongoose.Schema;

/**
 * UserSchema
 */
const ArticlesSchema = new Schema({
  author: { type: String, required: true },
  title: { type: String },
  content: { type: String },
  tags: { type: Array, default: [] },
  create_date: { type: Number, default: Date.now() },
  update_date: String
});

ArticlesSchema.index({ create_date: 1 });

/**
 * Hooks
 */
ArticlesSchema
  .pre('save', function(next) {
    this.update_date = Date.now();
    next();
  });

/**
 * Virtuals
 */
ArticlesSchema
  .virtual('_info')
  .get(function() {
    const result = _.pick(this, [
      'id',
      'author',
      'title',
      'tags',
      'content',
      'create_date',
      'update_date'
    ]);
    return result;
  });

/**
 * Methods
 */
ArticlesSchema.methods = {};

module.exports = mongoose.model('Articles', ArticlesSchema);
