'use strict';

module.exports = function() {
    $.gulp.task('sprite:png', function () {
        var spriteData = $.gulp.src('./source/images/icons/*.png')
            .pipe($.spritesmith({
                imgName: '../img/sprite.png',
                cssName: 'sprite.css'
            }));
        var imgStream = spriteData.img
            .pipe($.gulp.dest($.config.root + '/assets/img'));
        var cssStream = spriteData.css
            .pipe($.gp.csso())
            .pipe($.gp.rename({
                suffix: '.min'
            }))
            .pipe($.gulp.dest($.config.root + '/assets/css'));
        return $.merge(imgStream, cssStream);
    });
};