/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxSearchTransferList', function() {
  const {
    simpleTest,
    waitAndGetElements,
    checkScreenshot,
    getPage,
    a11yTest
  } = setupBrowser('#/pages/Search Transfer List');

  const simpleListSelector = '#nx-search-transfer-list-example .nx-search-transfer-list',
      complexListSelector = '#nx-search-transfer-list-complex-example .nx-search-transfer-list';

  it('looks right', simpleTest(simpleListSelector));

  describe('when displaying results', function() {
    beforeEach(async function() {
      const inputSelector = `${simpleListSelector} .nx-filter-input input`,
          dropdownButtonSelector = `${simpleListSelector} .nx-dropdown-button`,
          [input] = await waitAndGetElements(inputSelector);

      await input.focus();
      await getPage().keyboard.type('1');
      await getPage().waitForSelector(dropdownButtonSelector);

    });

    it('looks right when displaying results', async function() {
      const [component] = await waitAndGetElements(simpleListSelector);
      await checkScreenshot(component);
    });

    // see notes in nxSearchDropdown.js
    it('passes a11y checks', a11yTest(builder => builder.disableRules(['color-contrast', 'aria-valid-attr-value'])));
  });

  it('looks right with complex options', simpleTest(complexListSelector));

  it('passes a11y checks', a11yTest());
});
