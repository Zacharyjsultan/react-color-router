const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: ['./src/index.js'],
  output: {
    // Necessary for HTML 5 routes along with historyApiFallback.
    publicPath: '/',
    clean: true,
    filename: 'app.bundle.js',
    path: __dirname + '/build',
  },
  devServer: {
    historyApiFallback: true,
    client: {
      overlay: {
        warnings: false,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(svg|png)$/,
        use: 'url-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      useState: ['react', 'useState'],
    }),
    new CopyPlugin({
      patterns: [{ from: 'public', to: '.' }],
    }),
  ],
};
