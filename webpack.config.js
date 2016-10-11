var path = require('path');
var webpack = require('webpack');
var precss = require('precss');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var THEME = process.env.THEME || 'lavender';
var HtmlWebpackPlugin = require('html-webpack-plugin');
var isProd = !!process.env.PROD;

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist', THEME),
    filename: 'bundle.js',
    publicPath: isProd ? '/static/' : '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.ejs',
      title: THEME,
      inject: false,
      theme: THEME,
      requirePath: isProd ? `/dist/${THEME}/` : '/'
    }),
    new ExtractTextPlugin('styles.css', {
      allChunks: true
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    {
        test:   /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[test]__[style]___[hash:base64:5]!postcss-loader')
    }]
  },
  postcss: [
    require('postcss-import')({
      addDependencyTo: webpack,
      path: path.join(__dirname, 'src', 'themes', THEME)
    }),
    require("postcss-cssnext")
  ]
};
