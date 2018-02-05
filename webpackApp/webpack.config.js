var path = require('path');
var webpack = require('webpack');
var WebpackOnBuildPlugin = require('on-build-webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  // Точка входа
  entry: {
    'polyfills': './src/polyfills.ts',
    'app': './src/main.ts',
    'style.bundle': './src/css/main.css'
  },

  // Имя файла будет прежним, т.к. задано [name].js
  output:  {
    filename: './dist/[name].js'
  },

  devServer: {
    historyApiFallback: true,
    compress: true,
  },

  // Указываем расширения, с которыми будет работать webpack
  resolve: {
    extensions: ['.ts', '.js', '.json', '.less', '.svg']
  },

  // Определяем loaders. ts -> js, html -> js, css -> js bundle
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader?',
            options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
          },
          'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        loader: 'raw-loader',
        //exclude: /node_modules\/(?!(ng2-.+))/
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?name=[name].[ext]&limit=10000&useRelativePath=true"
      },
      {
        test: /\.css$/,
        loader:   ['style-loader', 'css-loader']
      }]
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: './src/index.html', to: './dist/index.html'}
    ]),
    new HTMLWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
