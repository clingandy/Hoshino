module.exports = {
	vision: '20180702',            //版本号;
	cdnUrl: {                      //cdn的配置
		development: '',
		beta: '',
		release: ''
	},
	api: {
		dataUri: {                           //彩种相关api的配置,需要和非彩种相关api做一个区分
			development: 'http://wap.api.1396c.com/api/',
			beta: 'http://mweb6.api.csj.roycdn.com/api/',
			release: 'http://mweb6.api.csj.roycdn.com/api/'
		},
		imageUri : {
			development: 'http://192.168.10.13:8016/',
			beta: 'http://127.0.0.1:88/',
			release: 'http://127.0.0.1:88/'
		}
	},
	getCdn(){
		let nodeEnv = ((process.env.NODE_ENV || 'development'));
		return this.cdnUrl[nodeEnv];
	},
	navigateList: [{
		name: '首页',
		code: 'home',
		class: 'home',
		path: '/'
	},{
		name: '新闻',
		code: 'news',
		class: 'news',
		path: '/news'
	},{
		name: '产品',
		code: 'product',
		class: 'product',
		path: '/product'
	},{
		name: '服务',
		code: 'service',
		class: 'service',
		path: '/service'
	},{
		name: '服务',
		code: 'service',
		class: 'service',
		path: '/service'
	}]
}