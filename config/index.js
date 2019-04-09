const path = require('path');
module.exports = {
	contextPath: path.join(__dirname, '../'),
	outputFolderName: 'dist',
	enableHotReload: true, // 是否开启热加载
	spa: true,	// 是否是单页应用
	port: 8099,
	host: 'localhost',
	build: {
		publicPath: '/',
		sourceMap: false, // 是否开启sourceMap
		sourceMapFolder: 'sourcemaps', // sourceMap文件夹名称，当sourceMap为true时有效
		gzip: false, // gzip压缩
		bundleAnalyze: false, // 代码分析
	},
	development: {
		publicPath: '/',
		sourceMap: true
	}
};
