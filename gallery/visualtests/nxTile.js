/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Region, Target } = require('@applitools/eyes-webdriverio');
const { simpleTest } = require('./testUtils');

describe('nx-tile', function() {
  beforeEach(async function() {
    await browser.url('#/pages/nx-tile');
  });

  const simpleTileSelector = '#nx-tile-simple-example .gallery-raw-html-example',
      actionsTileSelector = '#nx-tile-actions-example .gallery-raw-html-example',
      subtitleTileSelector = '#nx-tile-subtitle-example .gallery-raw-html-example',
      horizontalRuleTileSelector = '#nx-tile-horizontal-rule-example .gallery-raw-html-example',
      subsectionsTileSelector = '#nx-tile-subsections-example .gallery-raw-html-example',
      dropdownActionMenuTileSelector = '#nx-tile-dropdown-actions-example .nx-tile';

  describe('Simple nx-tile', function() {
    it('looks right', simpleTest(simpleTileSelector));
  });

  describe('nx-tile with actions buttons', function() {
    it('looks right', simpleTest(actionsTileSelector));
  });

  describe('nx-tile with wrapping subtitle', function() {
    it('looks right', simpleTest(subtitleTileSelector));
  });

  describe('nx-tile with horizontal rule', function() {
    it('looks right', simpleTest(horizontalRuleTileSelector));
  });

  describe('nx-tile with subsections', function() {
    it('looks right', simpleTest(subsectionsTileSelector));
  });

  describe('nx-tile with expanded dropdown in actions menu', function() {
    it('looks right', async function() {
      const dropdownSelector = `${dropdownActionMenuTileSelector} .nx-dropdown`,
          screenshotHeight = 210,
          [tileEl, dropdownEl] =
              await Promise.all([browser.$(dropdownActionMenuTileSelector), browser.$(dropdownSelector)]);

      await dropdownEl.scrollIntoView({ block: 'center' });
      await dropdownEl.click();

      const { x, y, width, height } = await browser.getElementRect(tileElement.elementId),
          screenshotRegion = new Region(x, y, width, screenshotHeight);

      await browser.eyesRegionSnapshot(null, Target.region(screenshotRegion));
    });
  });
});
