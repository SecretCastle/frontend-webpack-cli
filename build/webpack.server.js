/* eslint-disable no-console */
const express = require('express');
const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const app = express();
const env = process.env.NODE_ENV;

// 加载webpack配置文件
const config = require('./webpack.dev');
// 如果环境是test，则webpack的mode为none
if (env === 'test') {
	config.mode = 'none';
}

const compiler = webpack(config);
app.use(require('webpack-hot-middleware')(compiler));
app.use(WebpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath,
	quiet: false,
	stats: {
		colors: true,
		chunks: false
	}
}));

app.listen(3000, () => {
	console.log('server run at http://localhost:3000');
});
