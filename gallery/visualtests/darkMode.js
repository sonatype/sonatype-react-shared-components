/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('dark mode classes', function() {
  const { getPage, simpleTest } = setupBrowser('#/pages/Dark Mode Activation Classes');

  function tests(userPreference) {
    describe('without opt-in', function() {
      const basicExampleSelector = '#dark-mode-no-opt-in-example .gallery-example-iframe',
          darkModeOverrideExampleSelector = '#dark-mode-dark-override-no-opt-in-example .gallery-example-iframe',
          lightModeOverrideExampleSelector = '#dark-mode-light-override-no-opt-in-example .gallery-example-iframe';

      it('is in light mode', simpleTest(basicExampleSelector));
      it('is in light mode with the dark mode override class', simpleTest(darkModeOverrideExampleSelector));
      it('is in light mode with the light mode override class', simpleTest(lightModeOverrideExampleSelector));
    });

    describe('with opt-in', function() {
      const basicExampleSelector = '#dark-mode-opt-in-example .gallery-example-iframe',
          darkModeOverrideExampleSelector = '#dark-mode-dark-override-example .gallery-example-iframe',
          lightModeOverrideExampleSelector = '#dark-mode-light-override-example .gallery-example-iframe';

      it(`is in ${userPreference} mode`, simpleTest(basicExampleSelector));
      it('is in dark mode with the dark mode override class', simpleTest(darkModeOverrideExampleSelector));
      it('is in light mode with the light mode override class', simpleTest(lightModeOverrideExampleSelector));
    });
  }

  describe('with prefers-color-scheme unset', function() {
    beforeEach(async function() {
      await getPage().emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'no-preference' }]);
    });

    tests('light');
  });

  describe('with prefers-color-scheme: light', function() {
    beforeEach(async function() {
      await getPage().emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }]);
    });

    tests('light');
  });

  describe('with prefers-color-scheme: dark', function() {
    beforeEach(async function() {
      await getPage().emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'dark' }]);
    });

    tests('dark');
  });
});
