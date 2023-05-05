/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

const OUTSET = 8;

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
    checkScreenshotWithOutset
  } = setupBrowser('#/pages/Radio');

  const simpleExampleSelector = '#nx-radio-example .gallery-example-live',
      simpleExampleLabelSelector = '#nx-radio-example .gallery-example-live label:nth-of-type(3)',
      disabledExampleSelector = '#nx-radio-disabled-example .gallery-example-live',
      disabledExampleLabelSelector = `${disabledExampleSelector} label:nth-of-type(1)`,
      disabledExampleLabelCheckedSelector = `${disabledExampleSelector} label:nth-of-type(2)`;

  describe('Default NxRadio', function() {

    it('has a light grey border and white background by default', simpleTest(simpleExampleLabelSelector, OUTSET));

    it('has a black border when hovered', hoverTest(simpleExampleLabelSelector, undefined, undefined, OUTSET));

    it('has a thick blue border and white background when clicked', async function() {
      const inputSelector = `${simpleExampleLabelSelector} input`;

      const [targetElement, inputElement] = await waitAndGetElements(simpleExampleLabelSelector, inputSelector);

      await targetElement.click();
      await blurElement(inputElement);

      await checkScreenshotWithOutset(targetElement, OUTSET);
    });

    it(`has a thick blue border, white background, with a blue outer border '
    + 'when clicked and focused`, async function() {
      const focusSelector = `${simpleExampleLabelSelector} input`,
          [targetElement, focusElement] = await waitAndGetElements(simpleExampleLabelSelector, focusSelector);

      await targetElement.click();
      await moveMouseAway();
      await focusElement.focus();

      await checkScreenshotWithOutset(targetElement, OUTSET);
    });

    it(`has a thick blue border and white background with a blue outer border
      when clicked, focused, and hovered`, async function() {
      const focusSelector = `${simpleExampleLabelSelector} input`,
          [targetElement, focusElement] = await waitAndGetElements(simpleExampleLabelSelector, focusSelector);

      await targetElement.click();
      await focusElement.focus();
      await targetElement.hover();

      await checkScreenshotWithOutset(targetElement, OUTSET);
    });

    it('has a blue outer border when focused', focusTest(simpleExampleLabelSelector, undefined, OUTSET));
    it('has a blue outer border and a dark border when focused and hovered',
        focusAndHoverTest(simpleExampleLabelSelector, undefined, undefined, OUTSET)
    );
  });

  describe('Attribute-Disabled NxRadio and Attribute-Disabled-Checked', function() {
    it('looks disabled by default', simpleTest(disabledExampleSelector, OUTSET));
  });

  describe('Attribute-Disabled NxRadio', function() {
    it('looks disabled when hovered', hoverTest(disabledExampleLabelSelector, undefined, undefined, OUTSET));
  });

  describe('Attribute-Disabled-Checked NxRadio', function() {
    it('looks disabled when hovered', hoverTest(disabledExampleLabelCheckedSelector, undefined, undefined, OUTSET));
  });

  describe('Tooltip for NxRadio', function() {
    it(
        'has a tooltip on hover when set to true',
        hoverTest(simpleExampleSelector, simpleExampleLabelSelector, true, OUTSET)
    );

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
