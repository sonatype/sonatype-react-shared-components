/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxTransferList', function() {
  const {
    clickTest,
    focusTest,
    focusAndHoverTest,
    hoverTest,
    simpleTest,
    waitAndGetElements,
    checkScreenshot,
    wait,
    scrollIntoView,
    a11yTest
  } = setupBrowser('#/pages/Transfer List');

  const simpleListSelector = '#nx-transfer-list-minimal-example .nx-transfer-list',
      complexListSelector = '#nx-transfer-list-complex-example .nx-transfer-list',
      fullWidthListSelector = '#nx-transfer-list-full-width-example .nx-transfer-list',
      itemsSelector =
        `${simpleListSelector} .nx-transfer-list__half:first-child .nx-transfer-list__item`,
      firstItemSelector = `${itemsSelector}:nth-child(2) .nx-transfer-list__select`,
      lastItemSelector = `${itemsSelector}:nth-last-child(2) .nx-transfer-list__select`,
      secondItemSelector = `${itemsSelector}:nth-child(3) .nx-transfer-list__select`,
      transferAllSelector =
        `${complexListSelector} .nx-transfer-list__half:first-child .nx-transfer-list__move-all`;

  it('looks right', simpleTest(simpleListSelector));
  it('looks right with complex options', simpleTest(complexListSelector));
  it('expands to full width with the appropriate class', simpleTest(fullWidthListSelector));
  it('handles overflowing content with a tooltip', async function() {
    const [list, firstItem] = await waitAndGetElements(simpleListSelector, firstItemSelector);

    await scrollIntoView(list);
    await firstItem.hover();

    await waitAndGetElements('.nx-tooltip');
    await wait(500);

    await checkScreenshot(list);
  });

  it('handles overflowing content with a tooltip on items initially scrolled out of view', async function() {
    const [list, lastItem] = await waitAndGetElements(simpleListSelector, lastItemSelector);

    await scrollIntoView(lastItem);
    await lastItem.hover();

    await waitAndGetElements('.nx-tooltip');
    await wait(500);

    await checkScreenshot(list);
  });

  describe('Items', function() {
    it('looks right when hovered', hoverTest(simpleListSelector, secondItemSelector));
    it('looks right when focused', focusTest(simpleListSelector, secondItemSelector));
    it('looks right when focused + hovered',
        focusAndHoverTest(simpleListSelector, secondItemSelector));
    it('looks right when clicked', clickTest(simpleListSelector, secondItemSelector));
  });

  describe('Move All Button', function() {
    it('looks right when hovered', hoverTest(complexListSelector, transferAllSelector));
    it('looks right when clicked', clickTest(complexListSelector, transferAllSelector));
  });

  it('passes a11y checks', a11yTest());
});
