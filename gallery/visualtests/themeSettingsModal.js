/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

const { setupBrowser, describeIf } = require('./testUtils');

// Tests for ThemeSettingsModal are only testing the functionality of the modal itself, so
// it is unnecessary to run these tests in both light and dark modes

// eslint-disable-next-line no-undef
describeIf(process.env.THEME !== 'DARK')('ThemeSettingsModal', function() {
  const { waitAndGetElements, wait, getPage, checkFullPageScreenshot } = setupBrowser('#/');

  const openModalBtn = '.gallery-page-header__theme-settings-button',
      themeSettingsModal = '.gallery-theme-settings-modal',
      enableChangesToggle = `${themeSettingsModal} .nx-form-group label:nth-of-type(2)`,
      darkModeRadio = `${themeSettingsModal} .nx-radio:nth-of-type(2)`,
      lightModeRadio = `${themeSettingsModal} .nx-radio:nth-of-type(3)`;

  async function openThemeSettingsModal() {
    const [targetElement] = await waitAndGetElements(openModalBtn);
    await targetElement.click();
    await waitAndGetElements(themeSettingsModal);
  }

  async function selectModeChoice(radioElement) {
    await openThemeSettingsModal();

    const [targetElement] = await waitAndGetElements(radioElement);
    targetElement.click();
    await wait(400);

    await checkFullPageScreenshot();
  }

  beforeEach(async function() {
    await getPage().setViewport({ width: 1366, height: 1000 });
  });

  it('disallows any theme changes by default', async function() {
    await openThemeSettingsModal();
    await checkFullPageScreenshot();
  });

  it('enables radios when opted in to theme changes',
      async function() {
        await openThemeSettingsModal();

        const [toggle] = await waitAndGetElements(enableChangesToggle);
        toggle.click();
        await wait(400);

        await checkFullPageScreenshot();
      }
  );

  it('changes display theme to dark when dark mode radio is selected', async function() {
    await selectModeChoice(darkModeRadio);
  });

  it('changes display theme to light when light mode radio is selected', async function() {
    await selectModeChoice(lightModeRadio);
  });
});
