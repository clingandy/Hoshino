const gulp = require('gulp'),
	bro = require('gulp-bro'),
	uglify = require('gulp-uglify'),
	clean = require('gulp-clean'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	cssmin = require('gulp-cssmin'),
	gUtil = require('gulp-util'),
	sourcemaps = require('gulp-sourcemaps');;

gulp.task('build',['sass:build'], function() {

	gulp.src('src/fonts/**')
    	.pipe(gulp.dest('dist/fonts/'));

    gulp.src('src/images/**')
		.pipe(gulp.dest('dist/images/'));
	gulp.src('src/pic/**')
    	.pipe(gulp.dest('dist/pic/'));

    gulp.src(['src/lib/**/**.jpg','src/lib/**/**.png','src/lib/**/**.gif',])
		.pipe(gulp.dest('dist/lib/'));

	gulp.src(['src/favicon.ico', 'src/robots.txt'])
		.pipe(gulp.dest('dist/'));
	

	// gulp.src(['src/js/*.js'], {read: false})
	// 	.on('data', function(file){
	// 		gUtil.log(gUtil.colors.blue('babel'), gUtil.colors.yellow(file.history), gUtil.colors.green(gUtil.date()))
	// 	})
	// 	.pipe(babel())
	// 	.pipe(uglify())
	// 	.pipe(gulp.dest('dist/js'))
	// 	.on('end', function(){
	// 		gUtil.log(gUtil.colors.blue('babel done'), gUtil.colors.red(gUtil.date()))
	// 	});

	gulp.src(['src/lib/**/*.js'])
		.on('data', function(file){
			gUtil.log(gUtil.colors.blue('uglify'), gUtil.colors.yellow(file.history), gUtil.colors.green(gUtil.date()))
		})
		.pipe(uglify())
		.pipe(gulp.dest('dist/lib'))
		.on('end', function(){
			gUtil.log(gUtil.colors.blue('uglify done'), gUtil.colors.red(gUtil.date()))
		});

	gulp.src(['src/lib/**/*.css'])
		.pipe(cssmin({
			showLog : true
		}))
		.pipe(gulp.dest('dist/lib'));

	gulp.src(['src/css/**'])
		.pipe(cssmin({
			showLog : true
		}))
		.pipe(gulp.dest('dist/css'));
	
	return gulp.src('src/js/**/*.js', {read : false})
        .pipe(bro({
            transform : [
                'babelify'
            ]
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});


// sass 处理
gulp.task('sass:build', ['clean'],function() {
    return gulp.src('src/scss/**/*.scss')
		.pipe(sass({outputStyle :'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
        	browsers: ['Android >= 4.4.4', 'iOS >= 8'],
        	cascade: true, //是否美化属性值
        	remove:true //是否去掉不必要的前缀
        }))
        .pipe(gulp.dest('src/css/'));
});


// 清空一切
gulp.task('clean', function() {
	return gulp.src('dist', {
			read: false
		})
		.pipe(clean());
});



/**
 * [getWatchDistPath get wath job path which change]
 * @param  {[type]} p [description]
 * @return {[type]}   [description]
 */
function getWatchDistPath(p) {
	let tmpPath = p.replace('src', 'dist'),
		namePoint = tmpPath.lastIndexOf('dist'),
		tmpNamePath = tmpPath.substr(namePoint),
		lastPoint = tmpNamePath.lastIndexOf('\\'),
		tmpPublishPath = tmpNamePath.substr(0, lastPoint);

	return {
		cleanPath: tmpPath,
		publicPath: tmpPublishPath
	};
}

gulp.task('watch', () => {
	// 监控所有的js文件
	let viewJs = gulp.watch(['src/**/*.js']);

	// 监控是否改变JS
	viewJs.on('change', function(e) {
		gUtil.log(gUtil.colors.green(`run js task ,change file : `),gUtil.colors.yellow(`${e.path},`), gUtil.colors.white(`change Event : `), gUtil.colors.red(`${e.type}`));
		let pathObject = getWatchDistPath(e.path);
		return gulp.src(e.path, {read : false})
        .pipe(bro({
			debug : true,
            transform : [
                'babelify'
            ]
        }))
        .pipe(gulp.dest(pathObject.publicPath));
	})

	// 监控css 改变
	gulp.watch('src/**/*.css', function(e) {
		gUtil.log(gUtil.colors.green(`run css task ,change file : `),gUtil.colors.yellow(`${e.path},`), gUtil.colors.white(`change Event : `), gUtil.colors.red(`${e.type}`));
		let pathObject = getWatchDistPath(e.path);
		return gulp.src(e.path)
			.pipe(cssmin())
			.pipe(gulp.dest(pathObject.publicPath));
	});

	gulp.watch('src/**/*.map', function(e) {
		gUtil.log(gUtil.colors.green(`run css map task ,change file : `),gUtil.colors.yellow(`${e.path},`), gUtil.colors.white(`change Event : `), gUtil.colors.red(`${e.type}`));
		let pathObject = getWatchDistPath(e.path);
		return gulp.src(e.path)
			.pipe(gulp.dest(pathObject.publicPath));
	});

	// 监控sass 改变
	gulp.watch('src/**/*.scss', function(e) {
		gUtil.log(gUtil.colors.green(`run scss task ,change file : `),gUtil.colors.yellow(`${e.path},`), gUtil.colors.white(`change Event : `), gUtil.colors.red(`${e.type}`));
		return gulp.src('src/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
        	browsers: ['Android >= 4.4.4', 'iOS >= 8'],
        	cascade: true, //是否美化属性值
        	remove:true //是否去掉不必要的前缀
        }))
		.pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('src/css/'));
	});

	gulp.watch('src/images/**/**', function(e) {
		gUtil.log(gUtil.colors.green(`run images task ,change file : `),gUtil.colors.yellow(`${e.path},`), gUtil.colors.white(`change Event : `), gUtil.colors.red(`${e.type}`));
		let pathObject = getWatchDistPath(e.path);
		return gulp.src(e.path).pipe(gulp.dest(pathObject.publicPath))

	});
});
