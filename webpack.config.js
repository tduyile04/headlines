const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['./src/js/main.js', './src/scss/style.scss'],
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
        test: /\.scss$/,
        exclude: /node-modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        exclude: /node-modules/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=200000'
      },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   loader: 'file-loader?name=img/img-[hash:6].[ext]',
      // }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
};
