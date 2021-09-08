/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Region, Target } = require('@applitools/eyes-webdriverio');
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxIconDropdown', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxIconDropdown');
  });

  const defaultSelector = '#nx-IconDropdown-links-example .nx-icon-dropdown';

  describe('Default NxIconDropdown when closed', function() {

    it('has an indigo border by default', simpleTest(defaultSelector));
    it('has a dark grey border when hovered', hoverTest(defaultSelector));
    it('has a light blue border when focused', focusTest(defaultSelector));
    it('has a dark grey border when focused and hovered', focusAndHoverTest(defaultSelector));
    it('has a dark grey border and light grey background when clicked', clickTest(defaultSelector));
  });

  describe('Default NxIconDropdown when open', function() {
    beforeEach(async function() {
      const button = await browser.$(defaultSelector + ' .nx-icon-dropdown__toggle');

      await button.scrollIntoView({ block: 'center' });
      await button.click();
    });

    it('has a dark blue button border with expanded menu', async function() {
      const targetElement = await browser.$(defaultSelector);

      await targetElement.scrollIntoView({ block: 'center' });
      await targetElement.moveTo({ xOffset: -10, yOffset: -10 });

      const { x, y } = await targetElement.getLocation();
      const region = new Region(parseInt(x, 10), parseInt(y, 10), 251, 376);

      await browser.eyesRegionSnapshot(null, Target.region(region));
    });
  });

  describe('Disabled NxIconDropdown', function() {
    const selector = '#nx-IconDropdown-disabled-example .nx-icon-dropdown';

    it('looks disabled', simpleTest(selector));
  });
});
