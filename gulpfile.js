var gulp = require('gulp');
var sass = require('gulp-sass');

// task para sass
gulp.task('sass', function(){
	return gulp.src('sass/**/*.sass')
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest('css'));
});

// task para watch
gulp.task('watch', function(){
	gulp.watch('sass/**/*.sass', ['sass'])
});

//task default gulp
gulp.task('default', ['sass', 'watch']);