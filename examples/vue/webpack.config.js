const html = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "[name].[hash].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name]-[hash].js',
    path: __dirname + '/dist',
    publicPath: "/"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new html({
      template: './public/index.html',
      chunks: 'all',
      filename: 'index.html'
    }),
    new VueLoaderPlugin(),
    extractSass
  ],
  devServer: {
    index: '/',
    open: true,
    host: 'localhost',
    port: 8080,
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          // 在开发环境使用 style-loader
          fallback: "style-loader"
        })
      }
    ]
  },
}
