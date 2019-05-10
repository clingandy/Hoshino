const fs = require('fs');

class Json {

    /**
     * 读取JSON文件
     * @param {*} dir 
     */
    static readFileSync(dir) {

        try {
            let content = fs.readFileSync(dir)
            content = stripBom(content)
            return JSON.parse(content);
        } catch(ex) {
            console.error(ex);
            return {};
        }
	}
	
	/**
	 * 深拷贝json
	 * @param {*} source 
	 */
	static deepCopyJSON(source) {
		return JSON.parse(JSON.stringify(source));
	}

    
}

function stripBom(content) {
    // we do this because JSON.parse would convert it to a utf8 string if encoding wasn't specified
    if (Buffer.isBuffer(content)) content = content.toString('utf8');
    content = content.replace(/^\uFEFF/, '');
    return content;
}

module.exports = Json;