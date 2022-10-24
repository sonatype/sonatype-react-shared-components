/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

const { setupBrowser } = require('./testUtils');

describe('Dark Mode Settings', function() {
  const { waitAndGetElements,
    getPage,
    checkFullPageScreenshot,
    overrideDisplayTheme,
    removeThemeEnabling
  } = setupBrowser('#/');

  const openModalBtn = '.gallery-page-header__theme-settings-button',
      themeSettingsModal = '.gallery-theme-settings-modal';

  async function openThemeSettingsModal() {
    const [targetElement] = await waitAndGetElements(openModalBtn);
    await targetElement.click();
    await waitAndGetElements(themeSettingsModal);

    await checkFullPageScreenshot();
  }

  beforeEach(async function() {
    await getPage().setViewport({ width: 1366, height: 1000 });
  });

  it('sets display theme according to browser preference', async function() {
    await overrideDisplayTheme(null);
    await openThemeSettingsModal();
  });

  it('sets display theme to dark when themeOverride is set to dark', async function() {
    await overrideDisplayTheme('dark');
    await openThemeSettingsModal();
  });

  it('sets display theme to light when themeOverride is set to light', async function() {
    await overrideDisplayTheme('light');
    await openThemeSettingsModal();
  });

  it('sets display theme to light mode when theme changes are disabled', async function() {
    await removeThemeEnabling();
    await openThemeSettingsModal();
  });
});
