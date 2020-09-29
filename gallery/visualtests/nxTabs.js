/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { simpleTest } = require('./testUtils');

describe('NxTabs', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxTabs');
  });

  const tabTileExampleSelector = '#nx-tab-tile-example',
      tabTileNoHeaderExampleSelector = '#nx-tab-tile-no-header-example',
      tabModalExampleSelector = '#nx-tab-modal-example',
      tabModalNoHeaderExampleSelector = '#nx-tab-modal-no-header-example';

  describe('Tabs in an NxTile', function() {
    it('looks right', simpleTest(tabTileExampleSelector));
  });

  describe('Tabs in an NxTile with no header', function() {
    it('looks right', simpleTest(tabTileNoHeaderExampleSelector));
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
        await browser.eyesSnapshot(null);
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
