const http = require('http');

module.exports = app => {
	app.on("error", (err, ctx) => {//捕获异常记录错误日志

		console.error(`${ctx.request.href}
MESSAGE: ${err.stack ? err.stack : err}`);
	});

	
	let opts = {}
	const accepts = opts.accepts || ['html', 'text', 'json']
	// env
	const env = opts.env || process.env.NODE_ENV || 'development'
	var cache = opts.cache
	if (cache == null) cache = env !== 'development'

	app.use(async (ctx, next) => {
		try {
			await next()
			if (ctx.response.status === 404 && !ctx.response.body) ctx.throw(404)
		} catch (err) {
			ctx.status = typeof err.status === 'number' ? err.status : 500

			// application
			ctx.app.emit('error', err, ctx)

			// accepted types
			switch (ctx.accepts.apply(ctx, accepts)) {
				case 'text':
					ctx.type = 'text/plain'
					if (env === 'development') ctx.body = err.message
					else if (err.expose) ctx.body = err.message
					else throw err
					break

				case 'json':
					ctx.type = 'application/json'
					// if (env === 'development') ctx.body = { error: err.message, stack: err.stack, originalError: err }
					// else if (err.expose) ctx.body = { error: err.message, originalError: err }
					// else ctx.body = { error: http.STATUS_CODES[ctx.status] }

					ctx.body = {
						state : 2,
						errorCode: -1,
						message: err.expose ? err.message : http.STATUS_CODES[ctx.status]
					}
					break

				case 'html':
					ctx.type = 'text/html';
					return await ctx.render(`404`);
			}
		}
	});
}

