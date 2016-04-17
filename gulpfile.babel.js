import gulp from 'gulp';
import del from 'del';
import { getStyleExports, cssModulesWithStyleExports } from 'gulp-es6-css-modules';
import * as p from 'path';

const styleImportsDir = p.join(__dirname, 'src/styles');
const styleImportsFiles = p.join(styleImportsDir, '/**/*.js');

gulp.task('clean', () => (
  del([
    styleImportsFiles,
    'dist/**/*.css',
  ])
));

gulp.task('generate-style-exports', ['clean'], () => (
  gulp.src(['src/**/*.js', '!src/styles'])
    .pipe(getStyleExports(styleImportsFiles))
    .pipe(gulp.dest('src'))
));

gulp.task('css', ['generate-style-exports'], () => (
  gulp.src('styles/**/*.css')
    .pipe(cssModulesWithStyleExports(styleImportsDir, { warnOnUnused: true }))
    .pipe(gulp.dest('dist'))
));

gulp.task('build', ['css']);
