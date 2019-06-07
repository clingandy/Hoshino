const BaseService = require('./public/base.service');

/**
 * 彩种相关服务
 */
class ApiService extends BaseService {

	/**
	 * 提交联络我们表单
	 */
	async postContact(opt, code) {
		let cacheOpt = { key: `b_contact/Post`, expired:0 };
        let httpOpt = { 
			url: `b_contact/Post?code=${code}`,
			method: 'post',
			headers: {
				'Content-Type': 'application/json-patch+json'
			},
            data: opt
		};
		let result = await this.getData(httpOpt, cacheOpt);

		return result;
	}

	/**
	 * 提交报价查询表单
	 */
	async postQuery(opt, code) {
		let cacheOpt = { key: `b_appointment_consultation/Post`, expired:0 };
        let httpOpt = { 
			url: `b_appointment_consultation/Post?code=${code}`,
			method: 'post',
			headers: {
				'Content-Type': 'application/json-patch+json'
			},
            data: opt
		};
		let result = await this.getData(httpOpt, cacheOpt);

		return result;
	}
}

module.exports = ApiService;