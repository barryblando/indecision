/**
 * WEBPACK DEVELOPMENT
 */

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './src/app.js',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new webpack.NamedModulesPlugin(), // Show Update modules in browser console When HMR updates
    new webpack.HotModuleReplacementPlugin() // Enable HMR for dev config only
  ],
};