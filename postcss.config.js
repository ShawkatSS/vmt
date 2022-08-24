module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-sort-media-queries'),

    ...process.env.NODE_ENV === 'production' ? [require('postcss-csso')] : [],
  ],
};
