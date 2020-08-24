/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Target } = require('@applitools/eyes-webdriverio');
const { simpleTest } = require('./testUtils');

describe('nx-scrollable', function() {
  beforeEach(async function() {
    await browser.url('#/pages/nx-scrollable');
  });

  const simpleSelector = '#nx-scrollable-simple-example .nx-scrollable',
      tableSelector = '#nx-scrollable-table-example .nx-scrollable';

  it('looks right', simpleTest(simpleSelector));

  describe('Scrollable table', function() {
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
});
