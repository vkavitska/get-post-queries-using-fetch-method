var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var uglifycss = require('gulp-uglifycss');
var concatCss = require('gulp-concat-css');

gulp.task('js', function() {
    gulp.src('js/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(uglify())
        .pipe(concat('dist.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('css', function() {
    gulp.src('css/*.css')
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(concatCss('dist.css'))
        .pipe(gulp.dest('./dist'));
});