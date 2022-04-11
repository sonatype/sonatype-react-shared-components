/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxColorPicker', function() {
  const {
    focusTest,
    focusAndHoverTest,
    hoverTest,
    simpleTest,
    waitAndGetElements,
    moveMouseAway,
    checkScreenshot,
    a11yTest
  } = setupBrowser('#/pages/Color%20Picker');

  const selector = '.gallery-example-live .nx-color-picker',
      labelSelector = `${selector} .nx-color-picker__color:first-of-type`;

  it('looks right', simpleTest(selector));
  it('looks right with a hovered color', hoverTest(selector, labelSelector));
  it('looks right with a focused color', focusTest(selector, labelSelector));
  it('looks right with a hovered and focused color', focusAndHoverTest(selector, labelSelector));

  it('looks right with a selected color', async function() {
    const [targetElement, labelElement] = await waitAndGetElements(selector, labelSelector);

    await labelElement.click();

    await moveMouseAway();

    await checkScreenshot(targetElement);
  });

  it('passes a11y checks', a11yTest());
});
