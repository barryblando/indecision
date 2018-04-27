const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const path = require('path');

const config = require('./webpack.config.dev.js');
const options = {
  contentBase: path.resolve(__dirname, 'public'),
  hot: true,
  host: 'localhost',
  open: true,
  openPage: path.resolve(__dirname, 'public'),
  compress: true
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('--> [DevServer] [Listening] on port: 5000');
});