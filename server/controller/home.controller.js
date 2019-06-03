const BaseController = require('./public/base.controller');
const HomeService = require('../service/home.service');
let homeService = new HomeService();
class HomeController extends BaseController {
    // 首页
    async index(ctx, next) {
        
        await next();
        try {

            // 获取banner
            let bannerList = await homeService.getHomeBanner();
            bannerList = bannerList.Code == 200 ? bannerList.Result : [];
            
            // 获取最新产品列表
            let latestProductList = await homeService.getLatestProducts();
            latestProductList = latestProductList.Code == 200 ? latestProductList.Result : [];

            // 获取热门产品列表
            let hotProductList = await homeService.getHotProducts();
            hotProductList = hotProductList.Code == 200 ? hotProductList.Result : [];

            // 获取视频列表
            let vedioList = await homeService.getVedioList();
            vedioList = vedioList.Code == 200 ? vedioList.Result : [];
            
            let dataObj = {
                navigateList: __AppConfig.navigateList,
                categoryList: __AppConfig.categoryList,
                currentModule: 'home',
                bannerList,
                latestProductList,
                hotProductList,
                vedioList,
                seo: {
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
                categoryList: __AppConfig.categoryList,
                currentModule: 'about',
                seo: {
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
            let [pageindex, pageSize] = [ctx.query.pageindex ? ctx.query.pageindex : 1, 20];
            let lang = ctx.cookies.get("langType")=="zh_CN"? 1:2;
			let productList = await homeService.getAllProducts(pageindex, pageSize, lang); 
			let pageCount = productList.code == 200 ? Math.ceil(productList.total/pageSize) : 1;
			productList = productList.Code == 200 ? productList.Result : [];
            let categoryList = [
                {Name_HK: '衣服', Child: [{Name_HK: '上衣'},{Name_HK: '上衣'},{Name_HK: '上衣'},{Name_HK: '上衣'},{Name_HK: '上衣'}]},
                {Name_HK: '衣服', Child: [{Name_HK: '上衣'},{Name_HK: '上衣'},{Name_HK: '上衣'},{Name_HK: '上衣'},{Name_HK: '上衣'}]},
                {Name_HK: '衣服', Child: [{Name_HK: '上衣'},{Name_HK: '上衣'},{Name_HK: '上衣'},{Name_HK: '上衣'},{Name_HK: '上衣'}]},
                {Name_HK: '衣服', Child: [{Name_HK: '上衣'},{Name_HK: '上衣'},{Name_HK: '上衣'},{Name_HK: '上衣'},{Name_HK: '上衣'}]},
                {Name_HK: '衣服', Child: [{Name_HK: '上衣'},{Name_HK: '上衣'},{Name_HK: '上衣'},{Name_HK: '上衣'},{Name_HK: '上衣'}]}
            ];
            let dataObj = {
                navigateList: __AppConfig.navigateList,
                //categoryList: __AppConfig.categoryList,
                categoryList,
                currentModule: 'product',
                productList,
				pageCount,
				currentPage: pageindex,
                seo: {
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
            let [pageindex, pageSize] = [ctx.query.pageindex ? ctx.query.pageindex : 1, 20];
            let lang = ctx.cookies.get("langType")=="zh_CN"? 1:2;
			let productList = await homeService.getLatestProducts(pageindex, pageSize, lang); 
			let pageCount = productList.code == 200 ? Math.ceil(productList.total/pageSize) : 1;
            productList = productList.Code == 200 ? productList.Result : [];
            
            let dataObj = {
                navigateList: __AppConfig.navigateList,
                categoryList: __AppConfig.categoryList,
				currentModule: 'new',
				productList,
				pageCount,
                currentPage: pageindex,
                showLabel: true,
                seo: {
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
            let [pageindex, pageSize] = [ctx.query.pageindex ? ctx.query.pageindex : 1, 20];
            let lang = ctx.cookies.get("langType")=="zh_CN"? 1:2;
			let productList = await homeService.getHotProducts(pageindex, pageSize, lang); 
			let pageCount = productList.code == 200 ? Math.ceil(productList.total/pageSize) : 1;
            productList = productList.Code == 200 ? productList.Result : [];
            
            let dataObj = {
                navigateList: __AppConfig.navigateList,
                categoryList: __AppConfig.categoryList,
				currentModule: 'hot',
				productList,
				pageCount,
                currentPage: pageindex,
                showLabel: true,
                seo: {
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
	
	// 获取产品详情
	async detail(ctx, next) {
		await next();
        try {
            // 获取推荐产品列表
            let lang = ctx.cookies.get("langType")=="zh_CN"? 1:2;
			let [pageindex, pageSize] = [ctx.query.pageindex ? ctx.query.pageindex : 1, 5];
			let productList = await homeService.getRecommendProducts(pageindex, pageSize, lang); 
			// let pageCount = productList.code == 200 ? Math.ceil(productList.total/pageSize) : 1;
            productList = productList.Code == 200 ? productList.Result : [];
            // 详情
            let detail = await homeService.getProductDetail(ctx.query.id, lang);
            detail = detail.Code == 200 ? detail.Result : [];
            let dataObj = {
                navigateList: __AppConfig.navigateList,
                categoryList: __AppConfig.categoryList,
				currentModule: 'detail',
                productList,
                detail,
                seo: {
                    title: '产品详情',
                    description: '产品详情',
                    keyword: '产品详情'
				},
				arr: [1,2,3,4,5,6,7,8,9]
            };
            return await ctx.render(`product/detail`, dataObj);
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
                categoryList: __AppConfig.categoryList,
                currentModule: 'contact',
                seo: {
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

    // 提交查询
    async submit_query(ctx, next) {
        await next();
        try {
            let dataObj = {
                navigateList: __AppConfig.navigateList,
                categoryList: __AppConfig.categoryList,
                currentModule: 'submit_query',
                seo: {
                    title: '提交查询',
                    description: '提交查询',
                    keyword: '提交查询'
                }
            };
            return await ctx.render(`product/submit_query`, dataObj);
        } catch (ex) {
            ctx.app.emit('error', ex, ctx);
        }
    }
}

module.exports = HomeController;