const BaseController = require('./public/base.controller');

class HomeController extends BaseController {
	// 首页
    async index(ctx, next) {
		await next();
		try {
			let dataObj = {
				navigateList: __AppConfig.navigateList,
				currentModule: 'home',
				seo:{
					title: '首页',
					description: '首页',
					keyword: '首页'
				}
			};
			return await ctx.render(`home/index`, dataObj);
		} catch (ex) {
            ctx.app.emit('error', ex, ctx);
        }
	}
	
	// 关于我们
	async about(ctx, next) {
		await next();
		try {
			let dataObj = {
				navigateList: __AppConfig.navigateList,
				currentModule: 'about',
				seo:{
					title: '关于我们',
					description: '关于我们',
					keyword: '关于我们'
				}
			};
			return await ctx.render(`about/index`, dataObj);
		} catch (ex) {
            ctx.app.emit('error', ex, ctx);
        }
	}

	// 所有产品
	async product(ctx, next) {
		await next();
		try {
			let dataObj = {
				navigateList: __AppConfig.navigateList,
				currentModule: 'product',
				seo:{
					title: '所有产品',
					description: '所有产品',
					keyword: '所有产品'
				}
			};
			return await ctx.render(`product/index`, dataObj);
		} catch (ex) {
            ctx.app.emit('error', ex, ctx);
        }
	}

	// 最新产品
	async new(ctx, next) {
		await next();
		try {
			let dataObj = {
				navigateList: __AppConfig.navigateList,
				currentModule: 'new',
				seo:{
					title: '最新产品',
					description: '最新产品',
					keyword: '最新产品'
				}
			};
			return await ctx.render(`product/new`, dataObj);
		} catch (ex) {
            ctx.app.emit('error', ex, ctx);
        }
	}

	// 最热产品
	async hot(ctx, next) {
		await next();
		try {
			let dataObj = {
				navigateList: __AppConfig.navigateList,
				currentModule: 'hot',
				seo:{
					title: '最热产品',
					description: '最热产品',
					keyword: '最热产品'
				}
			};
			return await ctx.render(`product/hot`, dataObj);
		} catch (ex) {
            ctx.app.emit('error', ex, ctx);
        }
	}

	// 联络我们
	async contact(ctx, next) {
		await next();
		try {
			let dataObj = {
				navigateList: __AppConfig.navigateList,
				currentModule: 'contact',
				seo:{
					title: '联络我们',
					description: '联络我们',
					keyword: '联络我们'
				}
			};
			return await ctx.render(`contact/index`, dataObj);
		} catch (ex) {
            ctx.app.emit('error', ex, ctx);
        }
	}
}

module.exports = HomeController;