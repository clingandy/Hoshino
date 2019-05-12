const BaseService = require('./public/base.service');

/**
 * 首页相关服务
 */
class HomeService extends BaseService {

	/** 获取所有分类*/
	async getAllCategorys() {
		let cacheOpt = { key: `b_category/GetAllCategory`, expired:0 };
        let httpOpt = { 
            url: `b_category/GetAllCategory` ,
            params: {}
		};
		let result = await this.getData(httpOpt, cacheOpt);

		return result;
	}

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
	async getLatestProducts() {
		let cacheOpt = { key: `b_product/GetNewProductList`, expired:0 };
        let httpOpt = { 
            url: `b_product/GetNewProductList` ,
            params: {}
		};
		let result = await this.getData(httpOpt, cacheOpt);

		return result;
	}

	/*获取热门产品列表*/
	async getHotProducts() {

		let cacheOpt = { key: `b_product/GetHotProductList`, expired:0 };
        let httpOpt = { 
            url: `b_product/GetHotProductList` ,
            params: {}
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