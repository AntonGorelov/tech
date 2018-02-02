var path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // плагин минимизации
var HtmlWebpackPlugin = require('html-webpack-plugin');  // плагин автоматически внедрить создаваемые сборки js или css в файл html
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // плагин извлекает css и добавляет в их название хеш-значение
module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'app': './src/main.ts',

        'bootstrapcss': './src/bootstrap/css/bootstrap.css',
        'bootstrapjs': './src/bootstrap/js/bootstrap.js',
        'maincss': './src/css/main.css'
      },
   output:{
       //path: path.resolve(__dirname, 'dist'),     // путь к каталогу выходных файлов - папка public
       //publicPath: '/',
       //filename: '[name].[hash].js'
       path: __dirname,
       filename: 'bundle.js'
   },
   watch: false,
   devServer: {
    historyApiFallback: true,
  },
   resolve: {
    extensions: ['.ts', '.js']
  },
   module:{
       rules:[   //загрузчик для ts
           {
               test: /\.ts$/, // определяем тип файлов
               use: [
                {
                    loader: 'awesome-typescript-loader',
                    options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
                } ,
                'angular2-template-loader'
               ]
            },
            {
              test: /\.html$/,
              loader: 'html-loader'
            },
            {
              test: /\.(png|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/,
              loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
              test: /\.css$/,
              exclude: path.resolve(__dirname, 'src', 'src/bootstrap'),
              use: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader"})
            },
            {
              test: /\.css$/,
              include: path.resolve(__dirname, 'src/app'),
              loader: 'raw-loader'
            }
       ]
   },
   plugins: [
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core/,
        path.resolve(__dirname, 'src'), // каталог с исходными файлами
      {} // карта маршрутов
    ),
    new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new UglifyJSPlugin(),
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false
      }
    })
  ]
};
