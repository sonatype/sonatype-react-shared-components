/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Region, Target } = require('@applitools/eyes-webdriverio');
const { simpleTest, simpleTestLongElement } = require('./testUtils');

describe('nx-tile', function() {
  beforeEach(async function() {
    await browser.url('#/pages/nx-tile');
  });

  const simpleTileSelector = '#nx-tile-simple-example .nx-tile',
      actionsTileSelector = '#nx-tile-actions-example .nx-tile',
      subtitleTileSelector = '#nx-tile-subtitle-example .nx-tile',
      subsectionsTileSelector = '#nx-tile-subsections-example .nx-tile',
      dropdownActionMenuTileSelector = '#nx-tile-dropdown-actions-example .nx-tile';
      accordionTileSelector = '#nx-tile-accordion-example .gallery-example-live';

  describe('Simple nx-tile', function() {
    it('looks right', simpleTest(simpleTileSelector));
  });

  describe('nx-tile with actions buttons', function() {
    it('looks right', simpleTest(actionsTileSelector));
  });

  describe('nx-tile with wrapping subtitle', function() {
    it('looks right', simpleTest(subtitleTileSelector));
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

      const { x, y, width, height } = await browser.getElementRect(tileEl.elementId),
          screenshotRegion = new Region(x, y, width, screenshotHeight);

      await browser.eyesRegionSnapshot(null, Target.region(screenshotRegion));
    });
  });

  describe('nx-tile with accordions', function() {
    it('looks right', async function() {
      const accordionSelector = `${accordionTileSelector} .nx-accordion`,
          accordionEl = await browser.$(accordionSelector);

      // open an accordion just to make sure the tile expands accordingly
      await accordionEl.scrollIntoView({ block: 'center' });
      await accordionEl.click();

      await simpleTestLongElement(accordionTileSelector)();
    });
  });
});
