/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');
const { Region, Target } = require('@applitools/eyes-webdriverio');

describe('NxColorPicker', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxColorPicker');
  });

  const selector = '.gallery-example-live .nx-color-picker',
      labelSelector = `${selector} .nx-color-picker__color:first-child`;

  it('looks right', simpleTest(selector));
  it('looks right with a hovered color', hoverTest(selector, labelSelector));
  it('looks right with a focused color', focusTest(selector, labelSelector));
  it('looks right with a hovered and focused color', focusAndHoverTest(selector, labelSelector));

  it('looks right with a selected color', async function() {
    const [targetElement, labelElement] = await Promise.all([browser.$(selector), browser.$(labelSelector)]);

    await targetElement.scrollIntoView({ block: 'center' });
    await labelElement.click();

    await browser.eyesRegionSnapshot(null, Target.region(targetElement));
  });
});
