/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxRadio', function() {
  const {
    focusTest,
    focusAndHoverTest,
    hoverTest,
    simpleTest,
    waitAndGetElements,
    moveMouseAway,
    blurElement,
    a11yTest,
    wait,
    isInDocument,
    checkScreenshotCoordinates
  } = setupBrowser('#/pages/Radio');

  const simpleExampleSelector = '#nx-radio-example .gallery-example-live',
      simpleExampleLabelSelector = '#nx-radio-example .gallery-example-live label:nth-of-type(3)',
      disabledExampleSelector = '#nx-radio-disabled-example .gallery-example-live',
      disabledExampleLabelSelector = '#nx-radio-disabled-example .gallery-example-live label:nth-of-type(1)',
      disabledExampleLabelCheckedSelector = '#nx-radio-disabled-example .gallery-example-live label:nth-of-type(2)';

  const checkCustomScreenshot = async (targetElement) => {
    const { x, y, width, height } = await targetElement.boundingBox();
    await checkScreenshotCoordinates(x - 8, y - 4, width + 16, height + 8);
  };

  describe('Default NxRadio', function() {

    it('has a light grey border and white background by default', simpleTest(simpleExampleSelector));

    it('has a black border when hovered', hoverTest(simpleExampleSelector, simpleExampleLabelSelector));
    it('has a thick blue border and white background when clicked', async function() {
      const inputSelector = `${simpleExampleLabelSelector} input`;

      const [targetElement, inputElement] = await waitAndGetElements(simpleExampleLabelSelector, inputSelector);

      await targetElement.click();
      await blurElement(inputElement);

      await checkCustomScreenshot(targetElement);
    });

    it(`has a thick blue border, white background, with a blue outer border '
    + 'when clicked and focused`, async function() {
      const focusSelector = `${simpleExampleLabelSelector} input`,
          [targetElement, focusElement] = await waitAndGetElements(simpleExampleLabelSelector, focusSelector);

      await targetElement.click();
      await moveMouseAway();
      await focusElement.focus();

      await checkCustomScreenshot(targetElement);
    });

    it(`has a thick blue border and white background with a blue outer border
      when clicked, focused, and hovered`, async function() {
      const focusSelector = `${simpleExampleLabelSelector} input`,
          [targetElement, focusElement] = await waitAndGetElements(simpleExampleLabelSelector, focusSelector);

      await targetElement.click();
      await focusElement.focus();
      await targetElement.hover();

      await checkCustomScreenshot(targetElement);
    });

    it('has a blue outer border when focused', focusTest(simpleExampleSelector, simpleExampleLabelSelector));
    it('has a blue outer border and a dark border when focused and hovered',
        focusAndHoverTest(simpleExampleSelector, simpleExampleLabelSelector)
    );
  });

  describe('Attribute-Disabled NxRadio and Attribute-Disabled-Checked', function() {
    it('looks disabled by default', simpleTest(disabledExampleSelector));
  });

  describe('Attribute-Disabled NxRadio', function() {
    it('looks disabled when hovered', hoverTest(disabledExampleSelector, disabledExampleLabelSelector));
  });

  describe('Attribute-Disabled-Checked NxRadio', function() {
    it('looks disabled when hovered', hoverTest(disabledExampleSelector, disabledExampleLabelCheckedSelector));
  });

  describe('Tooltip for NxRadio', function() {
    const simpleExampleLabelSelector = '#nx-radio-example .gallery-example-live',
        hoverSelector = '#nx-radio-example .gallery-example-live label:nth-of-type(3)';
    it('has a tooltip on hover when set to true', hoverTest(simpleExampleLabelSelector, hoverSelector, true));

    it('does have a tooltip on hover when overflowTooltip is not false and the content is overflowing',
        async function() {
          const wrapGreenHoverSelector = '#nx-radio-no-wrap-example .gallery-example-live label:nth-of-type(2)',
              [simpleExampleLabelSelectorGreen] = await waitAndGetElements(wrapGreenHoverSelector),
              wrapRedHoverSelector = '#nx-radio-no-wrap-example .gallery-example-live label:nth-of-type(1)',
              [simpleExampleLabelSelectorRed] = await waitAndGetElements(wrapRedHoverSelector),
              redNoOverflow = '#nx-radio-example .gallery-example-live label:nth-of-type(2)',
              [simpleExampleLabelSelectorNoOverflowRed] = await waitAndGetElements(redNoOverflow);

          await simpleExampleLabelSelectorRed.hover();
          await wait(500);

          const [tooltip] = await waitAndGetElements('.nx-tooltip');
          expect(await isInDocument(tooltip)).toBe(true);

          await moveMouseAway();
          await wait(500);
          expect(await isInDocument(tooltip)).toBe(false);

          await simpleExampleLabelSelectorGreen.hover();
          expect(await isInDocument(tooltip)).toBe(false);

          await simpleExampleLabelSelectorNoOverflowRed.hover();
          expect(await isInDocument(tooltip)).toBe(false);
        });
  });

  it('passes a11y checks', a11yTest());
});
