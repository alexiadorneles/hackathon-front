const webpack = require('webpack')
require('babel-core/register')
const path = require('path')

const root = path.resolve(__dirname)

/* eslint func-names: 0 */
module.exports = function (config) {
  config.set({
    //
    // config para webpack
    //
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      watch: true,
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
          },
          { test: /\.html/, loader: 'ignore-loader' },
          { test: /\.css/, loader: 'ignore-loader' },
          { test: /\.scss/, loader: 'ignore-loader' },
          { test: /\.png/, loader: 'ignore-loader' },
        ],
      },
      resolve: {
        alias: {
          img: path.join(root, 'assets', 'img'),
          generics: path.join(root, 'src', 'components', 'generics'),
          scenes: path.join(root, 'src', 'components', 'scenes'),
          ['@constants']: path.join(root, 'src', 'constants'),
          objects: path.join(root, 'src', 'objects'),
        },
        extensions: ['.js', '.jsx'],
      },
      plugins: [
        new webpack.DefinePlugin({
          GLOBALS: {
            ENV: JSON.stringify('DEV'),
          },
        }),
      ],
    },

    webpackMiddleware: {
      stats: {
        version: true,
        hash: true,
        timings: true,
        assets: false,
        colors: true,
        children: false,
        modules: false,
        chunkModules: false,
        moduleTrace: false,
        chunks: false,
        stats: 'errors-only',
      },
    },

    //
    // config
    //

    files: [
      'test/index.js',
    ],

    preprocessors: {
      'test/index.js': ['webpack', 'babel'],
      // '../../src/app/**/*.js': ['webpack'],
      // '../../test/**/*_test.js': ['webpack'],
    },

    basePath: '',
    frameworks: ['jasmine', 'es6-shim'],
    exclude: [
    ],

    reporters: ['mocha'],

    // reporter options
    mochaReporter: {
      output: 'autowatch',
      maxLogLines: 1,
      // showDiff: true,
      colors: {
        success: 'blue',
        info: 'bgGreen',
        warning: 'cyan',
        error: 'red',
      },
      symbols: {
        success: '✔',
        info: 'ℹ',
        warning: '⚠',
        error: '✖',
      },
    },

    port: 9876,

    colors: true,


    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['Chrome', 'PhantomJS'],
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    logLevel: config.LOG_INFO,
  })
}
