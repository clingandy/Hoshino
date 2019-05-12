const Router = require('koa-router');
const sendfile = require('koa-send');
const path = require('path');
const fs = require('fs');
const routerConfig = require('../config/router.config');
const _ = new Router();
/**
 * 路由加载
 * @param {*} app 
 */
module.exports = app => {
	routerConfig.routerList.forEach(routerItem => {
		let _controller = require(`../controller/${routerItem.controller}`);
		let _baseController = new _controller();
		routerItem.router.forEach(router => {
			_[router.method](router.path, router.action ? _baseController[router.action].bind(_baseController) : _baseController['index'].bind(_baseController))
		});

	});

	// 静态资源转发
	_.get('*.(js|css|png|jpg|jepg|gif|ico|xml|xsl|txt|mp3|zip|htc)', async (ctx, next) => {
		await next();
		if(!ctx.path.includes('spunsugar')) {
			let lastPoint = ctx.path.lastIndexOf('.');
			let resPath = path.resolve(__dirname, `../../client/dist/${ctx.path}`);
			ctx.type = ctx.path.substr(lastPoint + 1);
			if(fs.existsSync(resPath)) {
				return ctx.body = fs.createReadStream(resPath);
			} else {
				ctx.status = 404;
				return ctx.body = '';
			}
		}
	});

	app
	.use(_.routes())
	.use(_.allowedMethods());
};