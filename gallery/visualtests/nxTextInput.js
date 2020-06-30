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
      validatableComponentSelector = '#nx-text-input-simple-example .nx-text-input',
      passwordComponentSelector = '#nx-text-input-simple-example .nx-text-input',
      textareaComponentSelector = '#nx-text-input-simple-example .nx-text-input',
      validatableTextareaComponentSelector = '#nx-text-input-simple-example .nx-text-input',
      disabledComponentSelector = '#nx-text-input-simple-example .nx-text-input';

  function getInputElementSelector(componentSelector) {
    return componentSelector + ' input';
  }

  beforeEach(async function() {
    await browser.url('#/pages/NxTextInput');
  });

  describe('Simple NxTextInput', function() {
    //it('has a light border when pristine', simpleTest(simpleComponentSelector));
    it('has a dark border when hovered',
        hoverTest(simpleComponentSelector, getInputElementSelector(simpleComponentSelector)));

    /*
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
    */
  });
});
