/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');
const { Region, Target } = require('@applitools/eyes-webdriverio');

describe('NxTag', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxTag');
  });

  describe('Basic NxTag', function() {
    const selector = '#nx-tag-example .gallery-example-live';

    it('looks right', simpleTest(selector));
  });

  describe('NxTag with overflow has a tooltip', function() {
    const selector = '.gallery-example-live',
          tagSelector = `${selector} .nx-tag--pink`,

          // expected distance from top of element to the top of its tooltip
          tooltipHeightOffset = 45;

    it('looks right', async function() {
      const [tagElement, tooltipTagElement] = await Promise.all([browser.$(selector), browser.$(tagSelector)]);

      await tagElement.scrollIntoView({ block: 'center' });

      const { x, y, height, width } = await browser.getElementRect(tagElement.elementId);

      // hover the tag to activate its tooltip.
      await tooltipTagElement.moveTo();

      const screenshotRegion = new Region(x, y - tooltipHeightOffset, width, height + tooltipHeightOffset);
      await browser.eyesRegionSnapshot(null, Target.region(screenshotRegion));
    });
  });

  describe('NxSelectableTag', function() {
    const selector = '#nx-selectable-tag-example .nx-tag:first-child';

    it('has a grey border and grey background by default', simpleTest(selector));
    it('has a dark grey border when hovered', hoverTest(selector));
    it('has a light blue glow and light blue border when focused', focusTest(selector));
    it('has a light blue glow and dark grey border when focused and hovered', focusAndHoverTest(selector));

    it('has a blue background and white indicator when clicked', async function() {
      const targetElement = await browser.$(selector);

      await targetElement.click();

      try {
        await browser.eyesRegionSnapshot(null, Target.region(targetElement));
      }
      finally {
        // click again to reset the state
        await targetElement.click();
      }
    });
  });
});
