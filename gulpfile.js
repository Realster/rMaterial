const gulp = require('gulp');
const sass = require('node-sass');
const inlineTemplates = require('gulp-inline-ng2-template');

const INLINE_TEMPLATES = {
  SRC: './src/**/*.ts',
  DIST: './tmp/src',
  CONFIG: {
    base: '/src',
    target: 'es6',
    useRelativePaths: true,
    styleProcessor: compileSass
  }
};

function compileSass(path, ext, file, callback) {
  let compiledCss = sass.renderSync({
    data: file,
    outputStyle: 'compressed',
  });
  callback(null, compiledCss.css);
}

gulp.task('inline', () => {
  return gulp.src(INLINE_TEMPLATES.SRC)
    .pipe(inlineTemplates(INLINE_TEMPLATES.CONFIG))
    .pipe(gulp.dest(INLINE_TEMPLATES.DIST));
});
