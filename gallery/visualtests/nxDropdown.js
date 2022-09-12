/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxDropdown', function() {
  const {
    clickTest,
    focusTest,
    focusAndHoverTest,
    hoverTest,
    simpleTest,
    waitAndGetElements,
    moveMouseAway,
    checkScreenshot,
    a11yTest
  } = setupBrowser('#/pages/Dropdown');

  const defaultSelector = '#nx-dropdown-scrolling-example .nx-dropdown',
      buttonSelector = `${defaultSelector} .nx-dropdown__toggle`;

  describe('Default NxDropdown when closed', function() {

    it('has a light grey border by default', simpleTest(defaultSelector));
    it('has a dark grey border when hovered', hoverTest(defaultSelector, buttonSelector));
    it('has a light blue border and glow when focused', focusTest(defaultSelector, buttonSelector));
    it('has a light blue border and glow when focused and hovered', focusAndHoverTest(defaultSelector, buttonSelector));
    it('has a dark grey border when clicked', clickTest(defaultSelector, buttonSelector));
  });

  describe('Default NxDropdown when open', function() {
    beforeEach(async function() {
      const [button] = await waitAndGetElements(defaultSelector + ' .nx-dropdown__toggle');

      await button.click();
    });

    it('has a dark blue button border with expanded menu', async function() {
      const [targetElement] = await waitAndGetElements(defaultSelector);

      await moveMouseAway();

      await checkScreenshot(targetElement, 251, 376);
    });
  });

  describe('Disabled NxDropdown', function() {
    const selector = '#nx-dropdown-disabled-example .nx-dropdown';

    it('looks disabled', simpleTest(selector));
  });

  describe('NxDropdown links', function() {
    const selector = '#nx-dropdown-links-example .nx-dropdown';

    beforeEach(async function() {
      const [button] = await waitAndGetElements(selector + ' .nx-dropdown__toggle');

      await button.click();
    });

    it('has links that look right', async function() {
      const [targetElement] = await waitAndGetElements(selector);

      await moveMouseAway();

      await checkScreenshot(targetElement, 251, 218);
    });
  });

  describe('NxDropdown with icon', function() {
    const selector = '#nx-dropdown-custom-label-example .nx-dropdown';

    beforeEach(async function() {
      const [button] = await waitAndGetElements(selector + ' .nx-dropdown__toggle');

      await button.click();
    });

    it('looks right', async function() {
      const [targetElement] = await waitAndGetElements(selector);

      await moveMouseAway();

      await checkScreenshot(targetElement, 251, 88);
    });

  });

  describe('NxDropdown with NxThreatIndicator', function() {
    const selector = '#nx-dropdown-with-nx-threat-indicator-example .nx-dropdown';

    beforeEach(async function() {
      const [button] = await waitAndGetElements(selector + ' .nx-dropdown__toggle');

      await button.click();
    });

    it('looks right', async function() {
      const [targetElement] = await waitAndGetElements(selector);

      await moveMouseAway();

      await checkScreenshot(targetElement, 251, 241);
    });

  });

  describe('NxDropdown with right-floating buttons', function() {
    const selector = '#nx-dropdown-right-buttons-example .nx-dropdown';

    beforeEach(async function() {
      const [button] = await waitAndGetElements(selector + ' .nx-dropdown__toggle');

      await button.click();
    });

    it('looks right', async function() {
      const [targetElement] = await waitAndGetElements(selector);

      await moveMouseAway();

      await checkScreenshot(targetElement, 251, 218);
    });
  });

  describe('Short NxDropdown', function() {
    const selector = '#nx-dropdown-short-example .nx-dropdown';

    it('looks right', async function() {
      const [targetElement] = await waitAndGetElements(selector);

      await targetElement.click();
      await moveMouseAway();

      await checkScreenshot(targetElement, 151, 184);
    });
  });

  it('passes a11y checks', a11yTest());
});
