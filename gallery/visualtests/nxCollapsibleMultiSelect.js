/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxCollapsibleMultiSelect', function() {
  const { focusTest, hoverTest, simpleTest, a11yTest } = setupBrowser('#/pages/Collapsible Multi-Select');

  const selector = '#nx-collapsible-multi-select-example .nx-collapsible-items--select';
  const disabledWithTooltipSelector
    = '#nx-collapsible-multi-select-disabled-with-tooltip-example .gallery-example-live';
  const disabledWithTooltipHoverElementSelector = disabledWithTooltipSelector + ' .nx-collapsible-items__trigger';

  it('looks right', simpleTest(selector));

  describe('NxCollapsibleMultiSelect Disabled With Tooltip', function() {
    it('looks right', hoverTest(disabledWithTooltipSelector, disabledWithTooltipHoverElementSelector, true));
  });

  describe('NxCollapsibleMultiSelect checkbox', function() {
    const checkboxSelector = selector + ' .nx-collapsible-items__child:first-child .nx-radio-checkbox__input';
    it('has an offsetted blue outer border outline and glow when focused', focusTest(selector, checkboxSelector));
  });

  it('passes a11y checks', a11yTest());
});
