import HttpRequest from '../lib/http';

class ApiService {
	// 提交联系我们form表单
	static async submitContactForm(opt, code) {
		let result = await HttpRequest.post({
			url: `/submitContact?code=${code}&r=${Math.random()}`,
			param: opt
		});
		return result;
	}

	// 提交联系我们form表单
	static async submitQueryForm(opt, code) {
		let result = await HttpRequest.post({
			url: `/submitQuery?code=${code}&r=${Math.random()}`,
			param: opt
		});
		return result;
	}
}

export default ApiService;