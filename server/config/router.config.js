/**
 * 路由配置文件
 */
module.exports = {
	routerList : [{
		controller: 'home.controller',
		router: [{
			method: 'get',
			path : `/`
		},{
			method: 'get',
			path : `/about`,
			action: 'about'
		},{
			method: 'get',
			path : `/product`,
			action: 'product'
		},{
			method: 'get',
			path : `/new`,
			action: 'new'
		},{
			method: 'get',
			path : `/hot`,
			action: 'hot'
		},{
			method: 'get',
			path : `/contact`,
			action: 'contact'
		}]
	}]
}