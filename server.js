var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var ip=require("./util").getIPAddress();

var host = ip|| "127.0.0.1";

new WebpackDevServer(webpack(config), {
  contentBase: './public',
  publicPath: config.output.publicPath,
  hot: true,
  host: host,
  proxy: {
    '/ShoppingGuideAPI/*': {
        target: 'http://api.panli.com',
        secure: false,
        changeOrigin: true
    }
  },
  historyApiFallback: true
}).listen(3000, host, function(err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at '+host+':3000');
});
