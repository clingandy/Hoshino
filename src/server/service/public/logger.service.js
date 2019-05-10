/**
 * 日志服务
 */
class LoggerService {
	constructor() {
		let path = require('path');
		let logConfig = require(path.resolve('./server/config/logger.config'));
		this.loggerConfig = logConfig.loggerConfig;
		this.expectionlessConfig = logConfig.expectionlessConfig;
		this.log4js = require('log4js');
		this.log4js.configure(this.loggerConfig);
		this.logger = this.log4js.getLogger('console');

		// 远程日志推送
		let exceptionless = require('exceptionless');
		this.client = new exceptionless.ExceptionlessClient({
			apiKey: this.expectionlessConfig.apiKey,
			serverUrl: this.expectionlessConfig.serverUrl
		});
	}

	/***
	 * 初始化
	 */
	init() {
		console.debug = this.logger.debug.bind(this.logger);
		console.log = this.logger.info.bind(this.logger);
		console.info = this.logger.info.bind(this.logger);
		console.warn = this.logger.warn.bind(this.logger);

		console.error = (err => {
			return (...e) => {
				if(!e) return;
				try {
					let errMsg = [];

					e.forEach(item => {
						if(item) {
							if(typeof item === 'string') {
								errMsg.push(item);
							} else if(item.stack) {
								errMsg.push(item.stack);
							} else if(item.message) {
								errMsg.push(item.message);
							}
						}
					});
					
					let _tmpErr = errMsg.join('\r\n');
					this.logger.error(_tmpErr);
	
					// 发送远程日志
					if(process.env.LOGGER_IS_SEND) {
						this.client.submitLog('color_world.logger', this._wrapMsg(_tmpErr, 'Error'), 'Error');
					}
				} catch (ex) {
					console.warn(`记录日志错误:${ex.stack}`);
				}
			}
		})(console.error);
	}

	/**
	 * 日志格式
	 * @param {*} msg 
	 * @param {*} level 
	 */
	_wrapMsg(msg, level) {

        let log = {
            date: new Date(),
            level,
            msg,
            exception: msg
            //QUERY_STRING: request.query,
        };

        const logText = `Project: csj_jc_M\r\nTime: ${log.date}\r\nLevel: ${log.level}\r\nException: ${log.exception}`;

        return logText;
    }
}

module.exports = LoggerService;