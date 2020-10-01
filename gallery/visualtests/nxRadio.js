/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');
const { Target } = require('@applitools/eyes-webdriverio');

describe('NxRadio', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxRadio');
  });

  const selector = '#nx-radio-example .gallery-example-live label:nth-of-type(4)',
      otherRadioSelector = '#nx-radio-example .gallery-example-live label:nth-of-type(1)',
      disabledSelector = '#nx-radio-example .gallery-example-live label:nth-of-type(2)';

  describe('Default NxRadio', function() {

    it('has a light grey border and white background by default', simpleTest(selector));
    it('has a black border when hovered', hoverTest(selector));
    it('has a thick blue border and white background when clicked', async function() {
      const [targetElement, otherElement] = await Promise.all([browser.$(selector), browser.$(otherRadioSelector)]);

      await targetElement.scrollIntoView({ block: 'center' });
      await targetElement.click();

      try {
        await browser.eyesRegionSnapshot(null, Target.region(targetElement));
      }
      finally {
        // click away to reset the state
        await otherElement.click();
      }
    });

    it('has a thick blue border, white background, and glow when clicked and focused', async function() {
      const focusSelector = `${selector} input`,
          [targetElement, otherElement, focusElement] =
            await Promise.all([browser.$(selector), browser.$(otherRadioSelector), browser.$(focusSelector)]);

      await targetElement.scrollIntoView({ block: 'center' });
      await targetElement.click();
      await targetElement.moveTo({ xOffset: -10, yOffset: -10 });
      await browser.execute(function(el) {
        el.focus();
      }, focusElement);

      try {
        await browser.eyesRegionSnapshot(null, Target.region(targetElement));
      }
      finally {
        // click again to reset the state
        await otherElement.click();
      }
    });

    it('has a thick blue border and white background when clicked, focused, and hovered', async function() {
      const focusSelector = `${selector} input`,
          [targetElement, otherElement, focusElement] =
            await Promise.all([browser.$(selector), browser.$(otherRadioSelector), browser.$(focusSelector)]);

      await targetElement.scrollIntoView({ block: 'center' });
      await targetElement.click();
      await targetElement.moveTo();
      await browser.execute(function(el) {
        el.focus();
      }, focusElement);

      try {
        await browser.eyesRegionSnapshot(null, Target.region(targetElement));
      }
      finally {
        // click again to reset the state
        await otherElement.click();
      }
    });

    it('has a light blue border and glow when focused', focusTest(selector));
    it('has a dark border when focused and hovered', focusAndHoverTest(selector));
  });

  describe('Attribute-Disabled NxRadio', function() {
    it('looks disabled by default', simpleTest(disabledSelector));
    it('looks disabled when hovered', hoverTest(disabledSelector));
  });
});
