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

  const selector = '#nx-color-picker-example .gallery-example-live',
      validationSelector = '#nx-color-picker-required-example .gallery-example-live',
      colorSelector = `${selector} .nx-color-picker__color:first-of-type`;

  it('looks right', simpleTest(selector));
  it('looks right with a hovered color and shows a tooltip', hoverTest(selector, colorSelector, true));
  it('looks right with a focused color', focusTest(selector, colorSelector));
  it('looks right with a hovered and focused color', focusAndHoverTest(selector, colorSelector));

  it('looks right with a selected color', async function() {
    const [targetElement, labelElement] = await waitAndGetElements(selector, colorSelector);

    await labelElement.click();

    await moveMouseAway();

    await checkScreenshot(targetElement);
  });

  describe('when required', function() {
    it('has a red asterisk on the label', simpleTest(validationSelector));
  });

  describe('when invalid', function() {
    beforeEach(async function() {
      const [firstCheckbox, clearBtn] = await waitAndGetElements(
          `${validationSelector} .nx-color-picker__color:first-of-type`,
          `${validationSelector} .nx-btn`
      );

      // select and then unselect
      await firstCheckbox.click();
      await clearBtn.click();
    });

    it('displays the validation message', async function() {
      const [picker, validationMessage] = await waitAndGetElements(
        validationSelector,
        `${validationSelector} .nx-field-validation-message`
      );

      // sanity check that the message is there
      expect(validationMessage).toBeTruthy();

      await checkScreenshot(picker);
    });

    it('passes a11y checks', a11yTest());
  });

  describe('when in an NxForm that is showing validation errors', function() {
    const { checkScreenshot, waitAndGetElements } = setupBrowser('#/pages/Form Layout Examples'),
        formSelector = '#nx-form-layout-example';

    it('displays the validation message', async function() {
      const [submitBtn, picker] = await waitAndGetElements(
          `${formSelector} .nx-form__submit-btn`,
          `${formSelector} .nx-fieldset:first-of-type`
      );

      await submitBtn.click();

      await checkScreenshot(picker, undefined, 152);
    });
  });

  it('passes a11y checks', a11yTest());
});
