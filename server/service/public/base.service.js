const axios = require('axios');

/**
 * 基础服务
 */
class BaseService {
	constructor() {
		
	}

	/**
	 * 获取相关请求
	 */
	getData(httpOpt, cacheOpt) {
		return getService(httpOpt, cacheOpt, 'daraUri')
	}
}

/**
 * 通用获取服务
 * @param {*} httpOpt 
 * @param {*} urlType 
 */
function getService(httpOpt, cacheOpt, urlType) {
	let nodeEnv = ((process.env.NODE_ENV || 'development'));
        let uriPath,headers;

        if (cacheOpt) {

            let fromCache = __cacheService.get(cacheOpt);

            if (fromCache) {
                return Promise.resolve(fromCache);
            }
        }

        if (nodeEnv == "development") {
            uriPath = __AppConfig.api[urlType].development;
        }else{
            // let _xhost = global._headers['X-HOST'];

			uriPath = ((process.env.VERSION || 'beta') == 'beta' ? __AppConfig.api[urlType].beta : __AppConfig.api[urlType].release);
        }

       	let defaultApiOptions = {
			baseURL: uriPath,
            timeout: 15000
        };

		let options = { ...defaultApiOptions, ...httpOpt };
		options.paramsSerializer = function(params) {
            let obj = [];
            Object.keys(params).forEach((key, idx) => {
                if(params[key] instanceof Array) {
                    params[key].forEach((item, index) => {
                        if(typeof item != 'undefined' && item != null) {
                            obj.push(`${key}[${index}]=${encodeURIComponent(item)}`);
                        }
                    })
                } else {
                    if(typeof params[key] != 'undefined' && params[key] != null) {
                        obj.push(`${key}=${encodeURIComponent(params[key])}`);
                    }
                }
                
            });

            return obj.join('&');
        }
		
		return axios.request(options).then(result => {
            if (cacheOpt && cacheOpt.expired > 0 && result && result.data) {
                __cacheService.set(cacheOpt, result.data);
			} 
			
            console.log(`Api-URL:${options.baseURL}${options.url}--->${JSON.stringify(httpOpt.params)}--------------success`);
            return result.data;
        }).catch(ex => {
            console.error(`Api-URL:${options.baseURL}${options.url}--->${JSON.stringify(httpOpt.params)}---------------error\r\n${ex.stack}`);
            return {
				errorCode: -1,
				msg: ex.stack
			}
        })
}

module.exports = BaseService;