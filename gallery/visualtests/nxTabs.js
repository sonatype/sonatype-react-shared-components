/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxTabs', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxTabs');
  });

  const tabTileExampleSelector = '#nx-tab-tile-example .gallery-example-live',
      tabTileNoHeaderExampleSelector = '#nx-tab-tile-no-header-example .gallery-example-live',
      tabModalExampleSelector = '#nx-tab-modal-example',
      tabModalNoHeaderExampleSelector = '#nx-tab-modal-no-header-example';

  it('looks right in a Tile', simpleTest(tabTileExampleSelector));
  it('looks right in a Tile with no header', simpleTest(tabTileNoHeaderExampleSelector));

  describe('Check tab styles', function() {
    const selector = '#test-tab-list .nx-tab-test:nth-child(2)';

    it('has regular text and no border by default', simpleTest(selector));
    it('has semi-bold text when hovered', hoverTest(selector));
    it('has a light blue border and semi-bold text when clicked', clickTest(selector));
    it('has a light blue border when focused', focusTest(selector));
    it('has a light blue border and semi-bold text when focused and hovered', focusAndHoverTest(selector));
  });

  function simpleModalTest(exampleSelector) {
    return async function() {
      const openModalBtnSelector = `${exampleSelector} button`,
          closeModalBtnSelector =
              `${exampleSelector} .nx-footer .nx-btn-bar .nx-btn:not(.nx-btn--primary):not(.nx-btn-tertiary)`;

      const openModalBtn = await browser.$(openModalBtnSelector);

      await openModalBtn.scrollIntoView({ block: 'center' });
      await openModalBtn.click();

      const closeModalBtn = await browser.$(closeModalBtnSelector);

      try {
        // take image of entire viewport in order to capture the backdrop color
        await eyesRegionSnapshot(null, Target.region(targetElement));
      }
      finally {
        await closeModalBtn.click();
      }
    }
  }

  describe('Tabs in an NxModal', function() {
    it('looks right', simpleModalTest(tabModalExampleSelector));
  });

  describe('Tabs in an NxModal with no header', function() {
    it('looks right', simpleModalTest(tabModalNoHeaderExampleSelector));
  });
});
