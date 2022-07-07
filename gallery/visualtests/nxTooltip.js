/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxTooltip', function() {
  const { waitAndGetElements, checkScreenshotCoordinates, wait, a11yTest } = setupBrowser('#/pages/Tooltip');

  const selector = '.gallery-example .nx-btn-bar',
      firstBtnSelector = `${selector} button:first-child`,
      secondBtnSelector = `${selector} button:nth-child(2)`,

      // expected distance from top of element to the top of its tooltip
      tooltipHeightOffset = 45;

  it('looks right', async function() {
    const [btnBarElement, firstBtnElement] = await waitAndGetElements(selector, firstBtnSelector);

    const { x, y, height, width } = await btnBarElement.boundingBox();

    // hover the first button to activate its tooltip.
    // There is also another tooltip which is always active on the third button
    await firstBtnElement.hover();
    await wait(1500);

    await checkScreenshotCoordinates(x, y - tooltipHeightOffset, width, height + tooltipHeightOffset);
  });

  it('looks right with an HTML tooltip', async function() {
    const [btnBarElement, secondBtnElement] = await waitAndGetElements(selector, secondBtnSelector);

    const { x, y, height, width } = await btnBarElement.boundingBox();

    // wait for the always-open tooltip on the next element over to appear, so that the HTML tooltip ends up on top
    await wait(1500);

    // hover the second button to activate its tooltip, which uses additional properties and custom HTML
    await secondBtnElement.hover();
    await wait(1500);

    await checkScreenshotCoordinates(x, y - tooltipHeightOffset, width, height + tooltipHeightOffset);
  });

  //disabling the region rule to get around the "Some page content is not contained by landmarks" for tooltips
  it('passes a11y checks', a11yTest(builder => builder.disableRules('region')));
});
