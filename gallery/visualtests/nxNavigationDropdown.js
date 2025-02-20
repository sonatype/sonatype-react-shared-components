/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxNavigationDropdown', function() {
  const {
    clickTest,
    focusTest,
    focusAndHoverTest,
    hoverTest,
    simpleTest,
    waitAndGetElements,
    moveMouseAway,
    blurElement,
    checkScreenshotCoordinates,
    getPage,
    a11yTest,
    wait
  } = setupBrowser('#/pages/Navigation%20Dropdown');

  const defaultSelector = '#nx-navigation-dropdown-simple-example .nx-navigation-dropdown',
      iconBtnSelector = `${defaultSelector} .nx-icon-dropdown__toggle`,
      linkMenuItemSelector = `${defaultSelector} .nx-dropdown-menu .nx-text-link:first-child`,
      buttonMenuItemSelector = `${defaultSelector} .nx-dropdown-menu .nx-dropdown-button:nth-child(3)`,
      disabledDropdownMenuItemSelector = `${defaultSelector} .nx-dropdown-menu .nx-dropdown-button:nth-child(6)`,
      selectedDropdownMenuItemSelector = `${defaultSelector} .nx-dropdown-menu .nx-dropdown-button:nth-child(4)`;

  describe('when closed', function() {
    it('has no border or background by default', simpleTest(iconBtnSelector));
    it('has a grey background when hovered', hoverTest(iconBtnSelector));
    it('has a blue border when focused', focusTest(iconBtnSelector));
    it('has a blue border and grey background when focused and hovered', focusAndHoverTest(iconBtnSelector));
    it('has a light grey background when clicked', clickTest(iconBtnSelector));
  });

  describe('when open', function() {
    const dropdownToggleSelector = `${defaultSelector} .nx-icon-dropdown__toggle`;

    beforeEach(async function() {
      const [button, sidebar] = await waitAndGetElements(dropdownToggleSelector, '.nx-page-sidebar');

      await button.click();

      // hide sidebar so changes to it don't interfere with the background of the image
      await sidebar.evaluate(el => { el.style.visibility = 'hidden'; });
    });

    it('has a gradient background with expanded menu when not focused', async function() {
      const [targetElement, dropdownBtn] = await waitAndGetElements(defaultSelector, dropdownToggleSelector),
          page = getPage();

      await blurElement(dropdownBtn);
      await moveMouseAway();

      const { x, y } = await targetElement.boundingBox(),
          pageScrollY = await page.evaluate(() => window.scrollY),
          pageScrollX = await page.evaluate(() => window.scrollX);

      await checkScreenshotCoordinates(x + pageScrollX - 208, y + pageScrollY, 255, 348);
    });

    it('has a gradient background and white inset border with expanded menu when hovered and focused',
        async function() {
          const [targetElement] = await waitAndGetElements(defaultSelector),
              page = getPage();

          await moveMouseAway();

          const { x, y } = await targetElement.boundingBox(),
              pageScrollY = await page.evaluate(() => window.scrollY),
              pageScrollX = await page.evaluate(() => window.scrollX);

          await checkScreenshotCoordinates(x + pageScrollX - 208, y + pageScrollY, 255, 348);
        }
    );

    it('has a gradient background with expanded menu when hovered', async function() {
      const [targetElement, dropdownBtn] = await waitAndGetElements(defaultSelector, dropdownToggleSelector),
          page = getPage();

      await blurElement(dropdownBtn);
      await dropdownBtn.hover();

      const { x, y } = await targetElement.boundingBox(),
          pageScrollY = await page.evaluate(() => window.scrollY),
          pageScrollX = await page.evaluate(() => window.scrollX);

      await checkScreenshotCoordinates(x + pageScrollX - 208, y + pageScrollY, 255, 348);
    });

    it('shows overflow tooltip on dropdown menu item', async function() {
      const [example, menuItem] = await waitAndGetElements(
              defaultSelector,
              `${defaultSelector} .nx-dropdown-link:nth-child(2)`
          ),
          page = getPage();

      await menuItem.hover();
      await wait(500);

      const { x, y } = await example.boundingBox(),
          pageScrollY = await page.evaluate(() => window.scrollY),
          pageScrollX = await page.evaluate(() => window.scrollX);

      await checkScreenshotCoordinates(x + pageScrollX - 212, y + pageScrollY, 366, 348);
    });

    describe('link menu item', function() {
      it('has no background and dark text by default', simpleTest(linkMenuItemSelector));
      it('has a grey background on hover', hoverTest(linkMenuItemSelector));
      it('has a blue border on focus', focusTest(linkMenuItemSelector));
      it('has a blue border and grep background on focus and hover', focusAndHoverTest(linkMenuItemSelector));
      it('has a light grey background on click', clickTest(linkMenuItemSelector));
    });

    describe('button menu item', function() {
      it('has no background and dark text by default', simpleTest(buttonMenuItemSelector));
      it('has a grey background on hover', hoverTest(buttonMenuItemSelector));
      it('has a blue border on focus', focusTest(buttonMenuItemSelector));
      it('has a blue border and grep background on focus and hover', focusAndHoverTest(buttonMenuItemSelector));
      it('has a light grey background on click', clickTest(buttonMenuItemSelector));
    });

    describe('disabled menu item', function() {
      it('is greyed out by default', simpleTest(disabledDropdownMenuItemSelector));
      it('is greyed out on hover', hoverTest(disabledDropdownMenuItemSelector));
      it('is greyed out on focus', focusTest(disabledDropdownMenuItemSelector));
      it('is greyed out on focus and hover', focusAndHoverTest(disabledDropdownMenuItemSelector));
      it('is greyed out on click', clickTest(disabledDropdownMenuItemSelector));
    });

    describe('selected menu item', function() {
      it('has a gradient background and light text by default', simpleTest(selectedDropdownMenuItemSelector));
      it('has a gradient background background on hover', hoverTest(selectedDropdownMenuItemSelector));
      it('has an inset white border on focus', focusTest(selectedDropdownMenuItemSelector));
      it('has an inset white border on focus and hover', focusAndHoverTest(selectedDropdownMenuItemSelector));
      it('has a gradient background on click', clickTest(selectedDropdownMenuItemSelector));
    });
  });

  describe('with a menu header', function() {
    const selector = '#nx-navigation-dropdown-header-example .nx-navigation-dropdown',
        dropdownToggleSelector = `${selector} .nx-icon-dropdown__toggle`;

    it('looks right', async function() {
      const [dropdown, button, sidebar] =
            await waitAndGetElements(selector, dropdownToggleSelector, '.nx-page-sidebar'),
          page = getPage();

      await button.click();

      // hide sidebar so changes to it don't interfere with the background of the image
      await sidebar.evaluate(el => { el.style.visibility = 'hidden'; });

      const { x, y } = await dropdown.boundingBox(),
          pageScrollY = await page.evaluate(() => window.scrollY),
          pageScrollX = await page.evaluate(() => window.scrollX);

      await checkScreenshotCoordinates(x + pageScrollX - 208, y + pageScrollY, 255, 346);
    });
  });

  it('passes a11y checks', a11yTest());
});
