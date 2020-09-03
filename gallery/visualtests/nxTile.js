/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { simpleTest } = require('./testUtils');

describe('nx-tile', function() {
  beforeEach(async function() {
    await browser.url('#/pages/nx-tile');
  });

  const simpleTileSelector = '#nx-tile-simple-example .gallery-example-live',
      actionsTileSelector = '#nx-tile-actions-example .gallery-example-live',
      subtitleTileSelector = '#nx-tile-subtitle-example .gallery-example-live',
      horizontalRuleTileSelector = '#nx-tile-horizontal-rule-example .gallery-example-live',
      subsectionsTileSelector = '#nx-tile-subsections-example .gallery-example-live';

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
});
