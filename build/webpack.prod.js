'use strict';
const webpack = require('webpack');
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseConfig, {
	mode: 'production',
	entry: {
		main: './src/index.js'
	},
	// devtool: 'source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		// sourcemap
		// new webpack.SourceMapDevToolPlugin({
		// 	filename: 'sourcemap/[file].map'
		// }),
		new WebpackBundleAnalyzer(),
		// 该插件会根据模块的相对路径生成一个四位数的hash作为模块id, 保证vendor的hash不会变
		new webpack.HashedModuleIdsPlugin({
			hashFunction: 'sha256',
			hashDigest: 'hex',
			hashDigestLength: 20
		})
	],
	optimization: {
		minimize: true,
		splitChunks: {
			chunks: 'all',
			minSize: 10000, // 最小10kb的chunks
			maxSize: 0,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '-',
			name: true,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		}
	}
});
