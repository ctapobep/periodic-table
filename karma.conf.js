module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: ['js/lib/angular.min.js', 'js/lib/angular-mocks.js','js/*.js', 'test/*.js'],
    exclude: [],
    preprocessors: {'js/*.js': 'coverage' },
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
