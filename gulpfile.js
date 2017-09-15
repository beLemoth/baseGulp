'use strict';

global.$ = {
    path: {
        tasks: require('./gulp/paths/tasks.js'),
        cssLibs: require('./gulp/paths/css.libs.js'),
        jsLibs: require('./gulp/paths/js.libs.js'),
        app: require('./gulp/paths/app.js'),
        ftp: require('./gulp/paths/ftp.js')
    },
    config: require('./gulp/config.js'),
    gulp: require('gulp'),
    del: require('del'),
    browserSync: require('browser-sync'),
    merge: require('merge-stream'),
    spritesmith: require('gulp.spritesmith'),
    ftp: require('gulp-deploy-ftp'),
    gp: require('gulp-load-plugins')()
};

$.path.tasks.forEach(function(taskPath){
   require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'sass',
        'pug',
        'js:libs',
        'js:process',
        'copy:image',
        'copy:fonts',
        'css:libs',
        'sprite:svg',
        'sprite:png'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));



