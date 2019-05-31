'use strict';

const path = require('path');
const argv = require('yargs').argv;
const NODE_ENV = argv.env;

module.exports = {
    title: 'webpack模版开发',
    contextPath: path.join(__dirname, '../'),
    outputFolderName: 'dist',
    enableHotReload: NODE_ENV === 'prod' ? false : true, // 是否开启热加载
    enableCSSSourceMap: NODE_ENV === 'prod' ? false : true, // 是否开启css sourecmap
    spa: true,	// 是否是单页应用
    port: 8099,
    host: 'localhost',
    NODE_ENV, // 环境变量
    // htmlwebpack 动态添加公共配置
    htmlWebpackPluginsConfig: {
        title: 'webpack模版开发',
        template: path.resolve(__dirname, '../src/public/index.ejs'),
        minify: true,
        minifyConfig() {
            return {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            };
        }
    },
    // 是否开启代理
    proxyEnable: false,
    // 代理路由
    proxyUrl: '/',
    // 获取入口路径
    getEntry() {
        return this.spa ? './src/views/index.ts' : './src/views/**/*.ts';
    },
    cssModule: true, //是否开启css module
    build: {
        assetsFolderPath: 'assets/', // 静态文件存储文件夹
        publicPath: '/', // 发布路径
        sourceMap: false, // 是否开启sourceMap, 不建议开启
        sourceMapFolder: 'sourcemaps', // sourceMap文件夹名称，当sourceMap为true时有效
        gzip: false, // gzip压缩
        bundleAnalyze: false, // 代码分析
        gzipEnable: true, //是否开启gzip压缩
        gzipExtensions: ['js', 'css'], //需要压缩的文件后缀
        performanceInfo: true, // 是否开启性能信息
    },
    development: {
        assetsFolderPath: '', // 静态文件存储文件夹
        publicPath: '/', // 发布路径
        sourceMap: true // 开发模式下建议开启sourcemap，可以快速的定位错误代码位置
    }
};
