/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxTabs', function() {
  const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest, waitAndGetElements, checkScreenshot } =
      setupBrowser('#/pages/Tabs?noCheckeredBackground');

  const tabTileExampleSelector = '#nx-tab-tile-example .nx-tile',
      tabTileNoHeaderExampleSelector = '#nx-tab-tile-no-header-example .nx-tile',
      tabOutsideTileExampleSelector = '#nx-tab-tile-no-header-example .nx-tile',
      tabModalExampleSelector = '#nx-tab-modal-example',
      tabModalNoHeaderExampleSelector = '#nx-tab-modal-no-header-example';

  it('looks right in a Tile', simpleTest(tabTileExampleSelector));
  it('looks right in a Tile with no header', simpleTest(tabTileNoHeaderExampleSelector));

  it('looks right outside of a Tile', simpleTest(tabOutsideTileExampleSelector));

  describe('Check tab styles', function() {
    const selector = '#nx-tab-tile-example .nx-tab:nth-child(2)';

    it('has regular text and no border by default', simpleTest(selector));
    it('has semi-bold text when hovered',
        hoverTest(tabTileExampleSelector, `${tabTileExampleSelector} .nx-tab:nth-child(2)`));
    it('has a light blue border and semi-bold text when clicked',
        clickTest(tabTileExampleSelector, `${tabTileExampleSelector} .nx-tab:nth-child(2)`));
    it('has a light blue border when focused',
        focusTest(tabTileExampleSelector, `${tabTileExampleSelector} .nx-tab:nth-child(2)`))
    it('has a light blue border and semi-bold text when focused and hovered',
        focusAndHoverTest(tabTileExampleSelector, `${tabTileExampleSelector} .nx-tab:nth-child(2)`))
  });

  function simpleModalTest(exampleSelector) {
    return async function() {
      const openModalBtnSelector = `${exampleSelector} button`,
          closeModalBtnSelector =
              `${exampleSelector} .nx-footer .nx-btn-bar .nx-btn:not(.nx-btn--primary):not(.nx-btn-tertiary)`,
          modalSelector = `${exampleSelector} .nx-modal`;

      const [openModalBtn] = await waitAndGetElements(openModalBtnSelector);

      await openModalBtn.click();

      const [closeModalBtn, targetElement] = await waitAndGetElements(closeModalBtnSelector, modalSelector);

      await checkScreenshot(targetElement);
    }
  }

  describe('Tabs in an NxModal', function() {
    it('looks right', simpleModalTest(tabModalExampleSelector));
  });

  describe('Tabs in an NxModal with no header', function() {
    it('looks right', simpleModalTest(tabModalNoHeaderExampleSelector));
  });

  it('passes a11y checks', a11yTest());
});
