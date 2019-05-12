window.Promise = require('es6-promise').Promise;

// 私有方法
function getHttp(option) {
	var promise = new Promise(function(resolve, reject) {
		var client = createXMLHttp();

		let _temp = option.url.split('?');

		let url = _temp[0];
		let param = _temp.length >= 2 ? _temp[1] : '';
		let _tmpPara = [];

		if(param) {
			param.split('&').forEach(i => {
				let _val = i.split('=')[1];
				_tmpPara.push(`${i.split('=')[0]}=${encodeURIComponent(_val)}`);
			});

			url += `?${_tmpPara.join('&')}`;
		}

		// 是否创建成功
		if (!client) reject(new Error('create XMLHttpRequest failed!please check you browser!'));

		client.open(option.Method, '/api' + url);
		if(option.form) {
			client.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		} else {
			client.setRequestHeader('Accept', 'application/json');
			client.setRequestHeader('Content-Type', 'application/json');
		}
		
		client.responseType = 'json';

		if(option.contentType) {
			client.setRequestHeader('Accept', option.contentType);
			client.setRequestHeader('Content-Type', option.contentType);
			client.responseType = option.responseType
		}
		
		
		client.timeout = 30000;
		client.onreadystatechange = handler;
		
		client.send(option.para);
		client.ontimeout = function() {
			resolve({
				errorCode : -1,
				msg : '连接超时'
			});
		};

		/**
		 * [handler handler处理程序]
		 * @return {[type]} [description]
		 */
		function handler() {

			if (this.readyState !== 4) {
				return;
			}
			if (this.status === 200) {
				resolve(typeof this.response != 'object' ? JSON.parse(this.response) : this.response);
			} else if(this.status !== 0) {
				resolve({
					state: 2,
					errorCode : this.status,
					message : this.response.message || '系统异常'
				});
			}
		}

		/**
		 * [CreateXMLHttp 创建Ajax对象]
		 */
		function createXMLHttp() {

			let xmlhttp;

			try {
				xmlhttp = new XMLHttpRequest(); //尝试创建 XMLHttpRequest 对象，除 IE 外的浏览器都支持这个方法。
			} catch (e) {
				try {
					xmlhttp = ActiveXobject('Msxml12.XMLHTTP'); //使用较新版本的 IE 创建 IE 兼容的对象（Msxml2.XMLHTTP）。
				} catch (ex) {
					try {
						xmlhttp = ActiveXobject('Microsoft.XMLHTTP'); //使用较老版本的 IE 创建 IE 兼容的对象（Microsoft.XMLHTTP）。
					} catch (failed) {
						xmlhttp = false; //如果失败了还保持false
					}
				}
			}
			return xmlhttp;
		}

	});

	return promise;
}

/*global ActiveXobject*/
class HttpRequest {
	static getPage(option) {
		option = option || {};
		option.contentType = 'text/html;';
		option.responseType = 'html';
		option.Method = 'GET';
		return getHttp(option);
	}

	static get(option) {
		option = option || {};
		option.Method = 'GET';
		return getHttp(option);
	}

	static post(option) {
		option = option || {};
		option.Method = 'POST';
		return getHttp(option);
	}

	static put(option) {
		option = option || {};
		option.Method = 'PUT';
		return getHttp(option);
	}
	static patch(option){
		option = option || {};
		option.Method = 'PATCH';
		return getHttp(option);
	}

	static delete(option) {
		option = option || {};
		option.Method = 'DELETE';
		return getHttp(option);
	}

	static postForm(option) {
		option = option || {};
		option.Method = 'POST';
		option.form = true;
		return getHttp(option);
	}


}

export default HttpRequest;