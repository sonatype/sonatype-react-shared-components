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
    checkScreenshot,
    checkScreenshotCoordinates,
    blurElement
  } = setupBrowser('#/pages/Transfer List Half');

  const wait1Sec = () => wait(1000);

  const simpleListSelector = '#nx-transfer-list-half-example .nx-transfer-list__half',
      complexListSelector = '#nx-transfer-list-half-ordering-example .nx-transfer-list__half',
      complexListFullSelector = '#nx-transfer-list-half-ordering-example .gallery-example-live',
      tooltipListSelector = '#nx-transfer-list-half-custom-tooltip-example .nx-transfer-list__half',
      disableTransferListSelector = '#nx-transfer-list-half-disable-transfer-example .nx-transfer-list__half',
      orderingWithDisableTransferListSelector =
       '#nx-transfer-list-half-ordering-with-disable-transfer-example .nx-transfer-list__half',
      itemsSelector = `${simpleListSelector} .nx-transfer-list__item`,
      tooltipItemsSelector = `${tooltipListSelector} .nx-transfer-list__item`,
      disableTransferItemSelector = `${disableTransferListSelector} .nx-transfer-list__item`,
      firstItemSelector = `${itemsSelector}:first-child .nx-transfer-list__select`,
      secondItemSelector = `${itemsSelector}:nth-child(2) .nx-transfer-list__select`,
      transferAllSelector = `${complexListSelector} .nx-transfer-list__move-all`,
      complexFirstItemSelector = `${complexListSelector} .nx-transfer-list__item:first-child`,
      complexSecondItemSelector
          = `${complexListSelector} .nx-transfer-list__item:nth-child(2) .nx-transfer-list__select`,
      moveUpSelector = `${complexFirstItemSelector} .nx-transfer-list__button-bar > :first-child`,
      moveDownSelector = `${complexFirstItemSelector} .nx-transfer-list__button-bar > :last-child`,
      filterBoxSelector = `${complexListSelector} .nx-text-input__input`,
      firstTooltipItemSelector = `${tooltipItemsSelector}:first-child .nx-transfer-list__select`,
      secondTooltipItemSelector = `${tooltipItemsSelector}:nth-child(2) .nx-transfer-list__select`,
      secondDisableTransferItemSelector = `${disableTransferItemSelector}:nth-child(2) .nx-transfer-list__select`;

  it('looks right', simpleTest(simpleListSelector));
  it('looks right with complex options', simpleTest(complexListSelector));
  it('handles overflowing content with a tooltip', async function() {
    const [list, firstItem] = await waitAndGetElements(simpleListSelector, firstItemSelector);

    await scrollIntoView(list);
    await firstItem.hover();

    await waitForSelectors('.nx-tooltip');

    // give tooltip time to fully appear
    await wait1Sec();

    await checkScreenshot(list);
  });

  it('puts a dark border and grey background on hovered items', hoverTest(simpleListSelector, secondItemSelector));
  it('puts a blue border on focused items', focusTest(simpleListSelector, secondItemSelector));
  it('puts a blue border and grey background on focused+hovered items',
      focusAndHoverTest(simpleListSelector, secondItemSelector));
  it('puts a light grey background on clicked items', clickTest(simpleListSelector, secondItemSelector));

  it('makes the move all button dark blue when hovered', hoverTest(complexListSelector, transferAllSelector));
  it('makes the move all button light blue when clicked', clickTest(complexListSelector, transferAllSelector));

  it('gives the move up button a tooltip when hovered', hoverTest(complexListFullSelector, moveUpSelector, true));
  it('gives the move down button a tooltip when hovered', hoverTest(complexListFullSelector, moveDownSelector, true));

  describe('when filtered', function() {
    beforeEach(async function() {
      const [input] = await waitAndGetElements(filterBoxSelector);

      await input.type('I');
      await blurElement(input);
    });

    it('gives the move up button no tooltip of its own', hoverTest(complexListFullSelector, moveUpSelector, true));
    it('gives the move down button no tooltip of its own', hoverTest(complexListFullSelector, moveDownSelector, true));
  });

  describe('explicit tooltip', function() {
    it('creates a tooltip', async function() {
      const [list, secondItem] = await waitAndGetElements(tooltipListSelector, secondTooltipItemSelector);

      await scrollIntoView(list);
      await secondItem.hover();

      await waitForSelectors('.nx-tooltip');

      // give tooltip time to fully appear
      await wait1Sec();

      await checkScreenshot(list);
    });

    it('replaces overflow tooltip and receives custom props', async function() {
      const [list, firstItem] = await waitAndGetElements(tooltipListSelector, firstTooltipItemSelector);

      await scrollIntoView(list);
      await firstItem.hover();

      await waitForSelectors('.nx-tooltip');

      // give tooltip time to fully appear
      await wait1Sec();

      const { x, y, width, height } = await list.boundingBox();

      await checkScreenshotCoordinates(x - 297, y, width + 297, height);
    });
  });

  describe('disable transfer', function() {
    it('looks right', simpleTest(disableTransferListSelector));
    it('looks right when disabled',
        hoverTest(disableTransferListSelector, secondDisableTransferItemSelector));
    it('looks right when clicked',
        clickTest(disableTransferListSelector, secondDisableTransferItemSelector));
  });

  describe('ordering with disable transfer', function() {
    it('looks right', simpleTest(orderingWithDisableTransferListSelector));
  });

  it('passes a11y checks', async function() {
    // wait for tooltips to initialize
    await wait(500);
    await a11yTest()();
  });

  describe('move icons', function() {
    it('renders an x icon when onItemChange is provided and isSelected is true', simpleTest(secondItemSelector));
    it('renders a plus icon when onItemChange is provided but isSelected is false',
        simpleTest(complexSecondItemSelector));
    it('doesn\'t render a move icon when onItemChange is not provided', simpleTest(secondDisableTransferItemSelector));
  });
});
