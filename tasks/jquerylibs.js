const {src, dest} = require("gulp")

// Конфигурация
const path = require("../config/path.js")
const app = require("../config/app.js")

// Плагины
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")
// const babel = require("gulp-babel");
const strips = require("gulp-strip-comments")
const gulpConcat = require("gulp-concat")
const uglify = require("gulp-uglify")

// Обработка JavaScript
const jquerylibs = () => {
  return (
    src(path.jquerylibs.src)
      .pipe(
        plumber({
          errorHandler: notify.onError((error) => ({
            title: "JavaScript",
            message: error.message,
          })),
        })
      )
      // .pipe(babel())
      // .pipe(uglify())
      .pipe(strips())
      .pipe(uglify())
      .pipe(gulpConcat("jquerylibs.min.js"))
      .pipe(dest(path.jquerylibs.dest))
  )
}

module.exports = jquerylibs
