import BaseService from './public/base.service';
class CommonService extends BaseService {

	/** 获取所有分类*/
	async getAllCategorys(lang = 2) {
		let cacheOpt = { key: `b_category/GetAllCategory`, expired:30000 };
        let httpOpt = { 
            url: `b_category/GetAllCategory` ,
            params: {
				lang
			}
		};
		let result = await this.getData(httpOpt, cacheOpt);

		return result;
	}

	/**
	 *  判断元素是否在数组中;
	 *  @param { 数组 } _arr,
	 *  @param {需要判断是否在数组中得元素}  _obj
	 */
	contains(_arr, _obj) {

		if (!_arr || typeof(_arr) != 'object') {
			console.error('contains：参数1不存在或者不正确！');
			return;
		}

		if (_obj == undefined) {
			console.error('contains：参数2不存在或者不正确！');
			return;
		}

		var i = _arr.length;
		while (i--) {
			if (_arr[i] === _obj) {
				return true;
			}
		}
		return false;
	}
}
module.exports = CommonService;