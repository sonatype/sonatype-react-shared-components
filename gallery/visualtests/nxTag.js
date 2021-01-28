/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxTag', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxTag');
  });

  describe('Basic NxTag', function() {
    const selector = '#nx-tag-example';

    it('looks right', simpleTest(selector));
  });

  describe('Show NxTag overflow tooltip', function() {
    const item2Selector = '#nx-tag-example .nx-tag:nth-child(3)', tooltipSelector = '.nx-tooltip';
    it('displays a tooltip with the full text when an overflowing tag is hovered', async function() {
      const item2 = await browser.$(item2Selector);
  
      await item2.scrollIntoView({ block: 'center' });
      await item2.moveTo();
      await browser.pause(1000);
  
      const tooltipEl = await browser.$(tooltipSelector);
  
      expect(await tooltipEl.isDisplayed()).toBe(true);
      expect(await tooltipEl.getText()).toBe( 'Pink - demonstrate that the tag overflows at 320px' );
    });
  });


  describe('NxTag Selectable', function() {
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
