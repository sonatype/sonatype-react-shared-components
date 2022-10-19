/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxTransferListHalf', function() {
  const {
    waitAndGetElements,
    wait,
    scrollIntoView,
    clickTest,
    focusTest,
    focusAndHoverTest,
    hoverTest,
    simpleTest,
    a11yTest,
    waitForSelectors,
    checkScreenshot
  } = setupBrowser('#/pages/Transfer List Half');

  const wait1Sec = () => wait(1000);

  const simpleListSelector = '#nx-transfer-list-half-example .nx-transfer-list__half',
      complexListSelector = '#nx-transfer-list-half-ordering-example .nx-transfer-list__half',
      complexListFullSelector = '#nx-transfer-list-half-ordering-example .gallery-example-live',
      itemsSelector =
        `${simpleListSelector} .nx-transfer-list__item`,
      firstItemSelector = `${itemsSelector}:first-child .nx-transfer-list__select`,
      secondItemSelector = `${itemsSelector}:nth-child(2) .nx-transfer-list__select`,
      transferAllSelector = `${complexListSelector} .nx-transfer-list__move-all`,
      complexFirstItemSelector = `${complexListSelector} .nx-transfer-list__item:first-child`,
      moveUpSelector = `${complexFirstItemSelector} .nx-transfer-list__button-bar > :first-child`,
      moveDownSelector = `${complexFirstItemSelector} .nx-transfer-list__button-bar > :last-child`,
      filterBoxSelector = `${complexListSelector} .nx-text-input__input`;

  it('looks right', simpleTest(simpleListSelector));
  it('looks right with complex options', simpleTest(complexListSelector));
  it('handles overflowing content with a tooltip', async function() {
    const [list, firstItem] = await waitAndGetElements(simpleListSelector, firstItemSelector);

    await scrollIntoView(list);
    await firstItem.hover();

    await waitForSelectors('.nx-tooltip');

    // give toolttip time to fully appear
    await wait1Sec();

    await checkScreenshot(list);
  });

  it('puts a dark border on hovered items', hoverTest(simpleListSelector, secondItemSelector));
  it('puts a blue border and glow on focused items', focusTest(simpleListSelector, secondItemSelector));
  it('puts a blue border and blue glow on focused+hovered items',
      focusAndHoverTest(simpleListSelector, secondItemSelector));
  it('puts a grey background on clicked items', clickTest(simpleListSelector, secondItemSelector));

  it('makes the move all button dark blue when hovered', hoverTest(complexListSelector, transferAllSelector));
  it('makes the move all button light blue when clicked', clickTest(complexListSelector, transferAllSelector));

  it('gives the move up button a tooltip when hovered', hoverTest(complexListFullSelector, moveUpSelector, true));
  it('gives the move down button a tooltip when hovered', hoverTest(complexListFullSelector, moveDownSelector, true));

  describe('when filtered', function() {
    beforeEach(async function() {
      const [input] = await waitAndGetElements(filterBoxSelector);

      await input.type('I');
    });

    it('gives the move up button no tooltip of its own', hoverTest(complexListFullSelector, moveUpSelector, true));
    it('gives the move down button no tooltip of its own', hoverTest(complexListFullSelector, moveDownSelector, true));
  });

  it('passes a11y checks', a11yTest());
});
