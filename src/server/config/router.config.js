/**
 * 路由配置文件
 */
module.exports = {
	routerList : [{
		controller: 'home.controller',
		router: [{
			method: 'get',
			path : `/`
		}]
	}]
}