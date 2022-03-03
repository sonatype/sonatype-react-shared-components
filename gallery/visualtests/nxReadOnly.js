/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('nx-read-only', function() {
  const { simpleTest } = setupBrowser('#/pages/Read%20Only');

  const simpleSelector = '#nx-read-only-simple-example .gallery-example-live',
      gridSelector = '#nx-read-only-grid-example .gallery-example-live';

  it('looks right', simpleTest(simpleSelector));

  describe('nx-read-only grid', function() {
    it('looks right', simpleTest(gridSelector));
  });
});
