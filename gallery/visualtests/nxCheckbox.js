/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

const OUTSET = 8;

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
    checkScreenshotWithOutset
  } = setupBrowser('#/pages/Checkbox');

  const exampleSelector = '#nx-checkbox-example .gallery-example-live',
      labelSelector = '#nx-checkbox-example .gallery-example-live label:nth-of-type(3)',
      disabledSelector = '#nx-checkbox-example .gallery-example-live label:nth-of-type(4)';

  describe('Default NxCheckbox', function() {
    it('has a light grey border and white background by default', simpleTest(labelSelector, OUTSET));

    it('has a black border when hovered', hoverTest(labelSelector, undefined, undefined, OUTSET));

    it('has a blue background and white checkmark when clicked', async function() {
      const inputSelector = `${labelSelector} input`;

      const [targetElement, inputElement] = await waitAndGetElements(labelSelector, inputSelector);

      await targetElement.click();
      await blurElement(inputElement);

      await checkScreenshotWithOutset(targetElement, OUTSET);
    });

    it(`has a blue background, white checkmark, with a blue outer border 
      when clicked and focused`, async function() {
      const focusSelector = `${labelSelector} input`,
          [targetElement, focusElement] = await waitAndGetElements(labelSelector, focusSelector);

      await targetElement.click();
      await moveMouseAway();
      await focusElement.focus();

      await checkScreenshotWithOutset(targetElement, OUTSET);
    });

    it(`has a blue background and white checkmark with a blue outer border
      when clicked, focused, and hovered`, async function() {
      const focusSelector = `${labelSelector} input`,
          [targetElement, focusElement] = await waitAndGetElements(labelSelector, focusSelector);

      await targetElement.click();
      await focusElement.focus();
      await targetElement.hover();

      await checkScreenshotWithOutset(targetElement, OUTSET);
    });

    it('has a blue outer border when focused', focusTest(labelSelector, undefined, OUTSET));
    it('has a blue outer border and a dark border when focused and hovered',
        focusAndHoverTest(labelSelector, undefined, undefined, OUTSET));
    it('shows overflow tooltips', hoverTest(exampleSelector, labelSelector, true, OUTSET));
  });

  describe('Attribute-Disabled NxCheckbox', function() {
    it('looks disabled', simpleTest(disabledSelector, OUTSET));
    it('looks disabled when hovered', hoverTest(disabledSelector, undefined, undefined, OUTSET));
  });

  it('passes a11y checks', a11yTest());
});
