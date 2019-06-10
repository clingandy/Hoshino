/**
 * 路由配置文件
 */
module.exports = {
	routerList : [{
		controller: '/public/api.controller',
		router: [{
			method: 'post',
			path: '/submitContact',
			action: 'submitContactForm'
		},{
			method: 'post',
			path: '/submitQuery',
			action: 'submitQueryForm'
		}]
	},
	{
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
			path : `/product/:pageindex`,
			action: 'product'
		},{
			method: 'get',
			path : `/new`,
			action: 'new'
		},{
			method: 'get',
			path : `/new/:pageindex`,
			action: 'new'
		},{
			method: 'get',
			path : `/hot`,
			action: 'hot'
		},{
			method: 'get',
			path : `/hot/:pageindex`,
			action: 'hot'
		},{
			method: 'get',
			path : `/contact`,
			action: 'contact'
		},{
			method: 'get',
			path : `/submit_query`,
			action: 'submit_query'
		},{
			method: 'get',
			path : `/detail`,
			action: 'detail'
		}]
	}]
}