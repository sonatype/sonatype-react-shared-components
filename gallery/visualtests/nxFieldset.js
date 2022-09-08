/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxFieldset', function() {
  const { checkScreenshot, simpleTest, waitAndGetElements, a11yTest } = setupBrowser('#/pages/Fieldset');
  const selector = '#nx-fieldset-example .nx-fieldset',
      validationSelector = '#nx-fieldset-validation-example .gallery-example-live';

  it('looks right', simpleTest(selector));

  describe('when required', function() {
    it('has a red asterisk on the label', simpleTest(validationSelector));
  });

  describe('when invalid', function() {
    it('displays the validation message', async function() {
      const [fieldset, firstCheckbox] = await waitAndGetElements(
          validationSelector,
          `${validationSelector} .nx-checkbox:first-of-type`
      );

      // select and then unselect
      await firstCheckbox.click();
      await firstCheckbox.click();

      const [validationMessage] = await waitAndGetElements(`${validationSelector} .nx-field-validation-message`);

      // sanity check that the message is there
      expect(validationMessage).toBeTruthy();

      await checkScreenshot(fieldset);
    });
  });

  describe('when in an NxForm that is showing validation errors', function() {
    const { checkScreenshot, waitAndGetElements } = setupBrowser('#/pages/Form Layout Examples'),
        formSelector = '#nx-form-layout-example';

    it('displays the validation message', async function() {
      const [submitBtn, fieldset] = await waitAndGetElements(
          `${formSelector} .nx-form__submit-btn`,
          `${formSelector} .nx-fieldset:first-of-type`
      );

      await submitBtn.click();

      await checkScreenshot(fieldset, undefined, 152);
    });
  });

  it('passes a11y checks', a11yTest());
});
