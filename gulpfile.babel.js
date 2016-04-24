import gulp from 'gulp';
import del from 'del';
import path from 'path';
import esCssModules from 'gulp-es-css-modules';

gulp.task('clean', () => {
  del([
    'dist',
    'src/styles',
  ]);
});

gulp.task('default', ['clean'], () => {
  gulp.src('styles/**/*.css')
    .pipe(esCssModules({
      jsEntry: path.join(__dirname, 'src/App.js'),
      moduleExportsDirectory: path.join(__dirname, 'src/styles'),
    }))
    .pipe(gulp.dest('dist'));
});
