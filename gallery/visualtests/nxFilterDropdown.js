/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Region, Target } = require('@applitools/eyes-webdriverio');
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxFilterDropdown', function() {
  beforeEach(async function() {
    await browser.url('#/pages/Filter Dropdown');
  });

  const defaultSelector = '#nx-filter-dropdown-example .nx-table',
      dropdownSelector = `${defaultSelector} .nx-filter-dropdown`;

  describe('NxFilterDropdown when closed', function() {
    it('has a light grey border by default', simpleTest(defaultSelector));
    it('has a dark grey border when hovered', hoverTest(defaultSelector, dropdownSelector));
    it('has a light blue border when focused', focusTest(defaultSelector, dropdownSelector));
    it('has a dark grey border when focused and hovered', focusAndHoverTest(defaultSelector, dropdownSelector));
    it('has a dark grey border and light grey background when clicked', clickTest(defaultSelector, dropdownSelector));
  });

  describe('NxFilterDropdown when open', function() {
    beforeEach(async function() {
      const button = await browser.$(dropdownSelector + ' .nx-dropdown__toggle');

      await button.scrollIntoView({ block: 'center' });
      await button.click();
    });

    it('has a dark button border with expanded menu', async function() {
      const targetElement = await browser.$(dropdownSelector);

      await targetElement.scrollIntoView({ block: 'center' });
      await targetElement.moveTo({ xOffset: -10, yOffset: -10 });
      await browser.execute(function(el) {
        el.blur();
      }, targetElement);

      const { x, y } = await targetElement.getLocation();
      const region = new Region(parseInt(x, 10), parseInt(y, 10), 251, 376);

      await browser.eyesRegionSnapshot(null, Target.region(region));
    });

    it('has focus, hover, and selection styles for checkboxes', async function() {
      const [cb1, cb2] = await Promise.all([
        browser.$(`${dropdownSelector} .nx-checkbox:first-child`),
        browser.$(`${dropdownSelector} .nx-checkbox:nth-child(2)`)
      ]);

      // after this cb1 should be selected and focused, cb2 should be hovered
      await cb1.scrollIntoView({ block: 'center' });
      await cb1.click();
      await cb2.moveTo();

      const { x, y } = await targetElement.getLocation();
      const region = new Region(parseInt(x, 10), parseInt(y, 10), 251, 376);

      await browser.eyesRegionSnapshot(null, Target.region(region));
    });

    describe('reset button', function() {
      const resetBtnSelector = `${dropdownSelector} .nx-filter-dropdown__reset`;

      beforeEach(async function() {
        const resetBtn = await browser.$(resetBtnSelector);
        await resetBtn.scrollIntoView();
      });

      it('looks like a link', simpleTest(dropdownSelector));
      it('has lighter blue text when clicked', clickTest(dropdownSelector, resetBtnSelector));
      it('has darker text when hovered', hoverTest(dropdownSelector, resetBtnSelector));
      it('has a focus border around the Reset icon and text when focused',
          focusTest(dropdownSelector, resetBtnSelector));
    });
  });
});
