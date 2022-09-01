/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxDrawer', function() {
  const viewportSize = { width: 1366, height: 1000 };
  const openDrawerFromPage = (waitAndGetElements, wait) => async (drawerId, buttonId) => {
    const openDrawerBtnSelector = `#${buttonId}`;

    const [openDrawerBtn] = await waitAndGetElements(openDrawerBtnSelector);

    await openDrawerBtn.click();

    await waitAndGetElements(`#${drawerId}`);

    await wait(200);
  };

  describe('NxDrawer with Title, Footer, and non-overflowing content', function() {
    const { getPage, checkFullPageScreenshot, a11yTest, waitAndGetElements, wait } =
      setupBrowser('#/NxDrawerExample', false);

    const drawerId = 'nx-drawer-with-footer';
    const openButtonId = 'nx-drawer-with-footer-open-button';

    const openDrawer = openDrawerFromPage(waitAndGetElements, wait);

    it('looks right', async function() {
      await getPage().setViewport(viewportSize);
      await openDrawer(drawerId, openButtonId);
      await checkFullPageScreenshot();
    });

    it('passes a11y', async function() {
      await getPage().setViewport(viewportSize);
      await openDrawer(drawerId, openButtonId);
      await a11yTest();
    });
  });

  describe('NxDrawer With Subtitle Or Description Example', function() {
    const { getPage, checkFullPageScreenshot, a11yTest, waitAndGetElements, wait } =
      setupBrowser('#/NxDrawerWithSubtitleOrDescriptionExample', false);

    const openDrawer = openDrawerFromPage(waitAndGetElements, wait);

    describe('with Subtitle', function() {
      const drawerId = 'nx-drawer-with-subtitle';
      const openButtonId = 'nx-drawer-with-subtitle-open-button';

      it('looks right', async function() {
        await getPage().setViewport(viewportSize);
        await openDrawer(drawerId, openButtonId);
        await checkFullPageScreenshot();
      });

      it('passes a11y', async function() {
        await getPage().setViewport(viewportSize);
        await openDrawer(drawerId, openButtonId);
        await a11yTest();
      });
    });

    describe('with Description', function() {
      const drawerId = 'nx-drawer-with-description';
      const openButtonId = 'nx-drawer-with-description-open-button';

      it('looks right', async function() {
        await getPage().setViewport(viewportSize);
        await openDrawer(drawerId, openButtonId);
        await checkFullPageScreenshot();
      });

      it('passes a11y', async function() {
        await getPage().setViewport(viewportSize);
        await openDrawer(drawerId, openButtonId);
        await a11yTest();
      });
    });

    describe('with Both', function() {
      const drawerId = 'nx-drawer-with-subtitle-and-description';
      const openButtonId = 'nx-drawer-with-subtitle-and-description-open-button';

      it('looks right', async function() {
        await getPage().setViewport(viewportSize);
        await openDrawer(drawerId, openButtonId);
        await checkFullPageScreenshot();
      });

      it('passes a11y', async function() {
        await getPage().setViewport(viewportSize);
        await openDrawer(drawerId, openButtonId);
        await a11yTest();
      });
    });
  });

  describe('NxDrawer with Narrow Variant', function() {
    const { getPage, checkFullPageScreenshot, a11yTest, waitAndGetElements, wait } =
      setupBrowser('#/NxDrawerVariantExample', false);

    const drawerId = 'nx-drawer-variant-narrow';
    const openButtonId = 'nx-drawer-variant-narrow-open-button';

    const openDrawer = openDrawerFromPage(waitAndGetElements, wait);

    it('looks right', async function() {
      await getPage().setViewport(viewportSize);
      await openDrawer(drawerId, openButtonId);
      await checkFullPageScreenshot();
    });

    it('passes a11y', async function() {
      await getPage().setViewport(viewportSize);
      await openDrawer(drawerId, openButtonId);
      await a11yTest();
    });
  });

  describe('NxDrawer with Overflowing Form', function() {
    const { getPage, checkFullPageScreenshot, a11yTest, waitAndGetElements, wait } =
      setupBrowser('#/NxDrawerWithNxFormExample', false);

    const drawerId = 'nx-drawer-with-nx-form-overflowing';
    const openButtonId = 'nx-drawer-with-nx-form-overflowing-open-button';

    const openDrawer = openDrawerFromPage(waitAndGetElements, wait);

    it('looks right', async function() {
      await getPage().setViewport(viewportSize);
      await openDrawer(drawerId, openButtonId);
      await checkFullPageScreenshot();
    });

    it('passes a11y', async function() {
      await getPage().setViewport(viewportSize);
      await openDrawer(drawerId, openButtonId);
      await a11yTest();
    });
  });

  describe('NxDrawer + NxDropdown ESC Closing Behavior', function() {
    const { getPage, isFocused, isInDocument, waitAndGetElements, wait } =
      setupBrowser('#/NxDrawerEscExample', false);

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

      expect(await isInDocument(drawer)).toBe(true);

      expect(await isInDocument(dropdownMenu)).toBe(false);

      expect(await isFocused(dropdownToggle)).toBe(true);

      await pressEsc();

      await wait(200);

      expect(await isInDocument(drawer)).toBe(false);

      expect(await isFocused(openButton)).toBe(true);
    });
  });
});
