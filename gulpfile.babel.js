import gulp from 'gulp';
import del from 'del';
import postcss from 'gulp-postcss';
import modulesEs from 'postcss-modules-es';

gulp.task('clean', () => {
  del([
    'dist',
    'src/styles',
  ]);
});

gulp.task('default', ['clean'], () => {
  gulp.src('styles/**/*.css')
    .pipe(postcss([
      modulesEs({
        moduleExportDirectory: 'styles',
        jsFiles: 'src/App.js',
      }),
    ]))
    .pipe(gulp.dest('dist'));
});
