/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxSearchTransferList', function() {
  const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest, waitAndGetElements, checkScreenshot } =
      setupBrowser('#/pages/NxSearchTransferList');

  const simpleListSelector = '#nx-search-transfer-list-example .nx-search-transfer-list',
      complexListSelector = '#nx-search-transfer-list-complex-example .nx-search-transfer-list';

  it('looks right', simpleTest(simpleListSelector));

  it('looks right when displaying results', async function() {
    const inputSelector = `${simpleListSelector} .nx-filter-input input`,
        dropdownButtonSelector = `${simpleListSelector} .nx-dropdown-button`,
        [component, input] = await waitAndGetElements(
          simpleListSelector,
          inputSelector
        );

    await input.focus();
    await getPage().keyboard.type('1');
    await getPage().waitForSelector(dropdownButtonSelector);

    await checkScreenshot(component);
  });

  it('looks right with complex options', simpleTest(complexListSelector));
});
