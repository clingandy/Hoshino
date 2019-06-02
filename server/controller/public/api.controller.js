
/**
 * 	暴露给前端的通用接口controller
 */
class APIController {
    constructor() {}

    /**
     * 获取文章列表
     * @param {*} ctx 
     * @param {*} next 
     */
    async getArticleList(ctx, next) {

		ctx.body = {
			errorCode: 1,
			result: ''
		};

        await next();
    }

    async submitContactForm(ctx, next) {
        let obj = ctx.request.body;
    }
}

module.exports = APIController;