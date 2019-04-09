'use strict';
/**
 * webpack 测试环境
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const path = require('path');

const devConfig = merge(baseConfig, {
	mode: 'development',
	entry: ['webpack-hot-middleware/client?reload=true&noInfo=true', './src/index.js'],
	// 功能：当某块打包到一个文件时，如果一个子文件中存在错误，可以精准的定位到错误的位置
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'dist')
	},
	plugins: [
		// webpack进度条
		new webpack.ProgressPlugin(),
		// dev hot reload
		new webpack.HotModuleReplacementPlugin(),
		// 当开启 HMR 的时候使用该插件会显示模块的相对路径，建议用于开发环境。
		new webpack.NamedModulesPlugin()
	]
});

module.exports = devConfig;
