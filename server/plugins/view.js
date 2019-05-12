/********************************
 * art template 模块
 *******************************/
const debug = require('debug')('art-template');
const template = require('art-template');
const path = require('path');

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
		layoutName: 'layout/master'
	}

	// 添加helper;
	require('../helpers')(template);

	// 存储到全局调用
	global.artTemplate = template;

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