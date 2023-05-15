/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('dark mode mixin', function() {
  const {
        getPage,
        simpleTest,
        setThemeOverride,
        setThemingEnabled
      } = setupBrowser('#/pages/Dark Mode Mixin'),
      selector = '.gallery-example-live';

  function themeOverrideTest(theme) {
    return async function() {
      await setThemeOverride(theme);
      await simpleTest(selector)();
    };
  }

  function tests(userPreference) {
    describe('without opt-in', function() {
      beforeEach(async function() {
        await setThemingEnabled(false);
        await setThemeOverride(null);
      });

      it('is in light mode', simpleTest(selector));
      it('is in light mode with the dark mode override class', themeOverrideTest('dark'));
      it('is in light mode with the light mode override class', themeOverrideTest('light'));
    });

    describe('with opt-in', function() {
      beforeEach(async function() {
        await setThemingEnabled(true);
        await setThemeOverride(null);
      });

      it(`is in ${userPreference} mode`, simpleTest(selector));
      it('is in dark mode with the dark mode override class', themeOverrideTest('dark'));
      it('is in light mode with the light mode override class', themeOverrideTest('light'));
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
