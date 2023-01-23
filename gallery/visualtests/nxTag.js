/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxTag', function() {
  const {
    focusTest,
    focusAndHoverTest,
    hoverTest,
    simpleTest,
    waitAndGetElements,
    checkScreenshotCoordinates,
    checkScreenshot,
    scrollIntoView,
    wait,
    a11yTest
  } = setupBrowser('#/pages/Tag');

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

  describe('NxSelectableTag', function() {
    const selector = '#nx-selectable-tag-example .nx-tag:first-child';

    it('has a blue/grey border and lighter blue/grey background by default', simpleTest(selector));
    it('has a dark grey border when hovered', hoverTest(selector));
    it('has a light blue glow and light blue border when focused', focusTest(selector));
    it('has a light blue glow and blue border when focused and hovered', focusAndHoverTest(selector));
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

    it('looks right when selected', async function() {
      const [targetElement] = await waitAndGetElements(overflowingTagSelector);
      await targetElement.click();
      await checkScreenshot(targetElement);
    });
  });

  it('passes a11y checks', a11yTest());
});
