'use strict';

module.exports = function() {
  $.gulp.task('pug', function() {
     return $.gulp.src('./source/template/pages/*.pug')
         .pipe($.gp.pug({
             pretty: true,
             local: JSON.parse($.fs.readFileSync('./content.json','utf-8'))
         }))
         .on('error', $.gp.notify.onError(function(error) {
             return {
                 title: 'Pug',
                 message: error.message
             }
         }))
         .pipe($.gulp.dest($.config.root+'/'));
  });
};