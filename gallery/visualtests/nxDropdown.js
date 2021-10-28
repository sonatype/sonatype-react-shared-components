/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxDropdown', function() {
  const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest, waitAndGetElements, moveMouseAway, getPage } =
      setupBrowser('#/pages/NxDropdown');

  const defaultSelector = '#nx-dropdown-scrolling-example .nx-dropdown';

  describe('Default NxDropdown when closed', function() {

    it('has a light grey border by default', simpleTest(defaultSelector));
    it('has a dark grey border when hovered', hoverTest(defaultSelector));
    it('has a light blue border when focused', focusTest(defaultSelector));
    it('has a dark grey border when focused and hovered', focusAndHoverTest(defaultSelector));
    it('has a dark grey border and light grey background when clicked', clickTest(defaultSelector));
  });

  describe('Default NxDropdown when open', function() {
    beforeEach(async function() {
      const [button] = await waitAndGetElements(defaultSelector + ' .nx-dropdown__toggle');

      await button.click();
    });

    it('has a dark blue button border with expanded menu', async function() {
      const [targetElement] = await waitAndGetElements(defaultSelector);

      await moveMouseAway();

      const { x, y } = await targetElement.boundingBox();

      const screenshot = await getPage().screenshot({
        clip: { x, y, width: 251, height: 376 }
      });

      expect(screenshot).toMatchImageSnapshot();
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

      //await targetElement.scrollIntoView({ block: 'center' });
      await moveMouseAway();

      const { x, y } = await targetElement.boundingBox();
      const screenshot = await getPage().screenshot({
        clip: { x, y, width: 251, height: 153 }
      });

      expect(screenshot).toMatchImageSnapshot();
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

      const { x, y } = await targetElement.boundingBox();
      const screenshot = await getPage().screenshot({
        clip: { x, y, width: 251, height: 88 }
      });

      expect(screenshot).toMatchImageSnapshot();
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

      const { x, y } = await targetElement.boundingBox();
      const screenshot = await getPage().screenshot({
        clip: { x, y, width: 251, height: 218 }
      });

      expect(screenshot).toMatchImageSnapshot();
    });
  });

  describe('Short NxDropdown', function() {
    const selector = '#nx-dropdown-short-example .nx-dropdown';

    it('looks right', async function() {
      const [targetElement] = await waitAndGetElements(selector);

      await targetElement.click();
      await moveMouseAway();

      const { x, y } = await targetElement.boundingBox();
      const screenshot = await getPage().screenshot({
        clip: { x, y, width: 151, height: 184 }
      });

      expect(screenshot).toMatchImageSnapshot();
    });
  });
});
