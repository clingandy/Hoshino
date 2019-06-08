module.exports = Template => {
	
	/**
	 * 分页控件
	 * @param {*} pageCount 
	 * @param {*} currentPage 
	 * @param {*} showCount 展示多少页
	 */
	Template.defaults.imports.page = (pageCount, currentPage, showCount, href, urlQuery, showFirstAndLast) => {
        var _result = [];
        currentPage = parseInt(currentPage);
		pageCount = parseInt(pageCount);
		var showPageCount = showCount ? showCount : 5;
		var middlePage = parseInt(showPageCount / 2); 

        // 获取当前需要生成的页数
        var _length = 0;
        var _startPage = 0;

        // 如果页数小于3，则直接生成
        if(currentPage <= 3) {
            _startPage = 1;
            _length = pageCount >= showPageCount ? showPageCount : pageCount;
        } else {
            _startPage = pageCount >= showPageCount ? pageCount - currentPage <= middlePage ? currentPage - ((showPageCount - 1) - (pageCount - currentPage)) : currentPage - middlePage : 1;
            _length = pageCount >= showPageCount ? _startPage + (showPageCount - 1) >= pageCount ? pageCount : _startPage + (showPageCount - 1) : pageCount;
        }

        // 生成中间内容
        for(var i = _startPage; i <= _length; i++) {
            if(i == currentPage) {
                _result.push(`<a class="active" href="/${href}/${i}${urlQuery}" data-pageIndex="${i}">${i}</a>`);
            } else {
                _result.push(`<a href="/${href}/${i}${urlQuery}" data-pageIndex="${i}">${i}</a>`);
            }
        }

		// 当页数还大的时候
		
		if(_result && _result.length > 0) {
			if (currentPage == 1) {
				_result.unshift(`<a class="prv" data-pageIndex="${currentPage - 1}">&lt;</a>`);
			} else {
				_result.unshift(`<a class="prv" href="/${href}/${currentPage - 1}${urlQuery}" data-pageIndex="${currentPage - 1}">&lt;</a>`);
			}
			
			if(currentPage == pageCount) {
				_result.push(`<a class="next" data-pageIndex="0">&gt;</a>`);
			} else {
				_result.push(`<a class="next" href="/${href}/${currentPage + 1 >= pageCount ? pageCount : currentPage + 1}${urlQuery}" data-pageIndex="${currentPage + 1 >= pageCount ? pageCount : currentPage + 1}">&gt;</a>`);
			}
		}
		if (showFirstAndLast) {
			pageCount == 1 ? _result.unshift(`<a class="fistPage" data-pageIndex="0">首页</a>`) : _result.unshift(`<a class="fistPage" href="/${href}/1${urlQuery}" data-pageIndex="1">首页</a>`);;
			
			if(currentPage == pageCount) {
				_result.push(`<a class="lastPage" data-pageIndex="0">最末页</a>`);
			} else {
				_result.push(`<a class="lastPage" href="/${href}/${pageCount}${urlQuery}" data-pageIndex="${pageCount}">最末页</a>`);
			}
		}
        return `<div class="pagination-nav">${_result.join('')}</div>`;

	}
}
