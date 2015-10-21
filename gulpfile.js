var gulp = require('gulp');
  	sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload')
    htmlminify = require("gulp-html-minify"),
    imagemin = require('gulp-imagemin'),
    uglify = require("gulp-uglify");


gulp.task('styles', function() {
    return sass('public/scss/main.scss', { style: 'expanded' })
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload())
        .pipe(notify({ message: 'SCSS Compiled & Minified' }));
});

gulp.task('scripts', function() {
    return gulp.src("public/javascript/**")
        .pipe(concat('main.js'))
        .pipe(gulp.dest("dist/javascript"))
        .pipe(rename({suffix: ".min"}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/javascript'))
        .pipe(livereload())
        .pipe(notify({message:"Minified & Bundled JS."}));
});

gulp.task('templates' , function(){
    return gulp.src("src/templates/**/*.html")
        .pipe(htmlminify())
        .pipe(gulp.dest("dist/templates"))
        .pipe(livereload())
        .pipe(notify({message:"Compressed HTML."}));
});

gulp.task('images', function () {
    return gulp.src('public/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest('dist/images'))
        .pipe(notify({message:"Compressed HTML."}));
});

gulp.task('start', function() {
    livereload.listen();


    gulp.watch(['public/**', 'views/index.html']).on('change', livereload.changed);

    gulp.watch(['public/images/*'], ['images']);

    gulp.watch(['public/javascript/*.js', 'public/javascript/**/*.js'], ['scripts']);

    gulp.watch(['public/scss/*.scss'], ['styles']);

    gulp.watch(['public/templates/*.html', 'src/templates/partials/*.html'], ['templates'])
});
