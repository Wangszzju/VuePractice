let path = require('path');

const webpackConfig = {
  entry: ['./src/main.js'],  // 指定分析入口文件
  output: {
    filename: 'bundle.js',  // filename输出文件名
    path: path.resolve(__dirname, 'build')  // 输出目录
  },
  devtool:'cheap-eval-source-map',
  plugins:[],
  module:{
    rules: [
      { test: /\.js$/,
        loader: ['babel-loader'],
        include: path.resolve(__dirname, 'src'),
        exclude: [/node_modules/]
      },{
        test:/\.css$/,
        loaders: ['style-loader','css-loader']

      }
    ]
  }
};

module.exports = webpackConfig;
