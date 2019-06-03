const BaseService = require('./public/base.service');

/**
 * 彩种相关服务
 */
class ApiService extends BaseService {

	/**
	 * 提交联络我们表单
	 */
	async postContact(opt) {
		let cacheOpt = { key: `b_contact/Post`, expired:0 };
        let httpOpt = { 
            url: `b_contact/Post` ,
            params: opt
		};
		let result = await this.getData(httpOpt, cacheOpt);

		return result;
	}
}

module.exports = ApiService;