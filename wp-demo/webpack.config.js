const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpakPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: "production",
  entry: {
    app: path.resolve('./src/index.js'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve('./dist'),
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpakPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
    new webpack.NamedChunksPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};