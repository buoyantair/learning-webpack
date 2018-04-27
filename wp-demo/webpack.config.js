const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpakPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve('./src/index.js'),
    print: path.resolve('./src/print.js'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve('./dist'),
  },
  plugins: [
    new CleanWebpakPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management',
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};