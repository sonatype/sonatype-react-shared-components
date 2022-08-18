/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxCombobox', function() {
  const {
    waitAndGetElements,
    getPage,
    // blurElement,
    // scrollIntoView,
    // disableLoadingSpinnerAnimation,
    checkScreenshot,
    // isFocused,
    // dismissResultingDialog,
    a11yTest
  } = setupBrowser('#/pages/Combobox');

  const basicExampleSelector = '#nx-combobox-basic-example .nx-combobox';
  // nonEmptinessExampleSelector = '#nx-combobox-non-emptiness-example .nx-combobox',
  // backendExampleSelector = '#nx-combobox-backend-example .nx-combobox',
  // errorExampleSelector = '#nx-combobox-error-example nx-combobox',
  // disabledExampleSelector = '#nx-combobox-disabled-example nx-combobox';

  describe('when displaying results', function() {
    beforeEach(async function() {
      const inputSelector = `${basicExampleSelector} .nx-combobox__input input`,
          dropdownButtonSelector = `${basicExampleSelector} .nx-dropdown-button`,
          [input] = await waitAndGetElements(inputSelector);

      await input.focus();
      await getPage().keyboard.type('a');
      await getPage().waitForSelector(dropdownButtonSelector);
    });

    it('looks right', async function() {
      const [component] = await waitAndGetElements(basicExampleSelector);
      await checkScreenshot(component, 800, 376);
    });
  });
  it('passes a11y checks', a11yTest());
});
