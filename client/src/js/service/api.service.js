import HttpRequest from '../lib/http';

class ApiService {
	// 提交联系我们form表单
	static async submitContactForm(opt) {
		let result = await HttpRequest.post({
			url: `/submitContact?r=${Math.random()}`,
			param: opt
		});
		return result;
	}
}

export default ApiService;