require('../../lib/Utils');

/**
 * 公共模块处理类
 */
var beforeIndex = 0;
class Common {
	constructor() {
		this.init();
	}
	/**
	 * 初始化
	 */
	init() {
	}
	// 初始化分类
	toggleCategoryMenu() {
		$("#category-menu .heading-part").click(function() {
			let parent = $(this).parent();
			let currenIndex = parseInt($(parent).attr('data-index'));
			if (currenIndex == beforeIndex) {
				$(parent).find('.main-navigation').toggle();
			} else {
				beforeIndex = currenIndex;
				$(".main-navigation").hide();
				$(parent).find('.main-navigation').show();
			}
		});
	}
}

export default Common;