/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('nx-tile', function() {
  const { simpleTest, waitAndGetElements, checkScreenshot } = setupBrowser('#/pages/nx-tile');

  const simpleTileSelector = '#nx-tile-simple-example .nx-tile',
      actionsTileSelector = '#nx-tile-actions-example .nx-tile',
      subtitleTileSelector = '#nx-tile-subtitle-example .nx-tile',
      subsectionsTileSelector = '#nx-tile-subsections-example .nx-tile',
      dropdownActionMenuTileSelector = '#nx-tile-dropdown-actions-example .nx-tile';
      accordionTileSelector = '#nx-tile-accordion-example .gallery-example-live';
      policyViolationIndicatorTileSelector = '#nx-tile-policy-violation-indicator-example .gallery-example-live',
      alertChildTileSelector = '#nx-tile-form-error-example .gallery-example-live';

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
              await waitAndGetElements(dropdownActionMenuTileSelector, dropdownSelector);

      await dropdownEl.click();

      await checkScreenshot(tileEl, undefined, screenshotHeight);
    });
  });

  describe('nx-tile with accordions', function() {
    it('looks right', async function() {
      const accordionSelector = `${accordionTileSelector} .nx-accordion`,
          [accordionEl] = await waitAndGetElements(accordionSelector);

      // open an accordion just to make sure the tile expands accordingly
      await accordionEl.click();

      await simpleTest(accordionTileSelector)();
    });
  });

  describe('nx-tile with policy violation indicator', function() {
    it('looks right', simpleTest(policyViolationIndicatorTileSelector));
  });

  describe('nx-tile with alert as only child', function() {
    it('looks right', simpleTest(alertChildTileSelector));
  });
});
