/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Target } = require('@applitools/eyes-webdriverio');
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxTable', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxTable');
  });

  const clickableTableSelector = '#nx-table-clickable-example .nx-table',
      sortableTableSelector = '#nx-table-sortable-example .nx-table',
      loadingTableSelector = '#nx-table-loading-example .nx-table',
      errorTableSelector = '#nx-table-error-example .nx-table';

  it('looks right with a hovered row', async function() {
    const middleRowSelector = `${clickableTableSelector} tbody tr:nth-of-type(2)`,
        [table, row] = await Promise.all([browser.$(clickableTableSelector), browser.$(middleRowSelector)]);

      await row.scrollIntoView({ block: 'center' });
      await row.moveTo();
      await browser.eyesRegionSnapshot(null, Target.region(table));
  });

  it('looks right with an active sort column', async function() {
    const columnSelector = `${sortableTableSelector} thead th:first-child`,
        [table, columnHeader] = await Promise.all([browser.$(sortableTableSelector), browser.$(columnSelector)]);

      await table.scrollIntoView({ block: 'center' });
      await columnHeader.click();
      await browser.eyesRegionSnapshot(null, Target.region(table));
  });

  it('looks right when loading', simpleTest(loadingTableSelector));
  it('looks right when showing an error', simpleTest(errorTableSelector));

  describe('Scrollable table', function() {
    beforeEach(async function() {
      await browser.url('#/pages/nx-table');
    });

    const tableSelector = '#nx-table-scrolling-example .nx-scrollable';

    it('looks right', simpleTest(tableSelector));

    it('looks right when scrolled down', async function() {
      const bottomRowSelector = `${tableSelector} tbody tr:last-child`,
          topRowSelector = `${tableSelector} tbody tr:first-child`,
          [scrollableEl, bottomRowEl, topRowEl] =
              await Promise.all([browser.$(tableSelector), browser.$(bottomRowSelector), browser.$(topRowSelector)]);

      try {
        await bottomRowEl.scrollIntoView({ block: 'center' });
        await browser.saveScreenshot('/tmp/screenshot.png');
        await browser.eyesRegionSnapshot(null, Target.region(scrollableEl));
      }
      finally {
        await topRowEl.scrollIntoView({ block: 'center' });
      }
    });
  });

  describe('Truncation and Wrapping table', function() {
    beforeEach(async function() {
      await browser.url('#/pages/nx-table');
    });

    const tableSelector = '#nx-table-truncation-wrapping-example .nx-table';

    it('looks right', simpleTest(tableSelector));
  });

  describe('Fixed layout table', function() {
    beforeEach(async function() {
      await browser.url('#/pages/nx-table');
    });

    const tableSelector = '#nx-table-fixed-layout-example .nx-table';

    it('looks right', simpleTest(tableSelector));
  });
});
