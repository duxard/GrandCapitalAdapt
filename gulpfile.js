var gulp = require('gulp'),
    sass = require('gulp-sass');
//STYLES
gulp.task('styles', function () {
  return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

//WATCH
gulp.task('default',function() {
    gulp.watch(['./scss/*.scss', 'index.html'],['styles']);
});