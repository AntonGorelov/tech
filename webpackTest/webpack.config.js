module.exports = {
  // входная точка нашего приложения
  entry : './main.js',
  output: {
    // результат работы Webpack будет в файле с таким именем
    filename: 'bundle.js'
  },
  module: {
    loaders: [
           {
             test   : /\.js$/,
             exclude: /node_modules/,
             loader : 'babel-loader',
             query  : {
               presets: [ 'es2015' ]
             }
           },
           {
             test   : /\.css$/,
             exclude: /node_modules/,
             loader : 'style-loader!css-loader'
           }
    ]
  }
};
