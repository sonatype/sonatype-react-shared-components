module.exports = {
  from: /require\(["'].*?\.scss["']\);/g,
  to: '',
  files: 'dist/server/**/*.js',
};
