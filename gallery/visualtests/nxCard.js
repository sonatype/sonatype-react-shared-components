/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

// the a11y checks here seems to be slow
jest.setTimeout(60000);

describe('nx-card', function() {
  const { simpleTest, a11yTest, simpleTestLongElement } = setupBrowser('#/pages/Card');

  const rowLayoutCardSelector = '#nx-card-row-example .gallery-example-live';

  describe('nx-card row layout', function() {
    it('looks right', simpleTest(rowLayoutCardSelector));
  });

  it('passes a11y checks', a11yTest());
});
