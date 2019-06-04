module.exports = {
	vision: '20180702',            //版本号;
	cdnUrl: {                      //cdn的配置
		development: 'http://47.92.196.208',
		beta: 'http://47.92.196.208',
		release: 'http://47.92.196.208'
	},
	api: {
		dataUri: {                           //彩种相关api的配置,需要和非彩种相关api做一个区分
			development: 'http://47.92.196.208:81/api/',
			beta: 'http://47.92.196.208:81/api/',
			release: 'http://47.92.196.208:81/api/'
		},
		imageUri : {
			development: 'http://47.92.196.208',
			beta: 'http://47.92.196.208',
			release: 'http://47.92.196.208'
		}
	},
	getCdn(){
		let nodeEnv = ((process.env.NODE_ENV || 'development'));
		return this.cdnUrl[nodeEnv];
	},
	navigateList: [{
		name_CN: '首页',
		name_HK: '首頁',
		code: 'home',
		path: '/',
		col: 2
	},{
		name_CN: '关于我们',
		name_HK: '關於我們',
		code: 'about',
		path: '/about',
		col: 3
	},{
		name_CN: '所有产品',
		name_HK: '所有產品',
		code: 'product',
		path: '/product',
		col: 3,
		footerPath: '/product'
	},{
		name_CN: '最新产品',
		name_HK: '最新產品',
		code: 'new',
		path: '/new',
		col: 2
	},{
		name_CN: '热门产品',
		name_HK: '熱門產品',
		code: 'hot',
		path: '/hot',
		col: 3
	},{
		name_CN: '联络我们',
		name_HK: '聯絡我們',
		code: 'contact',
		path: '/contact',
		col: 2
	}],
	categoryList: []
}