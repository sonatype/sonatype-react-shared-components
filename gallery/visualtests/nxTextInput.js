/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Region, Target } = require('@applitools/eyes-webdriverio');
const { focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

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

  beforeEach(async function() {
    await browser.url('#/pages/Text Input');
  });

  describe('Simple NxTextInput', function() {
    it('has a dark border by default', simpleTest(simpleComponentSelector));

    it('has a darker border when hovered',
        hoverTest(simpleComponentSelector, getInputElementSelector(simpleComponentSelector)));
    it('has a blue border and glow when focused',
        focusTest(simpleComponentSelector, getInputElementSelector(simpleComponentSelector)));

    it('has a blue border and glow when hovered and focused',
        focusAndHoverTest(simpleComponentSelector, getInputElementSelector(simpleComponentSelector)));
  });

  describe('Validatable NxTextInput', function() {
    it('has a dark border when pristine', simpleTest(validatableComponentSelector));

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

      const { x, y } = await targetElement.getLocation();
      const region = new Region(parseInt(x, 10), parseInt(y, 10), 300, 74);

      await browser.eyesRegionSnapshot(null, Target.region(region));
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

      const { x, y } = await targetElement.getLocation();
      const region = new Region(parseInt(x, 10), parseInt(y, 10), 300, 300);

      await browser.eyesRegionSnapshot(null, Target.region(region));
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
});
