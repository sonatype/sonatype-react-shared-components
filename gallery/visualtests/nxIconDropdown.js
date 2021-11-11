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
    checkScreenshot
  } = setupBrowser('#/pages/NxIconDropdown');

  const defaultSelector = '#nx-icon-dropdown-simple-example .nx-icon-dropdown';

  describe('Default NxIconDropdown when closed', function() {

    it('has no border by default', simpleTest(defaultSelector + ' .nx-icon-dropdown__toggle'));
    it('has a dark grey border when hovered', hoverTest(defaultSelector + ' .nx-icon-dropdown__toggle'));
    it('has a light blue border when focused', focusTest(defaultSelector + ' .nx-icon-dropdown__toggle'));
    it('has a blue border and blue glow when focused and hovered',
        focusAndHoverTest(defaultSelector + ' .nx-icon-dropdown__toggle'));
    it('has a dark grey border and light grey background when clicked',
        clickTest(defaultSelector + ' .nx-icon-dropdown__toggle'));
  });

  describe('Default NxIconDropdown when open', function() {
    beforeEach(async function() {
      const [button] = await waitAndGetElements(defaultSelector + ' .nx-icon-dropdown__toggle');

      await button.click();
    });

    it('has a dark grey button border with expanded menu', async function() {
      const [targetElement] = await waitAndGetElements(defaultSelector);

      await moveMouseAway();

      const { x, y, width, height } = await element.boundingBox(),
          pageScrollY = await page.evaluate(() => window.scrollY),
          pageScrollX = await page.evaluate(() => window.scrollX);

      await checkScreenshotCoordinates(x + pageScrollX - 208, y + pageScrollY, 251, 346);
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
});
