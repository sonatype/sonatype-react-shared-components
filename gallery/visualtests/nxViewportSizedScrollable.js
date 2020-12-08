/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
describe('nx-viewport-sized-scrollable', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxViewportSizedScrollableExample');
  });

  it('looks right', async function() {
    await browser.eyesSnapshot(null);
  });

  describe('nx-viewport-sized-scrollable growable', function() {
    beforeEach(async function() {
      await browser.url('#/pages/NxViewportSizedScrollableGrowableExample');
    });

    it('looks right', async function() {
      await browser.eyesSnapshot(null);
    });
  });
});
