/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Region, Target } = require('@applitools/eyes-webdriverio');

const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxSegmentedButton', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxSegmentedButton');
  });

  function openedTest(selector, dropdownBtnSelector) {
    return async function() {
      await browser.refresh();

      const button = await browser.$(dropdownBtnSelector);

      await button.scrollIntoView({ block: 'center' });
      await button.click();

      const targetElement = await browser.$(selector);

      await targetElement.moveTo({ xOffset: -10, yOffset: -10 });

      const { x, y } = await targetElement.getLocation();
      const region = new Region(parseInt(x, 10) - 82, parseInt(y, 10), 250, 122);

      await browser.eyesRegionSnapshot(null, Target.region(region));
    };
  }

  describe('Primary NxButton', function() {
    const exampleSelector = '#nx-segmented-button-primary-example',
        selector = `${exampleSelector} .nx-segmented-btn:first-child`,
        disabledSelector = `${exampleSelector} .nx-segmented-btn:last-child`,
        mainBtnSelector = `${selector} .nx-segmented-btn__main-btn`,
        dropdownBtnSelector = `${selector} .nx-segmented-btn__dropdown-btn`;

    it('has a dark blue background by default', simpleTest(selector));

    describe('Primary NxButton main section', function() {
      it('has a darker blue background when hovered', hoverTest(selector, mainBtnSelector));
      it('has a lighter blue background when clicked', clickTest(selector, mainBtnSelector));
      it('has a light blue border when focused', focusTest(selector, mainBtnSelector));
    });

    describe('Primary NxButton dropdown section', function() {
      it('has a darker blue background when hovered', hoverTest(selector, dropdownBtnSelector));
      it('has a lighter blue background when clicked', clickTest(selector, dropdownBtnSelector));
      it('has a light blue border when focused', focusTest(selector, dropdownBtnSelector));
      it('has a lighter blue background when opened', openedTest(selector, dropdownBtnSelector));
    });
  });

  describe('Secondary NxButton', function() {
    const exampleSelector = '#nx-segmented-button-secondary-example',
        selector = `${exampleSelector} .nx-segmented-btn:first-child`,
        disabledSelector = `${exampleSelector} .nx-segmented-btn:last-child`,
        mainBtnSelector = `${selector} .nx-segmented-btn__main-btn`,
        dropdownBtnSelector = `${selector} .nx-segmented-btn__dropdown-btn`;

    it('has a blue border and white background by default', simpleTest(selector));

    describe('Secondary NxButton main section', function() {
      it('has a blue background when hovered', hoverTest(selector, mainBtnSelector));
      it('has a light blue border and light blue background when clicked', clickTest(selector, mainBtnSelector));
      it('has a light blue border when focused', focusTest(selector, mainBtnSelector));
    });

    describe('Secondary NxButton dropdown section', function() {
      it('has a blue background when hovered', hoverTest(selector, dropdownBtnSelector));
      it('has a light blue border and light blue background when clicked', clickTest(selector, dropdownBtnSelector));
      it('has a light blue border when focused', focusTest(selector, dropdownBtnSelector));
      it('has a lighter blue background when opened', openedTest(selector, dropdownBtnSelector));
    });
  });

  describe('Tertiary NxButton', function() {
    const exampleSelector = '#nx-segmented-button-tertiary-example',
        selector = `${exampleSelector} .nx-segmented-btn:first-child`,
        disabledSelector = `${exampleSelector} .nx-segmented-btn:last-child`,
        mainBtnSelector = `${selector} .nx-segmented-btn__main-btn`,
        dropdownBtnSelector = `${selector} .nx-segmented-btn__dropdown-btn`;

    it('has a grey border and white background by default', simpleTest(selector));

    describe('Tertiary NxButton main section', function() {
      it('has a dark grey border when hovered', hoverTest(selector, mainBtnSelector));
      it('has a dark grey border and light grey background when clicked', clickTest(selector, mainBtnSelector));
      it('has a light blue border when focused', focusTest(selector, mainBtnSelector));
    });

    describe('Tertiary NxButton dropdown section', function() {
      it('has a dark grey border when hovered', hoverTest(selector, dropdownBtnSelector));
      it('has a dark grey border and kight grey background when clicked', clickTest(selector, dropdownBtnSelector));
      it('has a light blue border when focused', focusTest(selector, dropdownBtnSelector));
      it('has a lighter blue background when opened', openedTest(selector, dropdownBtnSelector));
    });
  });
});
