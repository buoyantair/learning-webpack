const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpakPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: "production",
  entry: {
    app: path.resolve('./src/index.js'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
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