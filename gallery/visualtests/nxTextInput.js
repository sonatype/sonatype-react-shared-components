/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Target } = require('@applitools/eyes-webdriverio');
const { focusTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxTextInput', function() {
  const simpleComponentSelector = '#nx-text-input-simple-example .nx-text-input',
      validatableComponentSelector = '#nx-text-input-validation-example .nx-text-input',
      passwordComponentSelector = '#nx-text-input-password-example .nx-text-input',
      textareaComponentSelector = '#nx-text-input-textarea-validation-example .nx-text-input',
      validatableTextareaComponentSelector = '#nx-text-input-textarea-validation-example .nx-text-input',
      disabledComponentSelector = '#nx-text-input-disabled-example .nx-text-input.pristine',
      disabledValidComponentSelector = '#nx-text-input-disabled-example .nx-text-input.valid',
      disabledInvalidComponentSelector = '#nx-text-input-disabled-example .nx-text-input.invalid';

  function getInputElementSelector(componentSelector, inputType = 'input') {
    return `${componentSelector} ${inputType}`;
  }

  beforeEach(async function() {
    await browser.url('#/pages/NxTextInput');
  });

  describe('Simple NxTextInput', function() {
    it('has a light border when pristine', simpleTest(simpleComponentSelector));

    it('has a dark border when hovered',
        hoverTest(simpleComponentSelector, getInputElementSelector(simpleComponentSelector)));

    it('has a blue border when focused',
        focusTest(simpleComponentSelector, getInputElementSelector(simpleComponentSelector)));

    it('has a dark border when hovered and focused', async function() {
      const focusElement = await browser.$(getInputElementSelector(simpleComponentSelector));

      await browser.execute(function(el) {
        el.focus();
      }, focusElement);

      await hoverTest(simpleComponentSelector)();
    });

    it('has a dark border when non-empty', async function() {
      const inputElement = await browser.$(getInputElementSelector(simpleComponentSelector));

      await inputElement.setValue('foo');

      browser.execute(function(el) {
        el.blur();
      }, inputElement);

      await simpleTest(simpleComponentSelector)();
    });
  });

  describe('Validatable NxTextInput', function() {
    it('has a light border when pristine', simpleTest(validatableComponentSelector));

    it('has validation styles when valid', async function() {
      const inputSelector = getInputElementSelector(validatableComponentSelector),
          [targetElement, inputElement] = await Promise.all([
            browser.$(validatableComponentSelector),
            browser.$(inputSelector)
          ]);

      await targetElement.scrollIntoView({ block: 'center' });
      await inputElement.setValue('foo');
      await browser.eyesRegionSnapshot(null, Target.region(targetElement));
    });

    it('has invalid validation styles when invalid and dirty', async function() {
      const inputSelector = getInputElementSelector(validatableComponentSelector),
          [targetElement, inputElement] = await Promise.all([
            browser.$(validatableComponentSelector),
            browser.$(inputSelector)
          ]);

      await targetElement.scrollIntoView({ block: 'center' });
      await inputElement.setValue('foo');
      await browser.keys(['Backspace', 'Backspace', 'Backspace']);
      await browser.eyesRegionSnapshot(null, Target.region(targetElement));
    });
  });

  describe('Password NxTextInput', function() {
    it('displays password dots', async function() {
      const inputSelector = getInputElementSelector(passwordComponentSelector),
          [targetElement, inputElement] = await Promise.all([
            browser.$(passwordComponentSelector),
            browser.$(inputSelector)
          ]);

      await targetElement.scrollIntoView({ block: 'center' });
      await inputElement.setValue('foo');
      await browser.eyesRegionSnapshot(null, Target.region(targetElement));
    });
  });

  describe('Textarea NxTextInput', function() {
    it('looks right', simpleTest(textareaComponentSelector));
  });

  describe('Validatable Textarea NxTextInput', function() {
    it('has validation styles when valid', async function() {
      const inputSelector = getInputElementSelector(validatableTextareaComponentSelector, 'textarea'),
          [targetElement, inputElement] = await Promise.all([
            browser.$(validatableTextareaComponentSelector),
            browser.$(inputSelector)
          ]);

      await targetElement.scrollIntoView({ block: 'center' });
      await inputElement.setValue('foo');
      await browser.eyesRegionSnapshot(null, Target.region(targetElement));
    });

    it('has invalid validation styles when invalid and dirty', async function() {
      const inputSelector = getInputElementSelector(validatableTextareaComponentSelector, 'textarea'),
          [targetElement, inputElement] = await Promise.all([
            browser.$(validatableTextareaComponentSelector),
            browser.$(inputSelector)
          ]);

      await targetElement.scrollIntoView({ block: 'center' });
      await inputElement.setValue('foo');
      await browser.keys(['Backspace', 'Backspace', 'Backspace']);
      await browser.eyesRegionSnapshot(null, Target.region(targetElement));
    });
  });

  describe('Disabled NxTextInput', function() {
    it('looks disabled when pristine', simpleTest(disabledComponentSelector));
    it('looks disabled when valid', simpleTest(disabledValidComponentSelector));
    it('looks disabled when invalid', simpleTest(disabledInvalidComponentSelector));
  });
});
