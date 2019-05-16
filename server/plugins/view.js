/********************************
 * art template 模块
 *******************************/
const debug = require('debug')('art-template');
const template = require('art-template');
const path = require('path');
const i18n_module = require('i18n-nodejs');

module.exports = app => {
	if (app.context.render) {
        return;
    }

    let settings = {
		root: path.join(__dirname, '../view'),
		extname: '.art',
		debug: process.env.NODE_ENV !== 'production',
		writeResp: true,
		layout: true,
		layoutName: 'layout/master',
		i18n: [],
	}

	// 添加helper;
	require('../helpers')(template);

	// 存储到全局调用
	global.artTemplate = template;
	
	// 获取多语言配置
	function getLang(ctx){
		var langType = ctx.cookies.get("langType");
		if(!langType){
			ctx.cookies.set("langType","zh_TW");
			langType = "zh_TW"
		}
		if(settings.i18n[langType] ==null){
			// 多语言
			var langConfig = {
				"lang": langType,
				"langFile": path.join(__dirname, '../config/lang.json')//relative path to index.js file of i18n-nodejs module
			}
			settings.i18n[langType] = new i18n_module(langConfig.lang, langConfig.langFile);
		}
		return settings.i18n[langType];
	}

    function render(filename, data) {
		debug(`render: ${filename}`);
		settings.filename = filename;
		const render = template.compile(settings);
		let _tmpContent = render(data);
		if(settings.layout) {
			let layoutRender = template.compile({
				root: path.join(__dirname, '../view'),
				filename: settings.layoutName,
				extname: '.html'
			});
			data.cdnUrl = data.cdnUrl ? data.cdnUrl : '';
			let _context = Object.assign(data, {content: _tmpContent});
			_tmpContent = layoutRender(_context);
		}
        return _tmpContent;
    }

    app.context.render = async function (view, _context) {
		const ctx = this;
		const context = Object.assign({}, ctx.state, _context);
		context.i18n = getLang(ctx);
        const html = render(view, context);
        const writeResp = context.writeResp === false ? false : (context.writeResp || settings.writeResp);

        if (writeResp) {
            ctx.type = 'html';
            ctx.body = html;
        } else {
            return html;
        }

	};
	

	  
}