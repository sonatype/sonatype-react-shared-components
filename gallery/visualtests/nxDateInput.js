/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Region, Target } = require('@applitools/eyes-webdriverio');
const { focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxDateInput', function() {
  const simpleComponentSelector = '#nx-date-input-simple-example .nx-text-input',
      validatableComponentSelector = '#nx-date-input-validation-example .nx-text-input',
      disabledComponentSelector = '#nx-date-input-disabled-example .nx-text-input.pristine',
      disabledValidComponentSelector = '#nx-date-input-disabled-example .nx-text-input.valid',
      disabledInvalidComponentSelector = '#nx-date-input-disabled-example .nx-text-input.invalid';

  function getInputElementSelector(componentSelector, inputType = 'input') {
    return `${componentSelector} ${inputType}`;
  }

  beforeEach(async function() {
    await browser.url('#/pages/Date%20Input');
  });

  describe('Simple NxDateInput', function() {
    it('has a dark border by default', simpleTest(simpleComponentSelector));

    it('has a darker border when hovered',
        hoverTest(simpleComponentSelector, getInputElementSelector(simpleComponentSelector)));
    it('has a blue border and glow when focused',
        focusTest(simpleComponentSelector, getInputElementSelector(simpleComponentSelector)));

    it('has a blue border and glow when hovered and focused',
        focusAndHoverTest(simpleComponentSelector, getInputElementSelector(simpleComponentSelector)));
  });

  describe('Validatable NxDateInput', function() {
    it('has a dark border when pristine', simpleTest(validatableComponentSelector));

    it('has validation styles when valid', async function() {
      const inputSelector = getInputElementSelector(validatableComponentSelector),
          [targetElement, inputElement] = await Promise.all([
            browser.$(validatableComponentSelector),
            browser.$(inputSelector)
          ]);

      await targetElement.scrollIntoView({ block: 'center' });
      await inputElement.setValue('2019-01-01');
      await browser.eyesRegionSnapshot(null, Target.region(targetElement));
    });

    it('has invalid validation styles when invalid', async function() {
      const inputSelector = getInputElementSelector(validatableComponentSelector),
          [targetElement, inputElement] = await Promise.all([
            browser.$(validatableComponentSelector),
            browser.$(inputSelector)
          ]);

      await targetElement.scrollIntoView({ block: 'center' });
      await inputElement.setValue('2019-01-01');

      const { x, y } = await targetElement.getLocation();
      const region = new Region(parseInt(x, 10), parseInt(y, 10), 300, 74);

      await browser.eyesRegionSnapshot(null, Target.region(region));
    });
  });

  describe('Disabled NxDateInput', function() {
    it('looks disabled when pristine', simpleTest(disabledComponentSelector));
    it('looks disabled when valid', simpleTest(disabledValidComponentSelector));
    it('looks disabled when invalid', simpleTest(disabledInvalidComponentSelector));
  });
});
