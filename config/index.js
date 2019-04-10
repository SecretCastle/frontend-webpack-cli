'use strict';

const path = require('path');
const argv = require('yargs').argv;
const NODE_ENV = argv.env;

module.exports = {
	contextPath: path.join(__dirname, '../'),
	outputFolderName: 'dist',
	enableHotReload: NODE_ENV === 'prod' ? false : true, // 是否开启热加载
	spa: true,	// 是否是单页应用
	port: 8099,
	host: 'localhost',
	// 获取入口路径
	getEntry() {
		return this.spa ? './src/views/index.js' : './src/views/**/*.js';
	},
	build: {
		assetsFolderPath: 'assets', // 静态文件存储文件夹
		publicPath: '/', // 发布路径
		sourceMap: false, // 是否开启sourceMap, 不建议开启
		sourceMapFolder: 'sourcemaps', // sourceMap文件夹名称，当sourceMap为true时有效
		gzip: false, // gzip压缩
		bundleAnalyze: false, // 代码分析
	},
	development: {
		assetsFolderPath: 'assets', // 静态文件存储文件夹
		publicPath: '/', // 发布路径
		sourceMap: true // 开发模式下建议开启sourcemap，可以快速的定位错误代码位置
	}
};
