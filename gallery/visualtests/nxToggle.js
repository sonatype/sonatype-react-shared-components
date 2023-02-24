/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxToggle', function() {
  const {
    scrollIntoView,
    hoverTest,
    simpleTest,
    waitAndGetElements,
    moveMouseAway,
    checkScreenshot,
    checkScreenshotCoordinates,
    blurElement,
    wait,
    a11yTest
  } = setupBrowser('#/pages/Toggle');

  const selector = '#nx-toggle-example .gallery-example-live label:nth-of-type(2)',
      disabledSelector = '#nx-toggle-example .gallery-example-live label:nth-of-type(4)';

  const checkCustomScreenshot = async (targetElement) => {
    const { x, y, width, height } = await targetElement.boundingBox();

    await checkScreenshotCoordinates(x - 5, y - 5, width + 10, height + 10);
  };

  describe('Default NxToggle', function() {
    it('has a blue border, blue indicator, and white background by default', simpleTest(selector));
    it('has a black border and off-white background when hovered', hoverTest(selector));

    it('has a blue background and white indicator when clicked', async function() {
      const blurSelector = `${selector} input`,
          [targetElement, inputElement] = await waitAndGetElements(selector, blurSelector);

      await targetElement.click();
      await moveMouseAway();
      await blurElement(inputElement);

      // wait for animation
      await wait(400);

      await checkScreenshot(targetElement);
    });

    it('has a blue background, white indicator and a black border when clicked and hovered', async function() {
      const blurSelector = `${selector} input`,
          [targetElement, inputElement] = await waitAndGetElements(selector, blurSelector);

      await targetElement.click();

      // wait for animation
      await wait(400);

      await moveMouseAway();
      await blurElement(inputElement);
      await targetElement.hover();

      await checkScreenshot(targetElement);
    });

    it(`has a blue background, white indicator, and a blue border
      when clicked and focused`, async function() {
      const focusSelector = `${selector} input`,
          [targetElement] = await waitAndGetElements(selector, focusSelector);

      await targetElement.click();
      await moveMouseAway();

      // wait for animation
      await wait(400);

      await checkCustomScreenshot(targetElement);
    });

    it(`has a black border, darker blue background and white indicator with outer blue border
      when clicked, focused, and hovered`, async function() {
      const inputSelector = `${selector} input`,
          [targetElement] = await waitAndGetElements(selector, inputSelector);

      await targetElement.click();
      await targetElement.hover();

      // wait for animation
      await wait(400);

      await checkCustomScreenshot(targetElement);
    });

    it('has a blue outer border when focused', async function() {
      const inputSelector = `${selector} input`,
          [targetElement] = await waitAndGetElements(selector, inputSelector);

      await targetElement.focus();

      await checkCustomScreenshot(targetElement);
    });

    it(`has a dark border and a blue outer border and off-white background
      when focused and hovered`, async function() {
      const inputSelector = `${selector} input`,
          [targetElement] = await waitAndGetElements(selector, inputSelector);

      await scrollIntoView(targetElement);
      await targetElement.focus();
      await targetElement.hover();

      await checkCustomScreenshot(targetElement);
    });
  });

  describe('Attribute-Disabled NxToggle', function() {
    it('looks disabled by default', simpleTest(disabledSelector));
    it('looks disabled when hovered', hoverTest(disabledSelector));
  });

  it('passes a11y checks', a11yTest());
});
