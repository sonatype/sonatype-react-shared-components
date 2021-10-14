/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxRadio', function() {
  const { focusTest, focusAndHoverTest, hoverTest, simpleTest } = setupBrowser('#/pages/NxRadio');

  const selector = '#nx-radio-example .gallery-example-live label:nth-of-type(3)',
      otherRadioSelector = '#nx-radio-example .gallery-example-live label:nth-of-type(1)',
      disabledSelector = '#nx-radio-disabled-example .gallery-example-live label:nth-of-type(1)',
      disabledCheckedSelector = '#nx-radio-disabled-example .gallery-example-live label:nth-of-type(2)';

  describe('Default NxRadio', function() {

    it('has a light grey border and white background by default', simpleTest(selector));
    it('has a black border when hovered', hoverTest(selector));
    it('has a thick blue border and white background when clicked', async function() {
      const inputSelector = `${selector} input`;

      const [targetElement, inputElement] = await waitAndGetElements(selector, inputSelector);

      await targetElement.click();
      await blurElement(inputElement);

      await checkScreenshot(targetElement);
    });

    it(`has a thick blue border, white background, with a light blue outer border and glow
      when clicked and focused`, async function() {
      const focusSelector = `${selector} input`,
          [targetElement, focusElement] = await waitAndGetElements(selector, focusSelector);

      await targetElement.click();
      await page.mouse.move(0, 0);
      await focusElement.focus();

      await checkScreenshot(targetElement);
    });

    it(`has a thick blue border and white background with a light blue outer border
      when clicked, focused, and hovered`, async function() {
      const focusSelector = `${selector} input`,
          [targetElement, focusElement] = await waitAndGetElements(selector, focusSelector),
          targetElementBox = targetElement.boundingBox(),
          targetElementCenter = {
            x: targetElementBox.x + (targetElementBox.width / 2),
            y: targetElementBox.y + (targetElementBox.height / 2)
          };

      await targetElement.click();
      await targetElement.moveTo(targetElementCenter.x, targetElementCenter.y);
      await focusElement.focus();

      await checkScreenshot(targetElement);
    });

    it('has a light blue outer border and glow when focused', focusTest(selector));
    it('has a light blue outer border and a dark border when focused and hovered', focusAndHoverTest(selector));
  });

  describe('Attribute-Disabled NxRadio', function() {
    it('looks disabled by default', simpleTest(disabledSelector));
    it('looks disabled when hovered', hoverTest(disabledSelector));
  });

  describe('Attribute-Disabled-Checked NxRadio', function() {
    it('looks disabled by default', simpleTest(disabledCheckedSelector));
    it('looks disabled when hovered', hoverTest(disabledCheckedSelector));
  });
});
