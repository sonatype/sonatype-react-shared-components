/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxLoadError', function() {
  const { simpleTest } = setupBrowser('#/pages/Load%20Error');

  const simpleSelector = '#nx-load-error-retry-example .nx-alert--load-error',
      longElementSelector = '#nx-load-error-long-retry-example .nx-alert--load-error'

  describe('NxLoadError with short text and Retry button', function() {
    it('looks right', simpleTest(simpleSelector));
  });

  describe('NxLoadError with long text and Retry button', function() {
    it('looks right', simpleTest(longElementSelector));
  });
});
