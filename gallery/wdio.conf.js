/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfigFn = require('./webpack.config.js');
const axios = require('axios');
const { BatchInfo, By, ClassicRunner, Configuration, Eyes, RectangleSize, Target } =
    require('@applitools/eyes-webdriverio');

const host = process.env.TEST_IP || 'localhost',
    origin = `http://${host}:4043`;

const timestamp = new Date().getTime(),
    gitCommit = process.env.GIT_COMMIT;


let batchId = gitCommit || `local-${timestamp}`,
    eyes;

// Prevent the applitools batch from being closed when we call getAllTestResults at the end of each test.
// We close it manually in onComplete.
process.env.APPLITOOLS_DONT_CLOSE_BATCHES = 'true';

exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
    // on a remote machine).
    hostname: host,
    port: 4444,
    path: '/wd/hub',
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
        './visualtests/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    // NOTE: Experimentally, it appears this needs to be one less than the NODE_MAX_* variables set in the
    // docker environment variables in the Jenkinsfile
    maxInstances: 4,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [{
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: [
          // headless mode is currently incompatible with unsafely-treat-insecure-origni-as-secure.
          // See https://bugs.chromium.org/p/chromium/issues/detail?id=1176255
          //'headless'
          'font-render-hinting=none',

          // for basic clipboard access, which is normally only allowed for https or 'localhost'
          `unsafely-treat-insecure-origin-as-secure=${origin}`
        ],
        prefs: {
          // enable clipboard read access for NxCodeSnippet tests
          'profile.content_settings.exceptions.clipboard': {
            '[*.],*': {
              setting: 1
            }
          }
        }
      }
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'warn',
    //
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner, @wdio/lambda-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/sync, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/applitools-service': 'info'
    // },
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: `${origin}/`,
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'mocha',
    //
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter.html
    reporters: ['spec'],


    
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    onPrepare: function (config) {
      const webpackConfig = webpackConfigFn(),
          server = new WebpackDevServer(webpack(webpackConfig), webpackConfig.devServer);

      // save the server so we can shut it down in onComplete
      config.webpackServer = server;

      console.log('Starting WebpackDevServer');

      return new Promise(function(resolve, reject) {
        server.listen(webpackConfig.devServer.port, webpackConfig.devServer.host, function(err) {
          if (err) {
            reject(err);
          }
          else {
            console.log('WebpackDevServer started successfully on ' +
                `http://${webpackConfig.devServer.host}:${webpackConfig.devServer.port}`);

            resolve();
          }
        });
      });
    },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    onWorkerStart: function (cid, caps, specs, args, execArgv) {
      // use same batchId across all workers
      args.batchId = batchId;
    },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    beforeSession: function (config, capabilities, specs) {
      batchId = config.batchId;
    },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    before: function (capabilities, specs) {
      browser.addCommand('eyesSnapshot', function(title) {
        return eyes.check(title, Target.window());
      });

      browser.addCommand('eyesRegionSnapshot', function(title, region) {
        return eyes.check(title, region);
      });

      return Promise.resolve();
    },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    // beforeSuite: function (suite) {
    // },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    beforeTest: async function (test, context) {
      eyes = new Eyes(new ClassicRunner());

      const eyesConf = new Configuration();

      const branchName = process.env.GIT_BRANCH;

      const batchInfo = new BatchInfo(branchName || 'local');
      batchInfo.setId(batchId);
      eyesConf.setBatch(batchInfo);

      if (branchName) {
        const applitoolsBranchname = `sonatype/sonatype-react-shared-components/${branchName}`;

        eyesConf.setBranchName(applitoolsBranchname);
      }

      eyesConf.setParentBranchName('sonatype/sonatype-react-shared-components/master');

      // NOTE: Applitools API Key gets read from APPLITOOLS_API_KEY env variable automatically
      eyesConf.setAppName('React Shared Components');

      // The Hide Caret feature works by unfocusing the element. This prevents checking focus styles
      eyesConf.setHideCaret(false);
      eyesConf.setIgnoreCaret(false);

      // without this hover testing doesn't seem to work; possibly the scrollbar-hiding styles cause elements on
      // the page to shift, ruining any manual mouse positioning that had just been done
      eyesConf.setHideScrollbars(false);

      eyesConf.setViewportSize(new RectangleSize(1366, 1000));

      eyes.setConfiguration(eyesConf);

      // DOM info is sent for Root Cause Analysis, which we don't use and which may be causing intermittent failures
      eyes.setSendDom(false);

      await eyes.open(browser, undefined, `${test.parent} ${test.title}`);
    },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: function (test, context) {
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function (test, context, { error, result, duration, passed, retries }) {
    // },
    /**
     * Function to be executed after a test (in Mocha/Jasmine).
     */
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
      try {
        await eyes.closeAsync();

        if (process.env.GIT_BRANCH === 'master') {
          try {
            await eyes.getRunner().getAllTestResults(true);
          }
          catch (e) {
            context.test.callback(e);
          }
        }
      }
      finally {
        await eyes.abortAsync();
      }
    },

    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    // afterSuite: function (suite) {
    // },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    onComplete: async function(exitCode, config) {
      console.time('WebpackDevServer Shut Down');
      const shutDownWebpackPromise = new Promise(function(resolve, reject) {
        config.webpackServer.close(function(err) {
          if (err) {
            reject(err);
          }
          else {
            resolve();
          }
        });
      });

      const encodedBatchId = encodeURIComponent(batchId),
          encodedApiKey = encodeURIComponent(process.env.APPLITOOLS_API_KEY),
          closeBatchUrl = `https://eyesapi.applitools.com/api/sessions/batches/${encodedBatchId}/close/bypointerid/` +
            `?apiKey=${encodedApiKey}`,
          deleteBatchPromise = axios.delete(closeBatchUrl);

      await shutDownWebpackPromise;
      console.timeEnd('WebpackDevServer Shut Down');

      try {
        await deleteBatchPromise;
      }
      catch (e) {
        console.error('Failure while closing batch', closeBatchUrl);
        throw e;
      }
    },
    /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
    //onReload: function(oldSessionId, newSessionId) {
    //}
}
