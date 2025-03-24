/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxCollapsibleMultiSelect', function() {
  const {
    focusTest,
    hoverTest,
    simpleTest,
    a11yTest,
    wait,
    waitAndGetElements,
    moveMouseAway,
    typeOnKeyboard,
    blurElement,
    checkScreenshot
  } = setupBrowser('#/pages/Collapsible Multi-Select');

  const selector = '#nx-collapsible-multi-select-example .nx-collapsible-items--select';
  const disabledWithTooltipSelector
    = '#nx-collapsible-multi-select-disabled-with-tooltip-example .gallery-example-live';
  const disabledWithTooltipHoverElementSelector = disabledWithTooltipSelector + ' .nx-collapsible-items__trigger';

  it('looks right', simpleTest(selector));

  it('looks right when collapsed', async () => {
    const triggerSelector = `${selector} .nx-collapsible-items__trigger`;

    const [targetElement] = await waitAndGetElements(triggerSelector);

    await targetElement.click();

    // wait for animation
    await wait(500);

    await moveMouseAway();

    await blurElement(targetElement);

    await checkScreenshot(targetElement);
  });

  it('looks right with clear button', async () => {
    const inputSelector = `${selector} .nx-text-input__input`;

    const [fullElement] = await waitAndGetElements(selector);

    await typeOnKeyboard('bicycle', inputSelector);

    await checkScreenshot(fullElement);
  });

  describe('NxCollapsibleMultiSelect Disabled With Tooltip', function() {
    it('looks right', hoverTest(disabledWithTooltipSelector, disabledWithTooltipHoverElementSelector, true));
  });

  describe('NxCollapsibleMultiSelect checkbox', function() {
    const checkboxSelector = selector + ' .nx-collapsible-items__child:first-child .nx-radio-checkbox__input';
    it('has an offsetted blue outer border outline and glow when focused', focusTest(selector, checkboxSelector));
  });

  // Aria does not allow for an element with role=menu to have any children with role=img (amongst others),
  // such as is the case for NxCollapsibleMultiSelect. Seeing that the role of ‘menuitemcheckbox’ cannot be
  // assigned to the <label> element (as guidelines suggest 'menuitemcheckbox' to wrap the checkbox & its
  // label), and an input[type=checkbox/radio] cannot be assigned role=none, we need to override this error
  it('passes a11y checks', a11yTest(builder => builder.disableRules(['color-contrast', 'aria-required-children'])));
});
