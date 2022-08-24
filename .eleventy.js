const htmlmin = require('html-minifier');

module.exports = function(eleventyConfig) {
  /**
   * Watch & Passthrough
   * @link https://www.11ty.dev/docs/config/#add-your-own-watch-targets
   * @link https://www.11ty.dev/docs/copy/
   */

  // Следит за изменением файлов
  eleventyConfig.addWatchTarget('src/assets/styles/**/*.css');
  eleventyConfig.addWatchTarget('src/assets/scripts/**/*.js');

  // Копирует файлы
  eleventyConfig.addPassthroughCopy({ 'src/assets/fonts/**/*.{ttf,eof,woff,woff2}': 'fonts/'} );
  eleventyConfig.addPassthroughCopy({ 'src/assets/images/**/*.{jpg,png,svg,gif,webp}': 'images/' });

  /**
   * Transforms
   * @link https://www.11ty.io/docs/config/#transforms
   */

  // Сжимает HTML разметку, при сборке на production
  eleventyConfig.addTransform('htmlmin', function(content, outputPath) {
    if (process.env.NODE_ENV === 'production') {
      if( outputPath && outputPath.endsWith(".html") ) {
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true
        });

        return minified;
      }

      return content;
    } else {
      return content;
    }
  });

  /**
   * Настройки файловой структуры и шаблонизаторов
   * @link https://www.11ty.dev/docs/config/
   */
  return {
    // Настройки шаблонов
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: false,
    htmlTemplateEngine: 'njk',
    templateFormats: [
      'md',
      'njk'
    ],

    // Настройки файловой структуры
    dir: {
      input: 'src',
      layouts: '_layouts',
      includes: '_includes',
      data: '_data',
      output: '_site'
    }
  }
};
