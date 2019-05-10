Date.prototype.format = function (format) {
	var date = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		"S+": this.getMilliseconds()
	};
	if (/(y+)/i.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for (var k in date) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
		}
	}
	return format;
}

// 将秒数转化为计算到天数的格式
String.prototype.SecondsToddhhmmss = function () {
	var totalSeconds = parseInt(this);
	var hours = Math.floor(totalSeconds / 3600);
	var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
	var seconds = totalSeconds - (hours * 3600) - (minutes * 60);
	seconds = Math.round(seconds * 100) / 100;

	var day = 0;
	// 计算日
	if(hours >= 24) {
		day = Math.floor(hours / 24);
		hours = hours - day * 24;
	}

	var result = (day < 10 ? "0" + day : day);
	result += ":" + (hours < 10 ? "0" + hours : hours);
	result += ":" + (minutes < 10 ? "0" + minutes : minutes);
	result += ":" + (seconds < 10 ? "0" + seconds : seconds);
	return result;
}

//将秒数转为时间格式
String.prototype.SecondsTohhmmss = function() {
	var totalSeconds = parseInt(this);
	var hours = Math.floor(totalSeconds / 3600);
	var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
	var seconds = totalSeconds - (hours * 3600) - (minutes * 60);
	seconds = Math.round(seconds * 100) / 100;
	var result = (hours < 10 ? "0" + hours : hours);
	result += ":" + (minutes < 10 ? "0" + minutes : minutes);
	result += ":" + (seconds < 10 ? "0" + seconds : seconds);
	return result;
};

//将秒数转为时间格式
String.prototype.SecondsTommss = function() {
	var totalSeconds = parseInt(this);
	var hours = Math.floor(totalSeconds / 3600);
	var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
	var seconds = totalSeconds - (hours * 3600) - (minutes * 60);
	seconds = Math.round(seconds * 100) / 100;
	var result = "";
	if( hours > 0 ){
		result = (hours < 10 ? "0" + hours : hours);
		result += ":" + (minutes < 10 ? "0" + minutes : minutes);
	}else{
		result = (minutes < 10 ? "0" + minutes : minutes);
	}
	
   
	result += ":" + (seconds < 10 ? "0" + seconds : seconds);
	return result;
};

//时间格式字符串转秒数
String.prototype.DateToSeconds = function() {
	var d = new Date(this);
	return d.getTime();
};

//将数字字符串转为01格式
String.prototype.FormatInt = function() {
	var num = parseInt(this, 10);
	if (num < 10) {
		return "0" + num;
	}
	return num;
};

