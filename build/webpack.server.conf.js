'use strict';

const webpack = require('webpack');
const VueServerPlugin = require('vue-server-renderer/server-plugin');
const webpackBaseConf = require('./webpack.base.conf');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { dir } = require('../config');

const { resolve, assetsPath } = require('./utils');

const webpackServerConf = merge(webpackBaseConf, {
  target: 'node',
  mode: 'none',
  entry: resolve(`${dir.src}/entry-server.js`),
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs2',
    filename: 'entry-server.js',
    path: resolve(dir.dist)
  },
  externals: Object.keys(require('../package.json').dependencies),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        VUE_ENV: '"server"'
      }
    }),
    new VueServerPlugin()
  ]
});

if (process.env.NODE_ENV === 'production') {
  webpackServerConf.plugins.push(
    new MiniCssExtractPlugin({
      filename: assetsPath('css/[name].[contenthash].css')
    })
  );
}

module.exports = webpackServerConf;
