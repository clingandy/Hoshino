const BaseController = require('./public/base.controller');


class HomeController extends BaseController {
    async index(ctx, next) {
		await next();
		try {
			let dataObj = {
				cdnUrl: ''
			};
			return await ctx.render(`home/index`, dataObj);
		} catch (ex) {
            ctx.app.emit('error', ex, ctx);
        }
    }
}

module.exports = HomeController;