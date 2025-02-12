/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser, TOOLTIP_WAIT } = require('./testUtils');

describe('NxColorPicker', function() {
  const {
    focusTest,
    focusAndHoverTest,
    hoverTest,
    simpleTest,
    waitAndGetElements,
    moveMouseAway,
    blurElement,
    checkScreenshot,
    a11yTest,
    wait
  } = setupBrowser('#/pages/Color%20Picker');

  const selector = '#nx-color-picker-example .gallery-example-live',
      validationSelector = '#nx-color-picker-required-example .gallery-example-live',
      colorSelector = `${selector} .nx-color-picker__label:first-of-type`;

  it('looks right', simpleTest(selector));
  it('looks right when hovered and shows a tooltip', hoverTest(selector, colorSelector, true));
  it('looks right when focused', focusTest(selector, colorSelector, 0, true));
  it('looks right when hovered and focused', focusAndHoverTest(selector, colorSelector, true));

  describe('when a color is selected', function() {
    beforeEach(async function() {
      const [labelElement, inputElement] = await waitAndGetElements(colorSelector, `${colorSelector} input`);

      await labelElement.click();

      await moveMouseAway();
      await blurElement(inputElement);
    });

    it('looks right', simpleTest(selector));
    it('looks right when hovered and shows a tooltip', hoverTest(selector, colorSelector, true));
    it('looks right when focused', focusTest(selector, colorSelector, 0, true));
    it('looks right when hovered and focused', focusAndHoverTest(selector, colorSelector, true));
  });

  describe('when required', function() {
    it('has a red asterisk on the label', simpleTest(validationSelector));
  });

  describe('when invalid', function() {
    beforeEach(async function() {
      const [firstCheckbox, clearBtn] = await waitAndGetElements(
          `${validationSelector} .nx-color-picker__label:first-of-type`,
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
          `${formSelector} .nx-color-picker`
      );

      await submitBtn.click();

      await checkScreenshot(picker, undefined, 92);
    });
  });

  it('passes a11y checks', a11yTest());
});
