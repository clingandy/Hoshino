import Common from '../public/common';
// import Article from '../public/article';

$(() => {
	let common = new Common();
	//let article = new Article();
	// 初始化首页通用
	//common.initCommonIndex();
	
	// // 如果拥有模板2的资讯文章则需要处理
	// let $articleNav = $('.pub-articleNav'),
	// 	$articleNavSpan = $('.pub-articleNav li span');
	// if($articleNav.length > 0) {
	// 	$articleNavSpan.click(async function() {
	// 		$articleNavSpan.removeClass('active');
	// 		$(this).addClass('active')
	// 		let _categoryId = $(this).data('category');
	// 		let result = await article.getArticle(_categoryId);
	// 		$('.pub-articleList ul').html(result);
	// 		// 切换url链接
	// 		$('.na-more').attr('href', `/article/category/${_categoryId}/1`);
	// 	});
	// }
});

