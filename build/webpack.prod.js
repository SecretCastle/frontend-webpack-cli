'use strict';

/**
 * 生产环境
 */
const webpack = require('webpack');
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const Config = require('../config');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpackConfig = merge(baseConfig, {
	mode: 'production',
	entry: {
		main: './src/index.js'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),		
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

// 是否开启bundle分析
if (Config.build.bundleAnalyze) {
	webpackConfig.plugins.push(
		new WebpackBundleAnalyzer({
			analyzerMode: 'static'
		}),
	);
}

// 是否开启sourceMap，建议不开启
if (Config.build.sourceMap) {
	// sourcemap
	webpackConfig.plugins.push(
		new webpack.SourceMapDevToolPlugin({
			filename: `${Config.build.sourceMapFolder}/[file].map`
		}),
	);
}

module.exports = webpackConfig;
