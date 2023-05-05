/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxIconDropdown', function() {
  const {
    clickTest,
    focusTest,
    focusAndHoverTest,
    hoverTest,
    simpleTest,
    waitAndGetElements,
    moveMouseAway,
    checkScreenshotCoordinates,
    getPage,
    a11yTest,
    wait
  } = setupBrowser('#/pages/Icon%20Dropdown');

  const defaultSelector = '#nx-icon-dropdown-simple-example .nx-icon-dropdown',
      iconBtnSelector = `${defaultSelector} .nx-icon-dropdown__toggle`;

  describe('Default NxIconDropdown when closed', function() {
    it('has no border or background by default', simpleTest(iconBtnSelector));
    it('has a grey background when hovered', hoverTest(iconBtnSelector));
    it('has a blue border when focused', focusTest(iconBtnSelector));
    it('has a blue border and grey background when focused and hovered', focusAndHoverTest(iconBtnSelector));
    it('has a light grey background when clicked', clickTest(iconBtnSelector));
  });

  describe('Default NxIconDropdown when open', function() {
    beforeEach(async function() {
      const [button, sidebar] = await waitAndGetElements(
          defaultSelector + ' .nx-icon-dropdown__toggle',
          '.nx-page-sidebar'
      );

      await button.click();

      // hide sidebar so changes to it don't interfere with the background of the image
      await sidebar.evaluate(el => { el.style.visibility = 'hidden'; });
    });

    it('has a blue border and light blue background with expanded menu', async function() {
      const [targetElement] = await waitAndGetElements(defaultSelector),
          page = getPage();

      await moveMouseAway();

      const { x, y } = await targetElement.boundingBox(),
          pageScrollY = await page.evaluate(() => window.scrollY),
          pageScrollX = await page.evaluate(() => window.scrollX);

      await checkScreenshotCoordinates(x + pageScrollX - 208, y + pageScrollY, 251, 346);
    });

    it('has a light blue background with expanded menu when not focused', async function() {
      const dropdownMenuItemSelector = `${defaultSelector} .nx-dropdown-menu .nx-dropdown-link:first-child`,
          [targetElement, dropdownMenuItem] = await waitAndGetElements(defaultSelector, dropdownMenuItemSelector),
          page = getPage();

      dropdownMenuItem.focus();
      await moveMouseAway();

      const { x, y } = await targetElement.boundingBox(),
          pageScrollY = await page.evaluate(() => window.scrollY),
          pageScrollX = await page.evaluate(() => window.scrollX);

      await checkScreenshotCoordinates(x + pageScrollX - 208, y + pageScrollY, 251, 346);
    });

    it('has a grey background and blue border with expanded menu when hovered and focused', async function() {
      const dropdownToggleSelector = `${defaultSelector} .nx-icon-dropdown__toggle`,
          [targetElement, dropdownBtn] = await waitAndGetElements(defaultSelector, dropdownToggleSelector),
          page = getPage();

      await dropdownBtn.hover();

      const { x, y } = await targetElement.boundingBox(),
          pageScrollY = await page.evaluate(() => window.scrollY),
          pageScrollX = await page.evaluate(() => window.scrollX);

      await checkScreenshotCoordinates(x + pageScrollX - 208, y + pageScrollY, 251, 346);
    });

    it('has a grey background with expanded menu when hovered', async function() {
      const dropdownMenuItemSelector = `${defaultSelector} .nx-dropdown-menu .nx-dropdown-link:first-child`,
          dropdownToggleSelector = `${defaultSelector} .nx-icon-dropdown__toggle`,
          [targetElement, dropdownMenuItem, dropdownBtn] =
            await waitAndGetElements(defaultSelector, dropdownMenuItemSelector, dropdownToggleSelector),
          page = getPage();

      await dropdownMenuItem.focus();
      await dropdownBtn.hover();

      const { x, y } = await targetElement.boundingBox(),
          pageScrollY = await page.evaluate(() => window.scrollY),
          pageScrollX = await page.evaluate(() => window.scrollX);

      await checkScreenshotCoordinates(x + pageScrollX - 208, y + pageScrollY, 251, 346);
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

      await checkScreenshotCoordinates(x + pageScrollX - 208, y + pageScrollY, 350, 346);
    });
  });

  describe('NxIconDropdown is spaced correctly inside nx-btn-bar', function() {
    const selector = '#nx-icon-dropdown-btn-bar-example .nx-btn-bar';

    it('looks right', simpleTest(selector));
  });

  describe('Disabled NxIconDropdown', function() {
    const selector = '#nx-icon-dropdown-disabled-example .nx-icon-dropdown';

    it('looks disabled', simpleTest(selector));
  });

  it('passes a11y checks', a11yTest());
});
