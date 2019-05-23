const BaseService = require('./public/base.service');

/**
 * 首页相关服务
 */
class HomeService extends BaseService {

	/**
	 * 获取轮播图
	 */
	async getHomeBanner() {
		let cacheOpt = { key: `b_banner_resources/GetIndexList`, expired:0 };
        let httpOpt = { 
            url: `b_banner_resources/GetIndexList` ,
            params: {}
		};
		let result = await this.getData(httpOpt, cacheOpt);

		return result;
	}

	/** 
	 * 获取最新产品列表
	*/
	async getLatestProducts(pageindex = 1, pagesize = 12) {
		let cacheOpt = { key: `b_product/GetNewProductList`, expired:0 };
        let httpOpt = { 
            url: `b_product/GetNewProductList` ,
            params: {
				pageindex,
				pagesize
			}
		};
		let result = await this.getData(httpOpt, cacheOpt);

		return result;
	}

	/*获取热门产品列表*/
	async getHotProducts(pageindex = 1, pagesize = 12) {

		let cacheOpt = { key: `b_product/GetHotProductList`, expired:0 };
        let httpOpt = { 
            url: `b_product/GetHotProductList` ,
            params: {
				pageindex,
				pagesize
			}
		};
		let result = await this.getData(httpOpt, cacheOpt);

		return result;
	}


	/** 获取推荐产品列表*/

	async getRecommendProducts(pageindex = 1, pagesize = 12) {

		let cacheOpt = { key: `b_product/GetRecommendProductList`, expired:0 };
        let httpOpt = { 
            url: `b_product/GetRecommendProductList` ,
			params: {
				pageindex,
				pagesize
			}
		};
		let result = await this.getData(httpOpt, cacheOpt);

		return result;
	}

	
	/** 获取vedio列表*/
	async getVedioList() {
		let cacheOpt = { key: `b_video_resources/GetIndexList`, expired:0 };
        let httpOpt = { 
            url: `b_video_resources/GetIndexList` ,
            params: {}
		};
		let result = await this.getData(httpOpt, cacheOpt);

		return result;
	}
}

module.exports = HomeService;