var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
  bootstrapDir: './node_modules/bootstrap-sass',
  publicDir: './public'
}

gulp.task('css', function() {
    return gulp.src(config.publicDir + '/dev/stylesheets/style.scss')
    .pipe(sass({
        includePaths: [
          config.bootstrapDir + '/assets/stylesheets',
          // config.publicDir + '/dev/fonts/scss'
        ],
    }))
    .pipe(gulp.dest(config.publicDir + '/stylesheets'));
});

gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('default', ['css', 'fonts'], function() {
  gulp.watch([config.bootstrapDir + '/assets/stylesheets/**.scss', config.publicDir + '/dev/stylesheets/*.scss'], function(){
    gulp.run('css');
  })
});
