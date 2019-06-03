
const ApiService = require('../../service/api.service');
/**
 * 	暴露给前端的通用接口controller
 */
class APIController {
    constructor() {}

    async submitContactForm(ctx, next) {
        let apiService = new ApiService();
        let obj = ctx.request.body;
        let result = await apiService.postContact(obj);
        return ctx.body = {
			errorCode: 1,
			result
		};
    }
}

module.exports = APIController;