const BaseService = require('./public/base.service');

/**
 * 首页相关服务
 */
class HomeService extends BaseService {

	/**
	 * 获取轮播图
	 */
	async getHomeBanner() {
		let cacheOpt = { key: `b_product/GetNewProductList`, expired:0 };
        let httpOpt = { 
            url: `b_product/GetNewProductList` ,
            params: {}
		};
		let result = await this.getData(httpOpt, cacheOpt);

		return result;
	}
}

module.exports = HomeService;