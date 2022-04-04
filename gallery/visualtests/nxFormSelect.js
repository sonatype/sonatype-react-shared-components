/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('nx-form-select', function() {
  const { focusTest, focusAndHoverTest, hoverTest, simpleTest, a11yTest } = setupBrowser('#/pages/Form Select');
  const selector = '#nx-form-select-example .nx-form-select',
      overflowSelector = '#nx-form-select-overflow-example .nx-form-select',
      disabledSelector = '#nx-form-select-disabled-example .nx-form-select',
      widthSelector = '#nx-form-select-widths-example .form-select-width-variants';


  describe('Simple NxFormSelect', function() {
    it('has a dark border by default', simpleTest(selector));

    it('has a darker border when hovered', hoverTest(selector));
    it('has a blue border when focused', focusTest(selector));
    it('has a blue border when hovered and focused', focusAndHoverTest(selector));
  });

  describe('NxFormSelect with long overflowing text', function() {
    it('it looks right and text is truncated', simpleTest(overflowSelector));
  });

  describe('Short and Long Variants of NxFormSelect', function() {
    const { simpleTest } = setupBrowser('#/pages/Form Select (HTML)');

    it('looks shorter and longer', simpleTest(widthSelector));
  });

  describe('Disabled NxFormSelect', function() {
    const { simpleTest } = setupBrowser('#/pages/Form Select (HTML)');

    it('looks disabled', simpleTest(disabledSelector));
  });

  // color-contrast rule breaks in the presence of background-images
  it('passes a11y checks', a11yTest(builder => builder.disableRules('color-contrast')));
});
