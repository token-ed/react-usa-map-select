'use strict';

const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
  const isDev = options.mode !== 'production';

  return {
    devtool: isDev && 'cheap-module-source-map',
    entry: {
      examples: './examples/src/index'
    },
    output: {
      path: path.join(__dirname, 'docs'),
      filename: isDev ? '[name].js' : '[name].[contenthash].js',
      library: 'react_usa_map_select'
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      modules: [path.resolve('./src'), path.resolve(__dirname, 'node_modules')]
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'examples/src')
      },
      client: {
        overlay: true
      },
      compress: true,
      port: 8888,
      historyApiFallback: {
        index: '/index.html'
      },
      open: {
        target: ['http://localhost:8888/react-usa-map-select']
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'examples/src/index.html'
      }),
      new ForkTsCheckerWebpackPlugin()
    ]
  };
};
