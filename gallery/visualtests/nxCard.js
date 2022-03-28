/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { simpleTest, simpleTestLongElement, a11yTest } = require('./testUtils');

describe('nx-card', function() {
  beforeEach(async function() {
    await browser.url('#/pages/Card');
  });

  const rowLayoutCardSelector = '#nx-card-row-example .gallery-example-live';

  describe('nx-card row layout', function() {
    it('looks right', simpleTestLongElement(rowLayoutCardSelector));
  });

  it('passes a11y checks', a11yTest());
});
