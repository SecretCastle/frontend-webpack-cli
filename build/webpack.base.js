const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugins = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const Config = require('../config');

const webpackBasicConfig = {
	context: Config.contextPath,
	output: {
		filename: '[name].[hash].bundle.js',
		chunkFilename: '[name].[hash].bundle.js',
		path: path.resolve(__dirname, '..', Config.outputFolderName),
		publicPath: Config.NODE_ENV === 'prod' ? Config.build.publicPath : Config.development.publicPath
	},
	plugins: [
		new CleanWebpackPlugins({
			cleanOnceBeforeBuildPatterns: path.join(process.cwd(), `${Config.outputFolderName}/**/*`)
		}),
		// manifest
		new ManifestPlugin(),	
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: [
					'babel-loader'
				]
			},
			{
				test: /\.css$/,
				loader: [
					'style-loader',
					'css-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.(jpg|png|gif|svg|jpeg)/,
				loader: [
					'file-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				loader: [
					'file-loader'
				]
			}
		]
	}
};

module.exports = webpackBasicConfig;
