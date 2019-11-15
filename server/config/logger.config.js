module.exports = {
	loggerConfig: {
		appenders: {
			console: {
				type: 'console'
			},
			dateFile: {
				type: 'dateFile',
				filename: 'logs/log.log',
				pattern: 'yyyy-MM-dd',
				compress: false
			}
		},
		categories: {
			default: {
				appenders: ['console', 'dateFile'],
				level: process.env.NODE_ENV == 'production' ? 'error' : 'debug'
			}
		},
		"pm2": true
	},
	expectionlessConfig : {
		apiKey: process.env.NODE_ENV == 'production' ? '2213123' : '32323',
		serverUrl: process.env.NODE_ENV == 'production' ? 'http://127.0.0.1:8090' : 'http://127.0.0.1:8090'
	}
}