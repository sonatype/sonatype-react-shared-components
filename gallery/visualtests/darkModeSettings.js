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

  async function themeOverrideTest(theme) {
    await setThemeOverride(theme);
    await checkFullPageScreenshot();
  }

  beforeEach(async function() {
    await getPage().setViewport({ width: 1366, height: 1000 });
  });

  it('sets display theme according to browser preference', async function() {
    await themeOverrideTest(null);
  });

  it('sets display theme to dark when themeOverride is set to dark', async function() {
    await themeOverrideTest('dark');
  });

  it('sets display theme to light when themeOverride is set to light', async function() {
    await themeOverrideTest('light');
  });

  describe('when theme changes are disabled', function() {
    beforeEach(async function() {
      await setThemingEnabled(false);
    });

    it('sets display theme to light mode', async function() {
      await checkFullPageScreenshot();
    });

    it('disallows browser preference', async function() {
      await themeOverrideTest(null);
    });

    it('disallows dark mode override', async function() {
      await themeOverrideTest('dark');
    });

    it('disallows light mode override', async function() {
      await themeOverrideTest('light');
    });
  });
});
