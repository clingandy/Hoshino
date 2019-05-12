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
		apiKey: process.env.NODE_ENV == 'production' ? 'egUiSWf2G4enX3UBAZ6yRKEeCQ0qhDfxl2Y7Blky' : 'N5p7ZcOHQIpmb6M8jruCYXzCWkXoMbX6trwatyhp',
		serverUrl: process.env.NODE_ENV == 'production' ? 'http://120.77.146.128:8090' : 'http://log.1398c.com'
	}
}