/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { clickedTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxCheckbox', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxCheckbox');
  });

  describe('Default NxCheckbox', function() {
    const selector = '#nx-checkbox-default-example';

    it('has a light grey border and white background by default', simpleTest(selector));
    it('has a black border when hovered', hoverTest(selector));

    it('has a blue background and white checkmark when clicked', function() {
      const targetElement = browser.$(elementSelector);

      await targetElement.scrollIntoView({ block: 'center' });
      await targetElement.click();

      try {
        await browser.eyesRegionSnapshot(null, Target.region(targetElement));
      }
      finally {
        // click again to reset the state
        await targetElement.click();
      }
    });

    it('has a blue background, white checkmark, and glow when clicked and focused', function() {
      const targetElement = browser.$(elementSelector);

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
        await targetElement.click();
      }
    });

    it('has a blue background and white checkmark when clicked, focused, and hovered', function() {
      const targetElement = browser.$(elementSelector);

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
        await targetElement.click();
      }
    });

    it('has a light blue border and glow when focused', focusTest(selector));
    it('has a light blue border and glow when focused and hovered', focusAndHoverTest(selector));
  });

  describe('Attribute-Disabled NxCheckbox', function() {
    const selector = '#nx-checkbox-disabled-example';

    it('looks disabled by default', simpleTest(selector));
    it('looks disabled when hovered', hoverTest(selector));
    it('looks disabled when clicked', clickedTest(selector));
  });
});
