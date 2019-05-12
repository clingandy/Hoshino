const BaseService = require('./public/base.service');

/**
 * 彩种相关服务
 */
class ArticleService extends BaseService {

	/**
	 * 获取资讯列表
	 * @param {*} siteId 
	 * @param {*} pageIndex 
	 * @param {*} pageSize 
	 */
	async getArticleList(siteId, pageIndex = 1, pageSize = 5, categoryId = 0) {
		let cacheOpt = { key: `article/GetPageList/${siteId}/${categoryId}/${pageIndex}/${pageSize}`, expired: (1000 * 60 * 30) };
        let httpOpt = { 
			url: `article/GetPageList` ,
			params : {
				siteId,
				categoryId,
				page: pageIndex,
				limit: pageSize
			}
		};
		let result = await this.getSite(httpOpt, cacheOpt);

		if(result) {
			result.pageIndex = pageIndex;
			result.pageCount = parseInt(result.total / pageSize) + (result.total % pageSize > 0 ? 1 : 0);
			result.list = result.items;
			result.list.forEach(item => {
				item.date = (new Date(item.createTime.replace('T', ' '))).format('yyyy-MM-dd')
			})
		}

		return result;
	}
}

module.exports = ArticleService;