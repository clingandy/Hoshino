/**
 * 父级控制器
 */
class BaseController {
	constructor() {
		
	}
	errorMsg(ctx, msg = '') {
		msg = '\r\nurl：' + ctx.request.href + '\r\nMethod：' + ctx.request.method + '\r\npara：' + (ctx.request.body ? JSON.stringify(ctx.request.body) : '') + '\r\nmessage：' + (typeof msg == 'string' ? msg : msg.stack);
		ctx.app.emit('error', msg, ctx)
		ctx.status = 500;
		ctx.body = {
			errorCode: -1,
			message : msg
		}
	}

	successMsg(ctx, msg = '') {
		ctx.status = 200;
		ctx.body = {
			errorCode: 0,
			message : msg
		}
	}
}

module.exports = BaseController;