var path = require('path');
var webpack = require('webpack');
var precss = require('precss');
var autoprefixer =  require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
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
  }
};
