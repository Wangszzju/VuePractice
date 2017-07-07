const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev');
const path = require('path');
const port = 8080;

config.entry.unshift(
    `webpack-dev-server/client?http://localhost:${port}/`,
    'webpack/hot/dev-server'
);

config.plugins.push(new webpack.HotModuleReplacementPlugin());  // 启用HMR

// 编译器实例，可手动执行，有run和webpack的方法
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  contentBase: path.join(__dirname),
  publicPath:`https://localhost:${port}/dist/`,  // 将用于确定应该从哪里提供 bundle，并且此选项优先。
  hot: true,
  stats:{
    colors: true
  }
});

server.listen(port, function() {
	console.log(`Starting server on http://localhost:${port}`);
});

// compiler.watch({
//   aggreegateTimeout:1000
// },(err, stats) => {
//   if(err){
//     console.error(err);
//   }
//   console.log(stats.toString({
//     chunks: false,
//     colors: true
//   }));
// })
