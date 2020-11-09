/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Region, Target } = require('@applitools/eyes-webdriverio');
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxDropdown', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxDropdown');
  });

  const defaultSelector = '#nx-dropdown-scrolling-example .nx-dropdown';

  describe('Default NxDropdown when closed', function() {

    it('has a light grey border by default', simpleTest(defaultSelector));
    it('has a dark grey border when hovered', hoverTest(defaultSelector));
    it('has a light blue border when focused', focusTest(defaultSelector));
    it('has a dark grey border when focused and hovered', focusAndHoverTest(defaultSelector));
    it('has a dark grey border and light grey background when clicked', clickTest(defaultSelector));
  });

  describe('Default NxDropdown when open', function() {
    beforeEach(async function() {
      const button = await browser.$(defaultSelector + ' .nx-dropdown__toggle');

      // for some weird reason the test infra requires you to click it twice
      await button.scrollIntoView({ block: 'center' });
      await button.click();
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

  describe('Disabled NxDropdown', function() {
    const selector = '#nx-dropdown-disabled-example .nx-dropdown';

    it('looks disabled', simpleTest(selector));
  });

  describe('NxDropdown links', function() {
    const selector = '#nx-dropdown-links-example .nx-dropdown';

    beforeEach(async function() {
      const button = await browser.$(selector + ' .nx-dropdown__toggle');

      await button.scrollIntoView({ block: 'center' });
      await button.click();
      await button.click();
      await button.click();
    });

    it('has links that look right', async function() {
      const targetElement = await browser.$(selector);

      await targetElement.scrollIntoView({ block: 'center' });
      await targetElement.moveTo({ xOffset: -10, yOffset: -10 });

      const { x, y } = await targetElement.getLocation();
      const region = new Region(parseInt(x, 10), parseInt(y, 10), 251, 153);

      await browser.eyesRegionSnapshot(null, Target.region(region));
    });
  });

  describe('NxDropdown with icon', function() {
    const selector = '#nx-dropdown-custom-label-example .nx-dropdown';

    beforeEach(async function() {
      const button = await browser.$(selector + ' .nx-dropdown__toggle');

      await button.scrollIntoView({ block: 'center' });
      await button.click();
      await button.click();
      await button.click();
    });

    it('looks right', async function() {
      const targetElement = await browser.$(selector);

      await targetElement.scrollIntoView({ block: 'center' });
      await targetElement.moveTo({ xOffset: -10, yOffset: -10 });

      const { x, y } = await targetElement.getLocation();
      const region = new Region(parseInt(x, 10), parseInt(y, 10), 251, 88);

      await browser.eyesRegionSnapshot(null, Target.region(region));
    });

  });

  describe('NxDropdown with right-floating buttons', function() {
    const selector = '#nx-dropdown-right-buttons-example .nx-dropdown';

    beforeEach(async function() {
      const button = await browser.$(selector + ' .nx-dropdown__toggle');

      // for some weird reason the test infra requires you to click it twice
      await button.scrollIntoView({ block: 'center' });
      await button.click();
      await button.click();
      await button.click();
    });

    it('looks right', async function() {
      const targetElement = await browser.$(selector);

      await targetElement.scrollIntoView({ block: 'center' });
      await targetElement.moveTo({ xOffset: -10, yOffset: -10 });

      const { x, y } = await targetElement.getLocation();
      const region = new Region(parseInt(x, 10), parseInt(y, 10), 251, 281);

      await browser.eyesRegionSnapshot(null, Target.region(region));
    });
  });
});
