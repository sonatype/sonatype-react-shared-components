/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

const OUTSET = 6;
const selectableColors =
['purple', 'pink', 'blue', 'red', 'turquoise', 'orange', 'yellow', 'kiwi', 'sky', 'indigo'];

describe('NxTag', function() {
  const {
    blurElement,
    focusTest,
    focusAndHoverTest,
    hoverTest,
    simpleTest,
    waitAndGetElements,
    checkScreenshotCoordinates,
    moveMouseAway,
    scrollIntoView,
    wait,
    a11yTest
  } = setupBrowser('#/pages/Tag');

  function interactionStatesTest(selector) {
    it('has a dark grey border when hovered', hoverTest(selector));
    it('has a blue outline when focused', focusTest(selector, undefined, OUTSET));
    it('has a blue outline and dark grey border when focused and hovered',
        focusAndHoverTest(selector, undefined, undefined, OUTSET));
  }

  describe('Basic NxTag', function() {
    const selector = '#nx-tag-example .gallery-example-live',
        tagSelector = `${selector} .nx-selectable-color--pink`,
        indigoTagSelector = `${selector} .nx-selectable-color--indigo:first-child`,

        // expected distance from top of element to the top of its tooltip
        tooltipHeightOffset = 21;

    it('looks right', simpleTest(selector));

    it('has a tooltip', async function() {
      const [tagElement, tooltipTagElement] = await waitAndGetElements(selector, tagSelector);

      // hover the tag to activate its tooltip.
      await scrollIntoView(tagElement);
      await tooltipTagElement.hover();
      await wait(1500);
      const { x, y, height, width } = await tagElement.boundingBox();

      await checkScreenshotCoordinates(x, y - tooltipHeightOffset, width, height + tooltipHeightOffset);
    });

    it('renders a default, Indigo colored NxTag if no color prop is passed', simpleTest(indigoTagSelector));
  });

  describe('unselected NxSelectableTag', function() {
    selectableColors.forEach(color => {
      const selector = `#nx-selectable-tag-example .nx-selectable-color--${color}`;

      describe(color, function() {
        it('has a lighter background and darker border by default', simpleTest(selector));

        interactionStatesTest(selector);
      });
    });
  });

  describe('selected NxSelectableTag', function() {
    selectableColors.forEach(color => {
      describe(color, function() {
        const selector = `#nx-selectable-tag-example .nx-selectable-color--${color}`,
            inputSelector = `${selector} input`;

        beforeEach(async function() {
          const [targetElement, inputElement] = await waitAndGetElements(selector, inputSelector);
          await targetElement.click();
          await blurElement(inputElement);
          await moveMouseAway();
        });

        it('has a darker background and no borders by default', simpleTest(selector));

        interactionStatesTest(selector);
      });
    });
  });

  describe('NxTag With Tooltip', function() {
    const selector = '#nx-tag-with-tooltip-example .gallery-example-live',
        tagSelector = `${selector} .nx-tag:first-child`,
        overflowingTagSelector = `${selector} .nx-tag:last-child`,

        // expected distance from top of element to the top of its tooltip
        tooltipHeightOffset = 21;

    it('shows custom tooltip', async function() {
      const [exampleElement, tooltipTagElement] = await waitAndGetElements(selector, tagSelector);

      // hover the tag to activate its tooltip.
      await scrollIntoView(exampleElement);
      await tooltipTagElement.hover();
      await wait(1500);
      const { x, y, height, width } = await exampleElement.boundingBox();

      await checkScreenshotCoordinates(x, y - tooltipHeightOffset, width, height + tooltipHeightOffset);
    });

    it('shows custom tooltip that overrides overflowing tooltip', async function() {
      const [exampleElement, tooltipTagElement] = await waitAndGetElements(selector, overflowingTagSelector);

      // hover the tag to activate its tooltip.
      await scrollIntoView(exampleElement);
      await tooltipTagElement.hover();
      await wait(1500);
      const { x, y, height, width } = await exampleElement.boundingBox();

      await checkScreenshotCoordinates(x, y - tooltipHeightOffset, width, height + tooltipHeightOffset);
    });
  });

  describe('NxSelectableTag With Tooltip', function() {
    const selector = '#nx-selectable-tag-with-tooltip-example .gallery-example-live',
        tagSelector = `${selector} .nx-tag:first-child`,
        overflowingTagSelector = `${selector} .nx-tag:last-child`,

        // expected distance from top of element to the top of its tooltip
        tooltipHeightOffset = 21;

    it('shows custom tooltip', async function() {
      const [exampleElement, tooltipTagElement] = await waitAndGetElements(selector, tagSelector);

      // hover the tag to activate its tooltip.
      await scrollIntoView(exampleElement);
      await tooltipTagElement.hover();
      await wait(1500);
      const { x, y, height, width } = await exampleElement.boundingBox();

      await checkScreenshotCoordinates(x, y - tooltipHeightOffset, width, height + tooltipHeightOffset);
    });

    it('shows custom tooltip that overrides overflowing tooltip', async function() {
      const [exampleElement, tooltipTagElement] = await waitAndGetElements(selector, overflowingTagSelector);

      // hover the tag to activate its tooltip.
      await scrollIntoView(exampleElement);
      await tooltipTagElement.hover();
      await wait(1500);
      const { x, y, height, width } = await exampleElement.boundingBox();

      await checkScreenshotCoordinates(x, y - tooltipHeightOffset, width, height + tooltipHeightOffset);
    });
  });

  it('passes a11y checks', a11yTest());
});
