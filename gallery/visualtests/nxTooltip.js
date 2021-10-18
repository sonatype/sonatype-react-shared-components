/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Region, Target } = require('@applitools/eyes-webdriverio');
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxTooltip', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxTooltip');
  });

  const selector = '.gallery-example .nx-btn-bar',
      firstBtnSelector = `${selector} button:first-child`,
      secondBtnSelector = `${selector} button:nth-child(2)`,

      // expected distance from top of element to the top of its tooltip
      tooltipHeightOffset = 45;

  it('looks right', async function() {
    const [btnBarElement, firstBtnElement] = await Promise.all([browser.$(selector), browser.$(firstBtnSelector)]);

    await btnBarElement.scrollIntoView({ block: 'center' });

    const { x, y, height, width } = await browser.getElementRect(btnBarElement.elementId);

    // hover the first button to activate its tooltip.
    // There is also another tooltip which is always active on the third button
    await firstBtnElement.moveTo();

    const screenshotRegion = new Region(x, y - tooltipHeightOffset, width, height + tooltipHeightOffset);
    await browser.eyesRegionSnapshot(null, Target.region(screenshotRegion));
  });

  it('looks right with an HTML tooltip', async function() {
    const [btnBarElement, secondBtnElement] = await Promise.all([browser.$(selector), browser.$(secondBtnSelector)]);

    await btnBarElement.scrollIntoView({ block: 'center' });

    const { x, y, height, width } = await browser.getElementRect(btnBarElement.elementId);

    // hover the second button to activate its tooltip, which uses additional properties and custom HTML
    await secondBtnElement.moveTo();

    const screenshotRegion = new Region(x, y - tooltipHeightOffset, width, height + tooltipHeightOffset);
    await browser.eyesRegionSnapshot(null, Target.region(screenshotRegion));
  });
});
