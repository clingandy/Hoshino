import HttpRequest from '../lib/http';

class apiService {
	// 提交联系我们form表单
	static async submitContactForm(opt) {
		let result = await HttpRequest.post({
			url: `/submitContact`,
			param: opt
		});
		console.log(result);
		return result;
	}
}

export default apiService;