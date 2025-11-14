const { watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();

// Конфигурация
const path = require("./config/path.js");
const app = require('./config/app.js');

// Задачи
const clear = require("./tasks/clear.js");
const html = require("./tasks/html.js");
const scss = require("./tasks/scss.js");
const js = require("./tasks/js.js");
const img = require("./tasks/img.js");
const font = require('./tasks/font.js');
const jslibs = require("./tasks/jslibs.js");
const jquerylib = require("./tasks/jquerylib.js");
const libsCssScss = require("./tasks/libscssscss.js");
// const favicon = require("./tasks/favicon.js");
const svgsprite = require("./tasks/svgsprite.js");
const jquerylibs = require("./tasks/jquerylibs.js")

// Статический сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
    browser: "Google Chrome",
    notify: false,
  })
}

// Отслеживание изменений
const watcher = () => {
  watch(path.html.watch, html).on("all", browserSync.reload)
  watch(path.scss.watch, scss).on("all", browserSync.reload)
  watch(path.js.watch, js).on("all", browserSync.reload)
  watch(path.img.watch, img).on("all", browserSync.reload)
  watch(path.font.watch, font).on('all', browserSync.reload);
  watch(path.jquery.watch, jquerylib).on("all", browserSync.reload)
  watch(path.scss_and_css_libs.watch, libsCssScss).on("all", browserSync.reload)
  watch(path.svgsprite.watch, svgsprite).on("all", browserSync.reload)
}

const build = series(
  clear,
  parallel(
    html,
    scss,
    js,
    jquerylib,
    font,
    jquerylibs,
    jslibs,
    libsCssScss,
    img,
    svgsprite
  )
);

const dev = series(build, parallel(server, watcher))

// Публичные задачи
exports.html = html
exports.scss = scss
exports.js = js
exports.img = img
exports.font = font;
exports.jquerylib = jquerylib
exports.jslibs = jslibs
exports.libsCssScss = libsCssScss
// exports.favicon = favicon
exports.svgsprite = svgsprite
exports.jquerylibs = jquerylibs

// Сборка
exports.default = app.isProd
  ? build
  : dev;
