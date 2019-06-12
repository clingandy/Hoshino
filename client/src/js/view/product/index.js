import Common from '../public/common';
import "../../lib/Utils";

$(init);

/**
 * 初始化
 */
function init() {

	let common = new Common();
	common.toggleCategoryMenu();
	menuChoosen();

}


function menuChoosen() {
	$("#category-menu .main-navigation").find('.active').parent().parent().show();
}