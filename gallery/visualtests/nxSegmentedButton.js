/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxSegmentedButton', function() {
  const {
    clickTest,
    focusTest,
    hoverTest,
    simpleTest,
    waitAndGetElements,
    moveMouseAway,
    checkScreenshotCoordinates,
    a11yTest
  } = setupBrowser('#/pages/Segmented%20Button');

  async function openDropdown(dropdownBtnSelector) {
    const [button] = await waitAndGetElements(dropdownBtnSelector);

    await button.click();
    await moveMouseAway();
  }

  function openedTest(selector, dropdownBtnSelector, dropdownMenuItemSelector) {
    return async function() {
      const [targetElement] = await waitAndGetElements(selector);
      await openDropdown(dropdownBtnSelector);

      const { x, y } = await targetElement.boundingBox();

      if (dropdownMenuItemSelector) {
        const [menuItem] = await waitAndGetElements(dropdownMenuItemSelector);
        menuItem.focus();
      }

      await checkScreenshotCoordinates(x - 82, y, 250, 122);
    };
  }

  const dropdownMenuItemSelector = '.nx-dropdown-menu .nx-dropdown-button:first-child';

  describe('Primary NxButton', function() {
    const exampleSelector = '#nx-segmented-button-primary-example',
        selector = `${exampleSelector} .nx-segmented-btn:first-child`,
        mainBtnSelector = `${selector} .nx-segmented-btn__main-btn`,
        dropdownBtnSelector = `${selector} .nx-segmented-btn__dropdown-btn`;

    it('has a blue background by default', simpleTest(selector));

    describe('Primary NxButton main section', function() {
      it('has a darker blue background when hovered', hoverTest(selector, mainBtnSelector));
      it('has a lighter blue background when clicked', clickTest(selector, mainBtnSelector));
      it('has a white inner outline when focused', focusTest(selector, mainBtnSelector));
    });

    describe('Primary NxButton dropdown section', function() {
      it('has a darker blue background when hovered', hoverTest(selector, dropdownBtnSelector));
      it('has a lighter blue background when clicked', clickTest(selector, dropdownBtnSelector));
      it('has a white inner outline when focused', focusTest(selector, dropdownBtnSelector));
      it('has a lighter blue background and white inner outline when opened',
          openedTest(selector, dropdownBtnSelector));
      it('has a lighter blue background when opened and not focused',
          openedTest(selector, dropdownBtnSelector, dropdownMenuItemSelector));
    });

    it('passes a11y checks when opened', async function() {
      await openDropdown(dropdownBtnSelector);

      await a11yTest()();
    });
  });

  describe('Secondary NxButton', function() {
    const exampleSelector = '#nx-segmented-button-secondary-example',
        selector = `${exampleSelector} .nx-segmented-btn:first-child`,
        mainBtnSelector = `${selector} .nx-segmented-btn__main-btn`,
        dropdownBtnSelector = `${selector} .nx-segmented-btn__dropdown-btn`;

    it('has a blue border and white background by default', simpleTest(selector));

    describe('Secondary NxButton main section', function() {
      it('has a blue background when hovered', hoverTest(selector, mainBtnSelector));
      it('has a blue border and light blue background when clicked', clickTest(selector, mainBtnSelector));
      it('has a darker inner outline when focused', focusTest(selector, mainBtnSelector));
    });

    describe('Secondary NxButton dropdown section', function() {
      it('has a blue background when hovered', hoverTest(selector, dropdownBtnSelector));
      it('has a blue border and light blue background when clicked', clickTest(selector, dropdownBtnSelector));
      it('has a darker blue inner outline when focused', focusTest(selector, dropdownBtnSelector));
      it('has a light blue background and darker blue inner outline when opened',
          openedTest(selector, dropdownBtnSelector));
      it('has a lighter blue background when opened and not focused',
          openedTest(selector, dropdownBtnSelector, dropdownMenuItemSelector));
    });
  });

  describe('Tertiary NxButton', function() {
    const exampleSelector = '#nx-segmented-button-tertiary-example',
        selector = `${exampleSelector} .nx-segmented-btn:first-child`,
        mainBtnSelector = `${selector} .nx-segmented-btn__main-btn`,
        dropdownBtnSelector = `${selector} .nx-segmented-btn__dropdown-btn`;

    it('has a grey border and white background by default', simpleTest(selector));

    describe('Tertiary NxButton main section', function() {
      it('has a light indigo background when hovered', hoverTest(selector, mainBtnSelector));
      it('has a light grey border and light indigo background when clicked', clickTest(selector, mainBtnSelector));
      it('has a dark grey inner outline when focused', focusTest(selector, mainBtnSelector));
    });

    describe('Tertiary NxButton dropdown section', function() {
      it('has a light indigo background when hovered', hoverTest(selector, dropdownBtnSelector));
      it('has a light grey border and light indigo background when clicked', clickTest(selector, dropdownBtnSelector));
      it('has a darker grey inner outline when focused', focusTest(selector, dropdownBtnSelector));
      it('has a darker grey inner outline and light indigo background when opened',
          openedTest(selector, dropdownBtnSelector));
      it('has a light indigo background when opened and not focused',
          openedTest(selector, dropdownBtnSelector, dropdownMenuItemSelector));
    });
  });

  it('passes a11y checks', a11yTest());
});
