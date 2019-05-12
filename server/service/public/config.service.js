/**
 * 配置服务
 */
class ConfigService {
	constructor() {
		this.refresh();
	}

	/**
	 * 服务刷新
	 */
	refresh() {
		this.loggerConfig = require('../../config/logger.config');
		this.appConfig = require('../../config/app.config');
		global.__LoggerConfig = this.loggerConfig;
		global.__AppConfig = this.appConfig;
	}
	
}

module.exports = {
	ConfigService: () => {
		let _configService =  new ConfigService();
		global.__ConfingService = _configService;
		return _configService;
	}
};