/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxToggle', function() {
  const { focusTest, focusAndHoverTest, hoverTest, simpleTest, waitAndGetElements } = setupBrowser('#/pages/NxToggle');

  const selector = '#nx-toggle-example .gallery-example-live label:nth-of-type(2)',
      disabledSelector = '#nx-toggle-example .gallery-example-live label:nth-of-type(4)',
      gaplessSelector = '#nx-toggle-gapless-example .gallery-example-live';

  describe('Default NxToggle', function() {
    it('has a blue border, blue indicator, and white background by default', simpleTest(selector));
    it('has a black border when hovered', hoverTest(selector));

    it('has a blue background and white indicator when clicked', async function() {
      const blurSelector = `${selector} input`,
          [targetElement, inputElement] = await waitAndGetElements(selector, blurSelector);

      await targetElement.click();
      await moveMouseAway();
      await blurElement(inputElement);

      await checkScreenshot(targetElement);
    });

    it(`has a blue background, white indicator, light outer blue border and glow
      when clicked and focused`, async function() {
      const focusSelector = `${selector} input`,
          [targetElement, inputElement] = await waitAndGetElements(selector, focusSelector);

      await targetElement.click();
      await moveMouseAway();

      await checkScreenshot(targetElement);
    });

    it(`dark border, blue background and white indicator with light outer blue border
      when clicked, focused, and hovered`, async function() {
      const focusSelector = `${selector} input`,
          [targetElement, inputElement] = await waitAndGetElements(selector, inputSelector);

      await targetElement.click();
      await targetElement.hover();

        await checkScreenshot(targetElement);
    });

    it('has a light blue outer border and glow when focused', focusTest(selector));
    it('has a dark border and a light blue outer border when focused and hovered', focusAndHoverTest(selector));
  });

  describe('Attribute-Disabled NxToggle', function() {
    it('looks disabled by default', simpleTest(disabledSelector));
    it('looks disabled when hovered', hoverTest(disabledSelector));
  });
});
