/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxDateInput', function() {
  const {
    blurElement,
    focusTest,
    focusAndHoverTest,
    hoverTest,
    simpleTest,
    waitAndGetElements,
    checkScreenshot,
    a11yTest
  } = setupBrowser('#/pages/Date%20Input');

  const simpleComponentSelector = '#nx-date-input-simple-example .nx-text-input',
      validatableComponentSelector = '#nx-date-input-validation-example .nx-text-input',
      disabledComponentSelector = '#nx-date-input-disabled-example .nx-text-input.pristine',
      disabledValidComponentSelector = '#nx-date-input-disabled-example .nx-text-input.valid',
      disabledInvalidComponentSelector = '#nx-date-input-disabled-example .nx-text-input.invalid';

  function getInputElementSelector(componentSelector, inputType = 'input') {
    return `${componentSelector} ${inputType}`;
  }

  describe('Simple NxDateInput', function() {
    it('has a dark border by default', simpleTest(simpleComponentSelector));

    it('has a darker border when hovered',
        hoverTest(simpleComponentSelector, getInputElementSelector(simpleComponentSelector)));

    it('has a blue inner outline when focused',
        focusTest(simpleComponentSelector, getInputElementSelector(simpleComponentSelector)));

    it('has a blue inner outline and darker border when hovered and focused',
        focusAndHoverTest(simpleComponentSelector, getInputElementSelector(simpleComponentSelector)));
  });

  describe('Validatable NxDateInput', function() {
    it('has a dark border when pristine', simpleTest(validatableComponentSelector));

    it('has validation styles when valid', async function() {
      const inputSelector = getInputElementSelector(validatableComponentSelector),
          [targetElement, inputElement] = await waitAndGetElements(
              validatableComponentSelector,
              inputSelector
          );
      await inputElement.type('01-01-2021');
      await blurElement(inputElement);
      await checkScreenshot(targetElement);
    });

    it('has invalid validation styles when invalid', async function() {
      const inputSelector = getInputElementSelector(validatableComponentSelector),
          [targetElement, inputElement] = await waitAndGetElements(
              validatableComponentSelector,
              inputSelector
          );

      await inputElement.type('01-01-2019');
      await blurElement(inputElement);
      await checkScreenshot(targetElement, 300, 74);
    });
  });

  describe('Disabled NxDateInput', function() {
    it('looks disabled when pristine', simpleTest(disabledComponentSelector));
    it('looks disabled when valid', simpleTest(disabledValidComponentSelector));
    it('looks disabled when invalid', simpleTest(disabledInvalidComponentSelector));
  });

  it('passes a11y checks', a11yTest());
});
