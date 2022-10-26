/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

const { setupBrowser } = require('./testUtils');

describe('Dark Mode Settings', function() {
  const { getPage,
    checkFullPageScreenshot,
    setThemeOverride,
    setThemingEnabled
  } = setupBrowser('#/');

  function themeOverrideTest(theme) {
    return async function() {
      await setThemeOverride(theme);
      await checkFullPageScreenshot();
    };
  }

  beforeEach(async function() {
    await getPage().setViewport({ width: 1366, height: 1000 });
  });

  it('sets display theme according to browser preference', themeOverrideTest(null));

  it('sets display theme to dark when themeOverride is set to dark', themeOverrideTest('dark'));

  it('sets display theme to light when themeOverride is set to light', themeOverrideTest('light'));

  describe('when theme changes are disabled', function() {
    beforeEach(async function() {
      await setThemingEnabled(false);
    });

    it('sets display theme to light mode', async function() {
      await checkFullPageScreenshot();
    });

    it('disallows browser preference', themeOverrideTest(null));

    it('disallows dark mode override', themeOverrideTest('dark'));

    it('disallows light mode override', themeOverrideTest('light'));
  });
});
