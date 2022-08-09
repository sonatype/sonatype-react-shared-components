/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxDrawer', function() {
  const {
    waitAndGetElements,
    checkScreenshot,
    getPage,
    a11yTest,
    wait
  } = setupBrowser('#/pages/Drawer');

  async function openDrawer(drawerId, buttonId) {
    const openDrawerBtnSelector = `#${buttonId}`;

    const [openDrawerBtn] = await waitAndGetElements(openDrawerBtnSelector);

    await openDrawerBtn.click();

    await wait(200);

    const [drawer] = await waitAndGetElements(`#${drawerId}`);

    return drawer;
  }

  function simpleDrawerTest(drawerId, buttonId) {
    return async function() {
      const drawer = await openDrawer(drawerId, buttonId);

      await checkScreenshot(drawer);
    };
  }

  function drawerA11yTest(drawerId, buttonId) {
    return async function() {
      await openDrawer(drawerId, buttonId);
      await a11yTest();
    };
  }

  beforeEach(async function() {
    await getPage().setViewport({ width: 1366, height: 1000 });
  });

  describe('Simple NxDrawer', function() {
    it('looks right', simpleDrawerTest('nx-drawer-simple', 'nx-drawer-simple-open-button'));

    it('passes a11y checks', drawerA11yTest('nx-drawer-simple', 'nx-drawer-simple-open-button'));
  });

  describe('Narrow NxDrawer', function() {
    it('looks right', simpleDrawerTest('nx-drawer-narrow', 'nx-drawer-narrow-open-button'));
  });

  describe('NxDrawer With Footer', function() {
    it('looks right', simpleDrawerTest('nx-drawer-with-footer', 'nx-drawer-with-footer-open-button'));
  });

  describe('NxDrawer With Subtitle', function() {
    it('looks right', simpleDrawerTest('nx-drawer-with-subtitle', 'nx-drawer-with-subtitle-open-button'));
  });

  describe('NxDrawer With Description', function() {
    it('looks right', simpleDrawerTest('nx-drawer-with-description', 'nx-drawer-with-description-open-button'));
  });

  describe('NxDrawer With Subtitle and Description', function() {
    it('looks right', simpleDrawerTest('nx-drawer-with-subtitle-and-description',
        'nx-drawer-with-subtitle-and-description-open-button'));
  });

  describe('NxDrawer + NxDropdown ESC Closing Behavior', function() {
    async function isFocused(el) {
      return el.evaluate(e => e === document.activeElement);
    }

    async function isInDocument(el) {
      return el.evaluate(e => e.isConnected);
    }

    async function pressEsc() {
      const { keyboard } = getPage();

      await keyboard.press('Escape');
    }

    it('closes one layer per ESC press', async function() {
      const [openButton] = await waitAndGetElements('#nx-drawer-esc-open-button');

      await openButton.click();

      await wait(200);

      const [drawer, dropdownToggle] = await waitAndGetElements(
          '#nx-drawer-esc',
          '#nx-drawer-esc .nx-dropdown__toggle'
      );

      expect(await isInDocument(drawer)).toBe(true);
      expect(await isInDocument(dropdownToggle)).toBe(true);

      await dropdownToggle.click();

      const [dropdownMenu] = await waitAndGetElements('#nx-drawer-esc .nx-dropdown-menu');

      expect(await isInDocument(dropdownMenu)).toBe(true);

      await pressEsc();

      expect(await isInDocument(dropdownMenu)).toBe(false);

      await pressEsc();

      await wait(200);

      expect(await isInDocument(drawer)).toBe(false);

      expect(await isFocused(openButton)).toBe(true);
    });
  });

  describe('NxDrawer With Global Header', function() {
    const { getPage, checkFullPageScreenshot, a11yTest, waitAndGetElements, wait } =
      setupBrowser('#/NxDrawerWithGlobalHeaderExample', false);

    async function openDrawer(drawerId, buttonId) {
      const openDrawerBtnSelector = `#${buttonId}`;

      const [openDrawerBtn] = await waitAndGetElements(openDrawerBtnSelector);

      await openDrawerBtn.click();

      await waitAndGetElements(`#${drawerId}`);

      await wait(200);
    }

    it('looks right (narrow)', async function() {
      await getPage().setViewport({ width: 1366, height: 1000 });
      await openDrawer('nx-drawer-with-global-header-narrow', 'nx-drawer-with-global-header-narrow-open-button');
      await checkFullPageScreenshot();
    });

    it('looks right (normal)', async function() {
      await getPage().setViewport({ width: 1366, height: 1000 });
      await openDrawer('nx-drawer-with-global-header-normal', 'nx-drawer-with-global-header-normal-open-button');
      await checkFullPageScreenshot();
    });

    it('passes a11y (narrow)', async function() {
      await getPage().setViewport({ width: 1366, height: 1000 });
      await openDrawer('nx-drawer-with-global-header-narrow', 'nx-drawer-with-global-header-narrow-open-button');
      await a11yTest();
    });

    it('passes a11y (normal)', async function() {
      await getPage().setViewport({ width: 1366, height: 1000 });
      await openDrawer('nx-drawer-with-global-header-normal', 'nx-drawer-with-global-header-normal-open-button');
      await a11yTest();
    });
  });
});
