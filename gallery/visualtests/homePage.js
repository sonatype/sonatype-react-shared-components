/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { By, ClassicRunner, Configuration, Eyes, Target } = require('@applitools/eyes-webdriverio');

describe('Home Page', function() {
  let eyes;

  beforeEach(async function() {
    eyes = new Eyes(new ClassicRunner());

    const eyesConf = new Configuration();
    eyesConf.setAppName('React Shared Components');
    eyesConf.setTestName('Home Page');

    eyes.setConfiguration(eyesConf);

    await eyes.open(browser);
  });

  afterEach(async function() {
    await eyes.closeAsync();
    await eyes.abortIfNotClosed();

    const results = await eyes.getRunner().getAllTestResults(false);

    console.log('Applitools Results', results, results.getAllResults());
  });

  it('looks right', async function() {

    await browser.url('#/pages/NxAlert');
    await eyes.check('Home Page', Target.window());
    await eyes.check('Page Header', Target.region(By.className('nx-page-header')));
  });
});
