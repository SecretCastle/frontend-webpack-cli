const Config = require('../config');
const glob = require('glob');

/**
 * 获取单页面入口
 */
const getSpaEntry = () => {
	return Config.enableHotReload 
		? ['webpack-hot-middleware/client?reload=true', Config.getEntry()]
		: Config.getEntry();
};
/**
 * 获取多页面入口
 */
const getMuiltyEntry = () => {
	const map = {};
	const entryFiles = glob.sync(Config.getEntry(), { matchBase: true });
	for(let i = 0; i < entryFiles.length; i++) {
		const file = entryFiles[i];
		const fileName = file.substring(file.indexOf('views/') + 6, file.lastIndexOf('/'));
		map[fileName] = Config.enableHotReload ? ['webpack-hot-middleware/client?reload=true', file] : file;
	}
	return map;
};
/**
 * 获取入口函数
 */
module.exports.getEntry = () => {
	return Config.spa 
		? getSpaEntry()
		: getMuiltyEntry();
};
