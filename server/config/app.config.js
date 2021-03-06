module.exports = {
	vision: '20190602',            //版本号;
	cdnUrl: {                      //cdn的配置
		development: '',
		beta: '',
		release: ''
	},
	api: {
		dataUri: {
			development: 'http://103.1.14.232/api/',
			beta: 'http://103.1.14.232/api/',
			release: 'http://103.1.14.232/api/'
		},
		imageUri : {
			development: 'http://103.1.14.232',
			beta: 'http://103.1.14.232',
			release: 'http://103.1.14.232'
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
	companyInfo: {
		phone : '+852 3957 6783',
		phone_cn: '+86 198 9657 6596',
		email : 'enquiry@hosinowt.com',
		whatsapp: '+852 9790 4385',
		wechat:'+852 9790 4385'
	}
}