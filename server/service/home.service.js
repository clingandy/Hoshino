const BaseService = require('./public/base.service');

/**
 * 首页相关服务
 */
class HomeService extends BaseService {

	 ///api/Home/GetValidateCode
	 async getValidataCode() {
		let cacheOpt = { key: `Home/GetValidateCode`, expired:0 };
        let httpOpt = { 
            url: `Home/GetValidateCode` ,
            params: {}
		};
		let result = await this.getData(httpOpt, cacheOpt);

		return result;
	}
	/**
	 * 获取轮播图
	 */
	async getHomeBanner() {
		let cacheOpt = { key: `b_banner_resources/GetIndexList`, expired:3000 };
        let httpOpt = { 
            url: `b_banner_resources/GetIndexList` ,
            params: {}
		};
		let result = await this.getData(httpOpt, cacheOpt);

		return result;
	}

	/** 获取vedio列表*/
	async getVedioList() {
		let cacheOpt = { key: `b_video_resources/GetIndexList`, expired:3000 };
        let httpOpt = { 
            url: `b_video_resources/GetIndexList` ,
            params: {}
		};
		let result = await this.getData(httpOpt, cacheOpt);

		return result;
	}

	/** 
	 * 获取全部产品列表
	*/
	async getAllProducts(pageindex = 1, pagesize = 20, lang = 2, product_name = "", categoryID = -1) {
		let cacheOpt = { key: `b_product/GetProductList`, expired:3000 };
        let httpOpt = { 
            url: `b_product/GetProductList` ,
            params: {
				pageindex,
				pagesize,
				lang,
				categoryID,
				product_name
			}
		};
		let result = await this.getData(httpOpt, cacheOpt);
		return result;
	}

	/** 
	 * 获取最新产品列表
	*/
	async getLatestProducts(pageindex = 1, pagesize = 25, lang = 2) {
		let cacheOpt = { key: `b_product/GetNewProductList`, expired:3000 };
        let httpOpt = { 
            url: `b_product/GetNewProductList` ,
            params: {
				pageindex,
				pagesize,
				lang
			}
		};
		let result = await this.getData(httpOpt, cacheOpt);

		return result;
	}

	/*获取热门产品列表*/
	async getHotProducts(pageindex = 1, pagesize = 20, lang = 2) {

		let cacheOpt = { key: `b_product/GetHotProductList`, expired:3000 };
        let httpOpt = { 
            url: `b_product/GetHotProductList` ,
            params: {
				pageindex,
				pagesize,
				lang
			}
		};
		let result = await this.getData(httpOpt, cacheOpt);

		return result;
	}


	/** 获取推荐产品列表*/
	async getRecommendProducts(pageindex = 1, pagesize = 20, lang = 2) {

		let cacheOpt = { key: `b_product/GetRecommendProductList`, expired:3000 };
        let httpOpt = { 
            url: `b_product/GetRecommendProductList` ,
			params: {
				pageindex,
				pagesize,
				lang
			}
		};
		let result = await this.getData(httpOpt, cacheOpt);

		return result;
	}

	/** 获取产品详情*/
	async getProductDetail(product_id, lang = 2) {

		let cacheOpt = { key: `b_product/Get`, expired:3000 };
        let httpOpt = { 
            url: `b_product/Get` ,
			params: {
				product_id,
				lang
			}
		};
		let result = await this.getData(httpOpt, cacheOpt);

		return result;
	}
}

module.exports = HomeService;