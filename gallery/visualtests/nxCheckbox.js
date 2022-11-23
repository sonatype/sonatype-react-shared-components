/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxCheckbox', function() {
  const {
    focusTest,
    focusAndHoverTest,
    hoverTest,
    simpleTest,
    a11yTest,
    waitAndGetElements,
    moveMouseAway,
    blurElement,
    checkScreenshot
  } = setupBrowser('#/pages/Checkbox');

  const selector = '#nx-checkbox-example .gallery-example-live label:nth-of-type(3)',
      disabledSelector = '#nx-checkbox-example .gallery-example-live label:nth-of-type(4)';

  describe('Default NxCheckbox', function() {
    it('has a light grey border and white background by default', simpleTest(selector));
    it('has a black border when hovered', hoverTest(selector));

    it('has a blue background and white checkmark when clicked', async function() {
      const inputSelector = `${selector} input`;

      const [targetElement, inputElement] = await waitAndGetElements(selector, inputSelector);

      await targetElement.click();
      await blurElement(inputElement);

      await checkScreenshot(targetElement);
    });

    it(`has a blue background, white checkmark, a light blue outer border,
      and glow when clicked and focused`, async function() {
      const focusSelector = `${selector} input`,
          [targetElement, focusElement] = await waitAndGetElements(selector, focusSelector);

      await targetElement.click();
      await moveMouseAway();
      await focusElement.focus();

      await checkScreenshot(targetElement);
    });

    it(`has a blue background and white checkmark with a light blue outer border
      when clicked, focused, and hovered`, async function() {
      const focusSelector = `${selector} input`,
          [targetElement, focusElement] = await waitAndGetElements(selector, focusSelector);

      await targetElement.click();
      await focusElement.focus();
      await targetElement.hover();

      await checkScreenshot(targetElement);
    });

    it('has a light blue outer border and glow when focused', focusTest(selector));
    it('has a light blue outer border and a dark border when focused and hovered', focusAndHoverTest(selector));
    it('shows overflow tooltips', hoverTest('#nx-checkbox-example .gallery-example-live', selector, true));
  });

  describe('Attribute-Disabled NxCheckbox', function() {
    it('looks disabled by default', simpleTest(disabledSelector));
    it('looks disabled when hovered', hoverTest(disabledSelector));
  });

  it('passes a11y checks', a11yTest());
});
