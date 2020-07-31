/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Target } = require('@applitools/eyes-webdriverio');
const { focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxTextInput', function() {
  const simpleComponentSelector = '#nx-filter-input-simple-example .nx-filter-input',
      disabledComponentSelector = '#nx-filter-input-disabled-example .nx-filter-input';

  function getInputElementSelector(componentSelector, inputType = 'input') {
    return `${componentSelector} ${inputType}`;
  }

  beforeEach(async function() {
    await browser.url('#/pages/NxFilterInput');
  });

  describe('Simple NxFilterInput', function() {
    it('has a dark border when pristine', simpleTest(simpleComponentSelector));

    it('has a dark border when hovered',
        hoverTest(simpleComponentSelector, getInputElementSelector(simpleComponentSelector)));
    it('has a blue border when focused',
        focusTest(simpleComponentSelector, getInputElementSelector(simpleComponentSelector)));

    it('has a blue border when hovered and focused',
        focusAndHoverTest(simpleComponentSelector, getInputElementSelector(simpleComponentSelector)));

    it('has a dark border when non-empty', async function() {
      const inputElement = await browser.$(getInputElementSelector(simpleComponentSelector));

      await inputElement.setValue('foo');

      browser.execute(function(el) {
        el.blur();
      }, inputElement);

      await simpleTest(simpleComponentSelector)();
    });
  });

  describe('Disabled NxFilterInput', function() {
    it('looks disabled', simpleTest(disabledComponentSelector));
  });
});
