module.exports = (Template) => {
	/** 添加公共方法 */
	require('./lib/Date');
	require('./lib/String');
	
	// 添加公共helper
	require('./common')(Template);
	
	/** 添加拓展 require('./lottery')(Template); */
	
}
