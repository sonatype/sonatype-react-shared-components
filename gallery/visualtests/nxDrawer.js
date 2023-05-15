/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxDrawer', function() {
  const viewportSize = { width: 1366, height: 1000 };

  const openDrawerFromPage = ({ waitAndGetElements, wait }) => async (buttonId, drawerId) => {
    const [openDrawerButton] = await waitAndGetElements(`#${buttonId}`);

    await openDrawerButton.click();

    await waitAndGetElements(`#${drawerId}`);

    // Wait for animation and focus.
    await wait(500);
  };

  describe('NxDrawer with Title, Footer, and non-overflowing Content', function() {
    const browserSetup = setupBrowser('#/NxDrawerExample', false);
    const { getPage, checkFullPageScreenshot, a11yTest, waitAndGetElements, wait } = browserSetup;
    const openDrawer = openDrawerFromPage(browserSetup);

    const buttonId = 'nx-drawer-with-footer-open-button';
    const drawerId = 'nx-drawer-with-footer';

    it('looks right', async function() {
      await getPage().setViewport(viewportSize);
      await openDrawer(buttonId, drawerId);
      await checkFullPageScreenshot();
    });

    it('shows a tooltip when truncated drawer header title is hovered', async function() {
      await getPage().setViewport(viewportSize);
      await openDrawer('nx-drawer-truncated-open-button', 'nx-drawer-simple-truncated');

      const headerTitleSelector = '#nx-drawer-simple-truncated .nx-drawer-header__title';
      const [focusElement] = await waitAndGetElements(headerTitleSelector);

      await focusElement.hover();
      await wait(500);
      await checkFullPageScreenshot();
    });

    it('passes a11y', async function() {
      await getPage().setViewport(viewportSize);
      await openDrawer(buttonId, drawerId);
      await a11yTest(null, true)();
    });
  });

  describe('NxDrawer with Subtitle or Description Example', function() {
    const browserSetup = setupBrowser('#/NxDrawerWithSubtitleOrDescriptionExample', false);
    const { getPage, checkFullPageScreenshot, a11yTest } = browserSetup;
    const openDrawer = openDrawerFromPage(browserSetup);

    describe('with subtitle', function() {
      const buttonId = 'nx-drawer-with-subtitle-open-button';
      const drawerId = 'nx-drawer-with-subtitle';

      it('looks right', async function() {
        await getPage().setViewport(viewportSize);
        await openDrawer(buttonId, drawerId);
        await checkFullPageScreenshot();
      });

      it('passes a11y', async function() {
        await getPage().setViewport(viewportSize);
        await openDrawer(buttonId, drawerId);
        await a11yTest(null, true)();
      });
    });

    describe('with description', function() {
      const buttonId = 'nx-drawer-with-description-open-button';
      const drawerId = 'nx-drawer-with-description';

      it('looks right', async function() {
        await getPage().setViewport(viewportSize);
        await openDrawer(buttonId, drawerId);
        await checkFullPageScreenshot();
      });

      it('passes a11y', async function() {
        await getPage().setViewport(viewportSize);
        await openDrawer(buttonId, drawerId);
        await a11yTest(null, true)();
      });
    });

    describe('with both', function() {
      const buttonId = 'nx-drawer-with-subtitle-and-description-open-button';
      const drawerId = 'nx-drawer-with-subtitle-and-description';

      it('looks right', async function() {
        await getPage().setViewport(viewportSize);
        await openDrawer(buttonId, drawerId);
        await checkFullPageScreenshot();
      });

      it('passes a11y', async function() {
        await getPage().setViewport(viewportSize);
        await openDrawer(buttonId, drawerId);
        await a11yTest(null, true)();
      });
    });
  });

  describe('NxDrawer with Narrow Variant', function() {
    const browserSetup = setupBrowser('#/NxDrawerVariantExample', false);
    const { getPage, checkFullPageScreenshot } = browserSetup;
    const openDrawer = openDrawerFromPage(browserSetup);

    const buttonId = 'nx-drawer-variant-narrow-open-button';
    const drawerId = 'nx-drawer-variant-narrow';

    it('looks right', async function() {
      await getPage().setViewport(viewportSize);
      await openDrawer(buttonId, drawerId);
      await checkFullPageScreenshot();
    });
  });

  describe('NxDrawer with NxToast', function() {
    const browserSetup = setupBrowser('#/NxDrawerWithNxToastExample', false);
    const { getPage, checkFullPageScreenshot, waitAndGetElements, wait, isVisible } = browserSetup;
    const openDrawer = openDrawerFromPage(browserSetup);

    const buttonId = 'nx-drawer-with-nx-toast-open-button';
    const drawerId = 'nx-drawer-with-nx-toast';

    it('is positioned correctly', async function() {
      await getPage().setViewport(viewportSize);
      const [openSuccessToastButton, openErrorToastButton] = await waitAndGetElements(
          '#nx-toast-success-open-button', '#nx-toast-error-open-button'
      );

      await openSuccessToastButton.click();
      await openDrawer(buttonId, drawerId);
      await openErrorToastButton.click();

      await wait(500);
      await checkFullPageScreenshot();
    });

    it('stays open when the toast is closed', async function() {
      await getPage().setViewport(viewportSize);
      await openDrawer(buttonId, drawerId);
      const [drawer, openErrorToastButton] = await waitAndGetElements(
          '#nx-drawer-with-nx-toast',
          '#nx-toast-error-open-button'
      );
      await openErrorToastButton.click();
      await wait(500);

      const [toast] = await waitAndGetElements('.nx-toast');
      expect(await isVisible(toast)).toBe(true);

      const [closeToast] = await waitAndGetElements('.nx-toast .nx-btn--close');
      await closeToast.click();
      await wait(500);

      expect(await isVisible(drawer)).toBe(true);
      expect(await isVisible(toast)).toBe(false);
    });
  });

  describe('NxDrawer with Overflowing Form', function() {
    const browserSetup = setupBrowser('#/NxDrawerWithNxFormExample', false);
    const { getPage, checkFullPageScreenshot, a11yTest } = browserSetup;
    const openDrawer = openDrawerFromPage(browserSetup);

    const buttonId = 'nx-drawer-with-nx-form-overflowing-open-button';
    const drawerId = 'nx-drawer-with-nx-form-overflowing';

    it('looks right', async function() {
      await getPage().setViewport(viewportSize);
      await openDrawer(buttonId, drawerId);
      await checkFullPageScreenshot();
    });

    it('passes a11y', async function() {
      await getPage().setViewport(viewportSize);
      await openDrawer(buttonId, drawerId);
      await a11yTest(null, true)();
    });
  });

  describe('NxDrawer + NxDropdown ESC Closing Behavior', function() {
    const {
      getPage, isFocused, isInDocument, isVisible, waitAndGetElements, wait
    } = setupBrowser('#/NxDrawerEscExample', false);

    const waitForAnimation = () => wait(300);

    async function pressEsc() {
      const { keyboard } = getPage();
      await keyboard.press('Escape');
    }

    it('closes one layer per ESC press', async function() {
      const [openButton] = await waitAndGetElements('#nx-drawer-esc-open-button');

      await openButton.click();
      await waitForAnimation();

      const [drawer, dropdownToggle] = await waitAndGetElements(
          '#nx-drawer-esc',
          '#nx-drawer-esc .nx-dropdown__toggle'
      );

      expect(await isVisible(drawer)).toBe(true);
      expect(await isVisible(dropdownToggle)).toBe(true);

      await dropdownToggle.click();

      const [dropdownMenu] = await waitAndGetElements('#nx-drawer-esc .nx-dropdown-menu');

      expect(await isVisible(drawer)).toBe(true);
      expect(await isInDocument(dropdownMenu)).toBe(true);

      await pressEsc();
      await waitForAnimation();

      expect(await isVisible(drawer)).toBe(true);
      expect(await isInDocument(dropdownMenu)).toBe(false);
      expect(await isFocused(dropdownToggle)).toBe(true);

      await pressEsc();
      await waitForAnimation();

      expect(await isVisible(drawer)).toBe(false);
      expect(await isFocused(openButton)).toBe(true);
    });
  });
});
