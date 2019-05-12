import HttpRequest from '../lib/http';

class ArticleService {
	/**
	 * 获取分类所属文章列表
	 * @param {int} categoryId 分类ID
	 */
	static async getArticleList(categoryId) {
		let result = await HttpRequest.get({
			url: `/article/list?categoryId=${categoryId}`
		});

		if(result.state == 2) {
			console.error(result.message || result.msg);
			result = null;
		}

		return result;
	}
}

export default ArticleService;