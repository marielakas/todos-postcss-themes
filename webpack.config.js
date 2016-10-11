var path = require('path');
var webpack = require('webpack');
var precss = require('precss');
// Styles are no longer inlined into the javascript, but separate in a css bundle file
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// Generates HTML file from index.ejs template file with given variables
var HtmlWebpackPlugin = require('html-webpack-plugin');
// Set variables in npm run scripts for flexibility and configuration
var THEME = process.env.THEME || 'lavender';
var isProd = !!process.env.PROD;

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  // Specifies how to write the compiled files to disk
  output: {
    // Output dir as absolute path -- required
    path: path.join(__dirname, 'dist', THEME),
    filename: 'bundle.js',
    // Public URL address of the output files when referenced in a browser
    publicPath: isProd ? '/static/' : '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // Transform ejs template into HTML file
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.ejs',
      // Tells the plugin not to include the bundled files into the generate HTML -- default: true
      // Sidenote: We include ourselves the script and stylesheet in the template because for prod and dev the paths are different
      inject: false,
      // Variables that are injected into the HTML file
      title: THEME.charAt(0).toUpperCase() + THEME.slice(1),
      theme: THEME,
      requirePath: isProd ? `/dist/${THEME}/` : '/'
    }),
    new ExtractTextPlugin('styles.css', {
      // Extract from all additional chunks too -- default: extracts only from the initial chunk/s
      // It allows to completely remove styles embeded into JS files but still on per entry basis
      // Without allChunks=true styles are extracted from initial chunk only, leaving other styles in JS files
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
      /*
       CSS-loader options:
           modules: enables local scoped CSS. You can switch it off with :global(...) or :global for selectors and/or rules
           importLoaders: [int] many loaders after the css-loader should be applied to @imported resources
           localIdentName: configure the generated ident for easier debugging
      */
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[test]__[style]___[hash:base64:5]!postcss-loader')
    }]
  },
  postcss: [
    /*
      PostCSS configuration: list of plugins used to gain features and functionality
      postcss-import: can consume files at given paths and inline them when requested in other css files (should be first in the array if possible)
    */
    require('postcss-import')({
      // Use for hot-reloading so that when a new file is imported Webpack will rebundle the stylesheet
      addDependencyTo: webpack,
      // Where to llok for files
      // Sidenote: THEME variable comes from the npm build script (dev/prod) and that way the stylesheets are getting the right variables
      path: path.join(__dirname, 'src', 'themes', THEME)
    }),
    // Transforms CSS specs into more compatible CSS so you don’t need to wait for browser support
    require("postcss-cssnext")
  ]
};
