/********************************
 * body parser 模块
 *******************************/

const bodyParser = require('koa-bodyparser');
module.exports = app => {
	app.use(bodyParser());
}