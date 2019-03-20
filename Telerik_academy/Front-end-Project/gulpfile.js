const gulp = require('gulp');
const webserver = require('gulp-webserver');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const systemjsBuilder = require('gulp-systemjs-builder');
const del = require('del');
const shell = require('gulp-shell');

gulp.task('server', () => {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            open: true,
            fallback: 'index.html',
        }));
});

gulp.task('scss-compile', () => {
    gulp.src('./scss/**/*.scss')
        .pipe(concat('main.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('clean-maincss', () => del('./css/main.css'));

// gulp.task('dev-styles', ['clean-maincss'], () => {
//     gulp.src('./css/**/*.css')
//         .pipe(concat('main.css'))
//         .pipe(gulp.dest('./css'));
// });

gulp.task('scss-watch', () => {
    gulp.watch('./scss/**/*.scss', ['clean-maincss', 'scss-compile']);
});

gulp.task('compileJS', () => {
    const builder = systemjsBuilder('./', './config/systemjs.config.js');
    builder.buildStatic('./app/js/app.js', 'bundle.js', {
        minify: true,
        mangle: false,
    })
        .pipe(gulp.dest('./dist'));
});

gulp.task('cleanCSS', () => {
    gulp.src('./css/**/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8', rebase: false }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['compileJS', 'cleanCSS'], () => {
    gulp.src(['./assets/**/*', './views/**/*'], { base: '.' })
        .pipe(gulp.dest('./dist'));
});

gulp.task('deploy', shell.task([
    'firebase deploy',
]));

gulp.task('dev', ['scss-compile', 'scss-watch', 'server']);
