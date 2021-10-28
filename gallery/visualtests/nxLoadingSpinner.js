/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxLoadingSpinner', function() {
  const { simpleTest, disableLoadingSpinnerAnimation } = setupBrowser('#/pages/NxLoadingSpinner');

  const selector = '.gallery-example .nx-loading-spinner';

  it('looks right', async function() {
    await disableLoadingSpinnerAnimation();
    await simpleTest(selector)();
  });
});
