var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    minCSS = require('gulp-clean-css');

gulp.task('default', ['browser','minJS']);
gulp.task('browser', function(){
    browserSync.init({
        server:{
            baseDir: "./"
        }
    });
});
gulp.task('minJS', function(){
    return gulp.src('assets/js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/main.min.js'));
});

gulp.task('minCSS', function(){
    return gulp.src('assets/css/estilos.css')
        .pipe(minCSS())
        .pipe(gulp.dest('assets/css/estilos.min.css'))
});

gulp.watch(['assets/js/*.js']).on('change',function() {
    return gulp.src('assets/js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/main.min.js'));
});

gulp.watch(['index.html', 'assets/js/main.js']).on('change',function () {
    browserSync.reload();
});