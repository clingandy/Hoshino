import {HttpRequest} from '../lib/http';

class ApiService {
	// 提交联系我们form表单
	static async submitContactForm(opt, code) {
		return HttpRequest.post({
			url: `/submitContact?code=${code}&r=${Math.random()}`,
			para: JSON.stringify(opt)
		});
	}

	// 提交联系我们form表单
	static async submitQueryForm(opt, code) {
		return HttpRequest.post({
			url: `/submitQuery?code=${code}&r=${Math.random()}`,
			para: JSON.stringify(opt)
		});
	}
}

export default ApiService;