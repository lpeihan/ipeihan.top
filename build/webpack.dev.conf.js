'use strict';

const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const chalk = require('chalk');
const address = require('address');
const VueClientPlugin = require('vue-server-renderer/client-plugin');

const webpackBaseConf = require('./webpack.base.conf');
const { resolve } = require('./utils');
const { port } = require('../config');
const packageJson = require('../package.json');

Object.keys(webpackBaseConf.entry).forEach((name) => {
  webpackBaseConf.entry[name] = ['webpack-hot-middleware/client?noInfo=true'].concat(
    webpackBaseConf.entry[name]
  );
});

module.exports = merge(webpackBaseConf, {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new VueClientPlugin(),
    new HtmlWebpackPlugin({
      title: packageJson.name,
      filename: 'index.html',
      template: resolve('public/index.html'),
      favicon: resolve('public/favicon.ico'),
      inject: true
    }),

    new webpack.HotModuleReplacementPlugin(),

    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Your application is running here:'],
        notes: [
          `- Local: ${chalk.cyan(`http://localhost:${port}`)}`,
          `- Network: ${chalk.cyan(`http://${address.ip()}:${port}`)}`
        ]
      }
    })
  ]
});
