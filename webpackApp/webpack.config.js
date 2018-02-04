const path = require('path');
const webpack = require('webpack');
const WebpackOnBuildPlugin = require('on-build-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

    // Точка входа
    entry: {
        'my-app': './src/main.ts',
        'main': './main.js'
    },
    // Имя файла будет прежним, т.к. задано [name].js
    output:  {
        filename: './dist/[name].js'
    },
    // Указываем расширения, с которыми будет работать webpack
    resolve: {
        extensions: ['.ts', '.js', '.json', '.html', '.less', '.svg']
    },
    // Определяем loaders. ts -> js, html -> js, css -> js bundle
    module: {
        rules: [
              {
                  test: /\.ts$/,
                  use: [
                      {
                          loader: 'awesome-typescript-loader?'
                      },
                      {
                          loader: 'angular2-template-loader'
                      }
                  ]
              },
              {
                  test: /\.html$/, loader: 'raw-loader',
                  exclude: /node_modules\/(?!(ng2-.+))/
              },
              {
                  test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                  loader: "url-loader?name=[name].[ext]&limit=10000&useRelativePath=true"
              },
              {
                  test: /\.css$/,
                  use: [ {loader: "css-loader"} ]
              }]
            }
};
