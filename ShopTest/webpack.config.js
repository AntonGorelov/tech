var webpack           = require('webpack');
// Позволяет генерировать html файл с уже подключенным скриптом
var HtmlWebpackPlugin = require('html-webpack-plugin');
// Копирует отдельные файлы или целые каталоги в каталог сборки
var CopyWebpackPlugin = require('copy-webpack-plugin');
// Преобразует css код и создает отдельные файлы
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers           = require('./helpers');

module.exports = {
  // Точка входа
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor':    './src/vendor.scss',
    'vendortype':'./src/vendor.ts',
    'styles':    './src/styles.css',
    'app':       './src/main.ts'
  },
  // Имя файла будет прежним, т.к. задано [name].js
  output: {
    path:__dirname+'/dist/js',
    filename:'[name].js'
  },
  // Указываем расширения, с которыми будет работать webpack
  resolve: {
    extensions: ['.ts', '.js']
  },

  devServer: {
    historyApiFallback: true,
    compress:           true
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        // Добавляем хеш, чтобы браузер не сохранял в кеш, т.к. меняется адрес
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        // Создание и подключение css выполняет ETP, т.е. заменяет style-loader. В случае ошибки применен fallback.
        // publicPath чтобы пути к картинкам для фоновых изображений, указанные в css, были правильными после сборки.
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({ publicPath: '../',
                                            fallback: 'style-loader',
                                            use: ['css-loader','sass-loader'] })
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({ publicPath: '../',
                                            fallback: 'style-loader',
                                            use: ['css-loader','less-loader'] })
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader',
                                            use: ['css-loader'] })
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw-loader'
      },
      {
        //test: /\.scss$/,
        //loaders: 'raw!postcss!sass'
      }
    ]
  },

  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('./src'), // location of your src
      {} // a map of your routes
    ),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new CopyWebpackPlugin([
      {from: './src/index.html', to: './dist/index.html'}
    ]),

    new ExtractTextPlugin('styles.css')
  ]
};
