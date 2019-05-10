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
		path: '/'
	},{
		name: '关于我们',
		code: 'about',
		path: '/about'
	},{
		name: '所有产品',
		code: 'product',
		path: '/product',
		child: [
			{name: '上衣', path: '/'},
			{name: '裤子', path: '/'},
			{name: '裙子', path: '/'},
			{name: '袜子', path: '/'},
			{name: '女装', path: '/'},
			{name: '男装', path: '/'},
			{name: '内衣', path: '/'},
			{name: '内裤', path: '/'},
			{name: '短裙', path: '/'}
		]
	},{
		name: '最新产品',
		code: 'new',
		path: '/new'
	},{
		name: '热门产品',
		code: 'hot',
		path: '/hot'
	},{
		name: '联络我们',
		code: 'contact',
		path: '/contact'
	}]
}