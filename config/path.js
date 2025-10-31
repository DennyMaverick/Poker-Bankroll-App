const pathSrc = './src';
const pathDest = './public';

module.exports = {
  root: pathDest,

  html: {
    src: pathSrc + '/html/*.html',
    watch: pathSrc + '/html/**/*.html',
    dest: pathDest,
  },

  scss: {
    src: pathSrc + '/sass/*.{sass,scss}',
    watch: pathSrc + '/sass/**/*.{sass,scss}',
    dest: pathDest + '/css/',
  },

  scss_and_css_libs: {
    src: pathSrc + '/sass/_libs/*.{sass,scss,css}',
    watch: pathSrc + '/sass/_libs/*.{sass,scss,css}',
    dest: pathDest + '/css/libs/',
  },

  js: {
    src: pathSrc + '/js/*.js',
    watch: pathSrc + '/js/**/*.js',
    dest: pathDest + '/js/',
  },

  // JavaScript библиотеки
  libs: {
    src: [
      './node_modules/aos/dist/aos.js',
      './node_modules/slick-carousel/slick/slick.js',
      './src/js/libs/lazyload.min.js',
    ],
    dest: pathDest + '/js/libs/vendors/',
  },

  jquery: {
    watch: pathSrc + '/js/libs/**/*.js',
    dest: pathDest + '/js/libs/jquery',
  },

  // jquery библиотеки
  jquerylibs: {
    src: ['./node_modules/page-scroll-to-id/jquery.malihu.PageScroll2id.js'],
    dest: pathDest + '/js/libs/jquery/libs/',
  },

  svgsprite: {
    src: pathSrc + '/img/sprite/**/*.svg',
    watch: pathSrc + '/img/sprite/**/*.svg',
    dest: pathDest + '/img/sprite/',
  },

  img: {
    src: [
      './src/img/**/*.{png,jpg,jpeg,gif,svg}',
      '!./src/img/sprite/**/*.svg',
    ],
    watch: [
      './src/img/**/*.{png,jpg,jpeg,gif,svg}',
      '!./src/img/sprite/**/*.svg',
    ],
    dest: pathDest + '/img/',
  },

  font: {
    src: pathSrc + '/font/**/*.{eot,ttf,otf,otc,ttc,woff,woof2,svg}',
    watch: pathSrc + '/font/**/*.{eot,ttf,otf,otc,ttc,woff,woof2,svg}',
    dest: pathDest + '/font/',
  },

  favicon: {
    src: pathSrc + '/img/favicon/favicon.svg',
    watch: pathSrc + '/img/favicon/favicon.svg',
    dest: pathDest + '/img/favicon/',
  },
};
