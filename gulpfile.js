// $ npm install gulp gulp-jade gulp-less  gulp-imagemin  gulp-concat connect --save-dev

var gulp = require('gulp'), // Сообственно Gulp JS
    jade = require('gulp-jade'), // Плагин для Jade
    less = require('gulp-less'), // Плагин для Stylus
    imagemin = require('gulp-imagemin'), // Минификация изображений
    concat = require('gulp-concat'); // Склейка файлов


//  less
gulp.task('less', function() {
    gulp.src('app/css/*.less')

});

// С Jade

    gulp.task('jade', function() {
        gulp.src('app/*.jade')

    });



// JS
    gulp.task('js', function() {
        gulp.src('app/js/*.*')


    });



//  изображения

    gulp.task('images', function() {
        gulp.src('app/img/*')


    });
// font

gulp.task('font', function() {
    gulp.src('app/font/*')


});

gulp.task('audio', function() {
    gulp.src('app/audio/*')


});

// Запуск сервера разработки gulp watch
    gulp.task('watch', function() {
        // Предварительная сборка проекта
        gulp.watch('less');
        gulp.watch('jade');
        gulp.watch('images');
        gulp.watch('js');


    });



    gulp.task('build', function() {
        // css
        gulp.src('app/css/*.less')
            .pipe(less())
            .pipe(gulp.dest('dist/css/'));

        // jade
        gulp.src('app/*.jade')
            .pipe(jade({
            pretty: true
        }))  // Собираем Jade только в папке app
            .pipe(gulp.dest('dist/'));

        // js
        gulp.src('app/js/*.*')
            .pipe(gulp.dest('dist/js'));



        // image
        gulp.src('app/img/*')
            .pipe(imagemin())
            .pipe(gulp.dest('dist/img'));

        // шрифт
        gulp.src('app/font/*')
            .pipe(gulp.dest('dist/font'));


    });

gulp.task('default', ['watch']);