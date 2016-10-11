var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  // Bundle is served by the dev server from memory at the relative path specified here
  publicPath: config.output.publicPath,
  // Enable HMR on the server.
  hot: true,
  // Ca be used with rewrites to server static pages
  historyApiFallback: true // { from: [RegExp], to: [path/to/file/to/serve] }
}).listen(3000, 'localhost', function (err, result) {
    err ? console.log(err) : console.log('Listening at http://localhost:3000/');
});
