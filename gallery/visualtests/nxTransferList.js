/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Target } = require('@applitools/eyes-webdriverio');
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxTransferList', function() {
  beforeEach(async function() {
    await browser.url('#/pages/Transfer List');
    await browser.refresh();
  });

  const simpleListSelector = '#nx-transfer-list-minimal-example .nx-transfer-list',
      complexListSelector = '#nx-transfer-list-complex-example .nx-transfer-list',
      fullWidthListSelector = '#nx-transfer-list-full-width-example .nx-transfer-list',
      itemsSelector =
        `${simpleListSelector} .nx-transfer-list__half:first-child .nx-transfer-list__item`,
      firstItemSelector = `${itemsSelector}:first-child .nx-transfer-list__select`,
      secondItemSelector = `${itemsSelector}:nth-child(2) .nx-transfer-list__select`,
      transferAllSelector =
        `${complexListSelector} .nx-transfer-list__half:first-child .nx-transfer-list__move-all`;

  it('looks right', simpleTest(simpleListSelector));
  it('looks right with complex options', simpleTest(complexListSelector));
  it('expands to full width with the appropriate class', simpleTest(fullWidthListSelector));
  it('handles overflowing content with a tooltip', async function() {
    const [list, firstItem] = await Promise.all([browser.$(simpleListSelector), browser.$(firstItemSelector)]);

    await list.scrollIntoView({ block: 'center' });
    await firstItem.moveTo();

    const tooltip = await browser.$('.nx-tooltip');
    await tooltip.waitForDisplayed();

    await browser.eyesRegionSnapshot(null, Target.region(list));
  });

  it('puts a dark border on hovered items', hoverTest(simpleListSelector, secondItemSelector));
  it('puts a blue border and glow on focused items', focusTest(simpleListSelector, secondItemSelector));
  it('puts a blue border and blue glow on focused+hovered items',
      focusAndHoverTest(simpleListSelector, secondItemSelector));
  it('puts a grey background on clicked items', clickTest(simpleListSelector, secondItemSelector));

  it('makes the move all button dark blue when hovered', hoverTest(complexListSelector, transferAllSelector));
  it('makes the move all button light blue when clicked', clickTest(complexListSelector, transferAllSelector));
});
