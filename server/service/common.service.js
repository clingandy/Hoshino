import BaseService from './public/base.service';
class CommonService extends BaseService {

	/** 获取所有分类*/
	async getAllCategorys() {
		let cacheOpt = { key: `b_category/GetAllCategory`, expired:0 };
        let httpOpt = { 
            url: `b_category/GetAllCategory` ,
            params: {}
		};
		let result = await this.getData(httpOpt, cacheOpt);

		return result;
	}
	

	/**
	 * 获取SEO
	 * @param {*} pageCode
	 */
	async getSeo(pageCode, option, _coverSeoConfig) {
		try {

			_coverSeoConfig = _coverSeoConfig !=undefined ? _coverSeoConfig: null;

			if(_coverSeoConfig !=null){
				if(typeof(_coverSeoConfig) !='object'){
					console.error('getSeo: 注意: _coverSeoConfig这个参数必须是一个对象类型！');
					return false;
				}
			}

			let cacheOpt = { key: `data/seo.json`, expired: process.env.SEO_EXPRIE_TIME ? process.env.SEO_EXPRIE_TIME : 5000 };
			let httpOpt = {
				url: `data/seo.json`
			};

			let seo =  await this.getInfo(httpOpt, cacheOpt);
			let _tmp = JSON.parse(JSON.stringify(seo));
			let _siteName = '鳄鱼彩票';

			let _result = {};

			let defaultPageCode = __tdkConfig.getIndex().pageCode

			if(_tmp.siteSeo) {

				// 如果pageCode都没传，默认取首页
				if(!pageCode) {
					pageCode = defaultPageCode;
					option = {
						website : _siteName
					}
				}

				// 赋予网站名称
				if(!option) {
					option = {
						website : _siteName
					}
				} else if(!option.siteName) {
					option.website = _siteName;
				}

				// 遍历获取SEO对象
				for(let item of _tmp.siteSeo) {
					if(item.pageCode == pageCode) {
						_result = item;
						/** 如果这个值是存在的话，则对seo进行覆盖处理 */
						if(_coverSeoConfig !=null){
							_result = Object.assign(_result, _coverSeoConfig);
						}
						break;
					}
				}

				/** 如果获取到的pageCode中的值为空对象，那么就把默认的website赋值给当前的pageCode */
				if(JSON.stringify(_result) == "{}"){

					console.warn(`从后端传回来的pageCode: "${pageCode}" 中的result值为:${JSON.stringify(_result)}, 因此把默认的tdk赋值给它，以免tdk中没有任何的值`);

					for(let item of _tmp.siteSeo) {

						if(item.pageCode == defaultPageCode) {

							_result = item;

							/** 如果这个值是存在的话，则对seo进行覆盖处理 */
							if(_coverSeoConfig !=null){
								_result = Object.assign(_result, _coverSeoConfig);
							}
							break;
						}

					}
				}
				// 如果存在于SEO文件中才进行替换内容
				if(_result.pageCode && option) {
					_result.title = _result.title.replace(/\[\$WEBSITE\]/g, option.website)
						.replace(/\[\$LOTTERYNAME\]/g, option.lotteryName)
						.replace(/\[\$ARTICLETITLE\]/g, option.articleTitle)
						.replace(/\[\$TYPE\]/g, option.type)
						.replace(/\[\$DATE\]/g, option.date)
						.replace(/\[\$ISSUENO\]/g, option.issueno)
						.replace(/\[\$SPECIALIST\]/g, option.specialist)
						.replace(/\[\$KEYWORD\]/g, option.keyword);
					_result.keyword = _result.keyword.replace(/\[\$WEBSITE\]/g, option.website)
						.replace(/\[\$LOTTERYNAME\]/g, option.lotteryName)
						.replace(/\[\$ARTICLETITLE\]/g, option.articleTitle)
						.replace(/\[\$TYPE\]/g, option.type)
						.replace(/\[\$DATE\]/g, option.date)
						.replace(/\[\$ISSUENO\]/g, option.issueno)
						.replace(/\[\$SPECIALIST\]/g, option.specialist)
						.replace(/\[\$KEYWORD\]/g, option.keyword);
					_result.description = _result.description.replace(/\[\$WEBSITE\]/g, option.website)
						.replace(/\[\$LOTTERYNAME\]/g, option.lotteryName)
						.replace(/\[\$ARTICLETITLE\]/g, option.articleTitle)
						.replace(/\[\$TYPE\]/g, option.type)
						.replace(/\[\$DATE\]/g, option.date)
						.replace(/\[\$ISSUENO\]/g, option.issueno)
						.replace(/\[\$SPECIALIST\]/g, option.specialist)
						.replace(/\[\$KEYWORD\]/g, option.keyword);


				}
			}

			return _result;


		} catch (ex) {
			console.error(ex);
			return {
				title: '',
				keyword: '',
				description: ''
			};
		}
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