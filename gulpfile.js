const gulp = require('gulp');
const sass = require('node-sass');
const gulpSass = require('gulp-sass');
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
  const compiledCss = sass.renderSync({
    data: file,
    outputStyle: 'compressed',
  });
  callback(null, compiledCss.css);
}

gulp.task('global-scss', ()=>{
  return gulp.src('./src/global.scss')
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('inline', () => {
  return gulp.src(INLINE_TEMPLATES.SRC)
    .pipe(inlineTemplates(INLINE_TEMPLATES.CONFIG))
    .pipe(gulp.dest(INLINE_TEMPLATES.DIST));
});
