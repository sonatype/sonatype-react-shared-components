/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxFormSelect', function() {
  const { waitAndGetElements, focusTest, focusAndHoverTest, hoverTest, simpleTest, a11yTest } =
      setupBrowser('#/pages/Form Select');

  const selector = '#nx-form-select-example .gallery-example-live',
      validationSelector = '#nx-form-select-validation-example .gallery-example-live',
      overflowSelector = '#nx-form-select-overflow-example .gallery-example-live',
      disabledSelector = '#nx-form-select-disabled-example .gallery-example-live',
      widthSelector = '#nx-form-select-widths-example .gallery-example-live';

  describe('simple', function() {
    it('has a dark border by default', simpleTest(selector));

    it('has a darker border when hovered', hoverTest(selector, `${selector} select`));
    it('has a blue border when focused', focusTest(selector, `${selector} select`));
    it('has a blue border when hovered and focused', focusAndHoverTest(selector, `${selector} select`));
  });

  describe('with long overflowing text', function() {
    it('looks right and text is truncated', simpleTest(overflowSelector));
  });

  describe('short and long variants', function() {
    it('looks shorter and longer', simpleTest(widthSelector));
  });

  describe('disabled', function() {
    it('looks disabled', simpleTest(disabledSelector));
  });

  describe('validatable', function() {
    it('initially looks normal', simpleTest(validationSelector));

    describe('when valid and non-pristine', function() {
      beforeEach(async function() {
        const [select] = await waitAndGetElements(`${validationSelector} .nx-form-select__select`);

        await select.select('AU');
      });

      it('shows valid styling', simpleTest(validationSelector));

      // color-contrast rule breaks in the presence of background-images
      it('passes a11y checks', a11yTest(builder => builder.disableRules('color-contrast')));
    });


    describe('when invalid and non-pristine', function() {
      beforeEach(async function() {
        const [select] = await waitAndGetElements(`${validationSelector} .nx-form-select__select`);

        await select.select('AU');
        await select.select('');
      });
      it('shows invalid styling', simpleTest(validationSelector));

      // color-contrast rule breaks in the presence of background-images
      it('passes a11y checks', a11yTest(builder => builder.disableRules('color-contrast')));
    });
  });

  // color-contrast rule breaks in the presence of background-images
  it('passes a11y checks', a11yTest(builder => builder.disableRules('color-contrast')));
});
