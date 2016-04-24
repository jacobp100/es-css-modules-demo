![ES CSS Modules](https://raw.githubusercontent.com/jacobp100/es-css-modules/master/assets/es.png)

# For Gulp!

TL;DR,

```js
import gulp from 'gulp';
import path from 'path';
import esCssModules from 'gulp-es-css-modules';

gulp.task('default', ['clean'], () => {
  gulp.src('styles/**/*.css')
    .pipe(esCssModules({
      entry: path.join(__dirname, 'src/App.js')
    }))
    .pipe(gulp.dest('dist'));
});
```

```js
esCssModules(esCssModulesOptions, pluginOptions);
```

`esCssModulesOptions` is almost identical to those defined [here](https://github.com/jacobp100/es-css-modules/blob/master/README.md#user-content-docs)—you don’t need the cssInputDirectory or cssOutputDirectory though!

`pluginOptions` currently accepts one argument:

`pluginOptions.traceStats` defaults to `true`, which logs warnings such as unused classes. Set to false to disable this.
