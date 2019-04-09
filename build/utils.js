const Config = require('../config');

/**
 * 获取单页面入口
 */
const getSpaEntry = () => {
	
};
/**
 * 获取多页面入口
 */
const getMuiltyEntry = () => {

};
/**
 * 获取入口函数
 */
export const getEntry = () => {
	return Config.spa 
		? getSpaEntry()
		: getMuiltyEntry();
};