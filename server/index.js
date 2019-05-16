const KOA = require('koa');
const app = new KOA();
const plugins = require('./plugins');
const config = require('./service/public/config.service');
const CacheService = require('./service/public/cache.service');
const LoggerService = require('./service/public/logger.service');
const proxy = require('koa-proxy');


// 日志服务
const loggerService = new LoggerService();

async function start() {
	const port = process.env.HTTP_PORT || 3001;
	// 加载服务到内存
	config.ConfigService();
	// 执行日志服务
	loggerService.init();
	// 加载缓存到内存
	global.__cacheService = new CacheService();

	app.use(async(ctx, next) => {
		global._headers = ctx.header;
		await next();
	});

	// 加载koa中间件
	plugins(app);

	let _url = '';
	let nodeEnv = ((process.env.NODE_ENV || 'development'));
	if (nodeEnv == "development") {
		_url = __AppConfig.api['imageUri'].development;
	} else {
		_url = ((process.env.VERSION || 'beta') == 'beta' ? __AppConfig.api['imageUri'].beta : __AppConfig.api['imageUri'].release);
	}

	app.use(proxy({
		host:  _url, // proxy
		match: /^\/spunsugar\//       
	}));

	//_i18n.__('Welcome')

	console.log(`listen host ${port}`);
	app.listen(port);
}

start();