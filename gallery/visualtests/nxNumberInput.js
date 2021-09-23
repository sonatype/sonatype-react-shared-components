/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Region, Target } = require('@applitools/eyes-webdriverio');
const { focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxNumberInput', function() {
  const simpleComponentSelector = '#nx-number-input-simple-example .nx-text-input',
      validatableComponentSelector = '#nx-number-input-validation-example .nx-text-input',
      disabledComponentSelector = '#nx-number-input-disabled-example .nx-text-input.pristine';

  function getInputElementSelector(componentSelector, inputType = 'input') {
    return `${componentSelector} ${inputType}`;
  }

  beforeEach(async function() {
    await browser.url('#/pages/NxNumberInput');
  });

  describe('Simple NxNumberInput', function() {
    it('has a light border when pristine', simpleTest(simpleComponentSelector));

    it('has a dark border when hovered',
        hoverTest(simpleComponentSelector, getInputElementSelector(simpleComponentSelector)));
    it('has a blue border when focused',
        focusTest(simpleComponentSelector, getInputElementSelector(simpleComponentSelector)));

    it('has a dark border when hovered and focused',
        focusAndHoverTest(simpleComponentSelector, getInputElementSelector(simpleComponentSelector)));

    it('has a dark border when non-pristine', async function() {
      const inputElement = await browser.$(getInputElementSelector(simpleComponentSelector));

      await inputElement.setValue('123');

      browser.execute(function(el) {
        el.blur();
      }, inputElement);

      await simpleTest(simpleComponentSelector)();
    });
  });

  describe('Validatable NxNumberInput', function() {
    it('has a light border when pristine', simpleTest(validatableComponentSelector));

    it('has validation styles when valid', async function() {
      const inputSelector = getInputElementSelector(validatableComponentSelector),
          [targetElement, inputElement] = await Promise.all([
            browser.$(validatableComponentSelector),
            browser.$(inputSelector)
          ]);

      await targetElement.scrollIntoView({ block: 'center' });
      await inputElement.setValue('123');
      await browser.eyesRegionSnapshot(null, Target.region(targetElement));
    });

    it('has invalid validation styles when invalid and dirty', async function() {
      const inputSelector = getInputElementSelector(validatableComponentSelector),
          [targetElement, inputElement] = await Promise.all([
            browser.$(validatableComponentSelector),
            browser.$(inputSelector)
          ]);

      await targetElement.scrollIntoView({ block: 'center' });
      await inputElement.setValue('123');
      await browser.keys(['Backspace', 'Backspace', 'Backspace']);

      const { x, y } = await targetElement.getLocation();
      const region = new Region(parseInt(x, 10), parseInt(y, 10), 300, 74);

      await browser.eyesRegionSnapshot(null, Target.region(region));
    });
  });

  describe('Disabled NxNumberInput', function() {
    it('looks disabled when pristine', simpleTest(disabledComponentSelector));
  });
});
