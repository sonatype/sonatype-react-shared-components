/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxTextInput', function() {
  const simpleComponentSelector = '#nx-text-input-simple-example .nx-text-input',
      validatableComponentSelector = '#nx-text-input-validation-example .nx-text-input',
      passwordComponentSelector = '#nx-text-input-password-example .nx-text-input',
      textareaComponentSelector = '#nx-text-input-textarea-validation-example .nx-text-input',
      validatableTextareaComponentSelector = '#nx-text-input-textarea-validation-example .nx-text-input',
      longComponentSelector = '#nx-text-input-long-example .nx-text-input:not(.nx-text-input--textarea)',
      shortComponentSelector = '#nx-text-input-short-example .nx-text-input:not(.nx-text-input--textarea)',
      longTextareaComponentSelector = '#nx-text-input-long-example .nx-text-input--textarea',
      shortTextareaComponentSelector = '#nx-text-input-short-example .nx-text-input--textarea',
      disabledComponentSelector = '#nx-text-input-disabled-example .nx-text-input.pristine',
      disabledValidComponentSelector = '#nx-text-input-disabled-example .nx-text-input.valid',
      disabledInvalidComponentSelector = '#nx-text-input-disabled-example .nx-text-input.invalid';

  function getInputElementSelector(componentSelector, inputType = 'input') {
    return `${componentSelector} ${inputType}`;
  }

  const { checkScreenshot, getPage, simpleTest, focusTest, hoverTest, focusAndHoverTest, a11yTest } =
      setupBrowser('#/pages/Text Input');

  describe('Simple NxTextInput', function() {
    it('has a dark border by default', simpleTest(simpleComponentSelector));

    it('has a darker border when hovered',
        hoverTest(simpleComponentSelector, getInputElementSelector(simpleComponentSelector)));

    it('has a blue inner outline when focused',
        focusTest(simpleComponentSelector, getInputElementSelector(simpleComponentSelector)));

    it('has a darker border and blue inner outline when hovered and focused',
        focusAndHoverTest(simpleComponentSelector, getInputElementSelector(simpleComponentSelector)));
  });

  describe('Validatable NxTextInput', function() {
    it('has a dark border when pristine', simpleTest(validatableComponentSelector));

    it('has validation styles when valid', async function() {
      const page = getPage(),
          inputSelector = getInputElementSelector(validatableComponentSelector),
          [targetElement, inputElement] = await Promise.all([
            page.$(validatableComponentSelector),
            page.$(inputSelector)
          ]);

      await inputElement.type('foo');
      await checkScreenshot(targetElement);
    });

    it('has invalid validation styles when invalid and dirty', async function() {
      const page = getPage(),
          inputSelector = getInputElementSelector(validatableComponentSelector),
          [targetElement, inputElement] = await Promise.all([
            page.$(validatableComponentSelector),
            page.$(inputSelector)
          ]);

      await inputElement.type('foo');
      await inputElement.press('Backspace');
      await inputElement.press('Backspace');
      await inputElement.press('Backspace');

      await checkScreenshot(targetElement, 300, 74);
    });
  });

  describe('Password NxTextInput', function() {
    it('displays password dots', async function() {
      const page = getPage(),
          inputSelector = getInputElementSelector(passwordComponentSelector),
          [targetElement, inputElement] = await Promise.all([
            page.$(passwordComponentSelector),
            page.$(inputSelector)
          ]);

      await inputElement.type('foo');
      await checkScreenshot(targetElement);
    });
  });

  describe('Textarea NxTextInput', function() {
    it('looks right', simpleTest(textareaComponentSelector));
  });

  describe('Validatable Textarea NxTextInput', function() {
    it('has validation styles when valid', async function() {
      const page = getPage(),
          inputSelector = getInputElementSelector(validatableTextareaComponentSelector, 'textarea'),
          [targetElement, inputElement] = await Promise.all([
            page.$(validatableTextareaComponentSelector),
            page.$(inputSelector)
          ]);

      await inputElement.type('foo');
      await checkScreenshot(targetElement);
    });

    it('has invalid validation styles when invalid and dirty', async function() {
      const page = getPage(),
          inputSelector = getInputElementSelector(validatableTextareaComponentSelector, 'textarea'),
          [targetElement, inputElement] = await Promise.all([
            page.$(validatableTextareaComponentSelector),
            page.$(inputSelector)
          ]);

      await inputElement.type('foo');
      await inputElement.press('Backspace');
      await inputElement.press('Backspace');
      await inputElement.press('Backspace');

      await checkScreenshot(targetElement, 300, 300);
    });
  });

  describe('Long NxTextInput', function() {
    it('looks right', simpleTest(longComponentSelector));
  });

  describe('Short NxTextInput', function() {
    it('looks right', simpleTest(shortComponentSelector));
  });

  describe('Long textarea NxTextInput', function() {
    it('looks right', simpleTest(longTextareaComponentSelector));
  });

  describe('Short textarea NxTextInput', function() {
    it('looks right', simpleTest(shortTextareaComponentSelector));
  });

  describe('Disabled NxTextInput', function() {
    it('looks disabled when pristine', simpleTest(disabledComponentSelector));
    it('looks disabled when valid', simpleTest(disabledValidComponentSelector));
    it('looks disabled when invalid', simpleTest(disabledInvalidComponentSelector));
  });

  it('passes a11y checks', a11yTest());
});
