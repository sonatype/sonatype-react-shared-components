/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Target } = require('@applitools/eyes-webdriverio');
const { focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('nx-form-select', function() {
  const selector = '#nx-form-select-example .nx-form-select',
      disabledSelector = '#nx-form-select-disabled-example .nx-form-select';

  beforeEach(async function() {
    await browser.url('#/pages/NxFormSelect');
  });

  describe('Simple NxFormSelect', function() {
    it('has a light border when pristine', simpleTest(selector));

    it('has a dark border when not pristine', async function() {
      const targetElement = await browser.$(selector);

      await targetElement.scrollIntoView({ block: 'center' });

      // change the value of the dropdown
      await browser.execute(function(el) {
        el.focus();
      }, targetElement);
      await browser.keys('ArrowDown');
      await browser.execute(function(el) {
        el.blur();
      }, targetElement);

      await targetElement.moveTo({ xOffset: -10, yOffset: -10 });

      await browser.eyesRegionSnapshot(null, Target.region(targetElement));
    });

    it('has a dark border when hovered', hoverTest(selector));
    it('has a blue border when focused', focusTest(selector));
    it('has a blue border when hovered and focused', focusAndHoverTest(selector));
  });

  describe('Disabled NxFormSelect', function() {
    beforeEach(async function() {
      await browser.url('#/pages/nx-form-select');
    });

    it('looks disabled', simpleTest(disabledSelector));
  });
});
