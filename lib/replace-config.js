module.exports = {
  from: /import '.*?\.scss';/g,
  to: '',
  files: 'dist/server/**/*.js',
};
