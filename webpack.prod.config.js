const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['./src/js/main.js', './src/scss/style.scss'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/',
    contentBase: './dist',
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
          presets: ['es2015', 'stage-2', 'react']
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
        loader: 'url-loader?limit=200000000'
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new Dotenv({
      path: './.env',
    })
  ]
};
