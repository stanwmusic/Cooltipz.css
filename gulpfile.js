'use strict';

const {src, dest, parallel} = require('gulp');
const autoVendorPrefix = require('gulp-autoprefixer');
const gulpSass = require('gulp-sass');
const purge = require('gulp-css-purge');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

function cooltipzCompressed() {
  return src('./src/cooltipz/cooltipz.scss')
      .pipe(sourcemaps.init())
      .pipe(gulpSass().on('error', gulpSass.logError))
      .pipe(purge({
        trim: true,
        shorten: true,
        format: true
      }))
      .pipe(autoVendorPrefix())
      .pipe(rename('cooltipz.min.css'))
      .pipe(sourcemaps.write())
      .pipe(dest('./docs/css'))
}

function docsCompressed() {
  return src('./src/docs/docs.scss')
      .pipe(sourcemaps.init())
      .pipe(gulpSass().on('error', gulpSass.logError))
      .pipe(purge({
        trim: true,
        shorten: true,
        format: true
      }))
      .pipe(autoVendorPrefix())
      .pipe(rename('docs.min.css'))
      .pipe(sourcemaps.write())
      .pipe(dest('./docs/css'))
}

function prismCompressed() {
  return src('./src/docs/prism.scss')
      .pipe(sourcemaps.init())
      .pipe(gulpSass().on('error', gulpSass.logError))
      .pipe(purge({
        trim: true,
        shorten: true,
        format: true
      }))
      .pipe(autoVendorPrefix())
      .pipe(rename('prism.min.css'))
      .pipe(sourcemaps.write())
      .pipe(dest('./docs/css'))
}

function normalizeCompressed() {
  return src('./src/docs/normalize.scss')
      .pipe(sourcemaps.init())
      .pipe(gulpSass().on('error', gulpSass.logError))
      .pipe(purge({
        trim: true,
        shorten: true,
        format: true
      }))
      .pipe(autoVendorPrefix())
      .pipe(rename('normalize.min.css'))
      .pipe(sourcemaps.write())
      .pipe(dest('./docs/css'))
}

exports.default = parallel(cooltipzCompressed, docsCompressed, prismCompressed, normalizeCompressed);
