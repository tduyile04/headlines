const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },
  devServer: {
    publicPath: '/',
    contentBase: './src',
    historyApiFallback: true,
    hot: true
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node-modules/,
        query: {
          presets: ['es2015', 'react', 'react-hmre']
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  }
};
