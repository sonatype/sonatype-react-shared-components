/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { simpleTest, simpleTestLongElement } = require('./testUtils');

describe('nx-card', function() {
  beforeEach(async function() {
    await browser.url('#/pages/nx-card');
  });

  const verticalCardSelector = '#nx-card-vertical-example .gallery-example-live',
      horizontalCardSelector =  '#nx-card-horizontal-example .gallery-example-live',
      verticalCardAltSelector = '#nx-card-vertical-alt-example .gallery-example-live';

  describe('nx-card vertical layout', function() {
    it('looks right', simpleTest(verticalCardSelector));
  });

  describe('nx-card horizontal layout', function() {
    it('looks right', simpleTestLongElement(horizontalCardSelector));
  });

  describe('nx-card vertical alternate layout', function() {
    it('looks right', simpleTest(verticalCardAltSelector));
  });
});
