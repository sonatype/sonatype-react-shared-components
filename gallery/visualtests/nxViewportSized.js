/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('nx-viewport-sized', function() {
  describe('with shrinking content', function() {
    const { checkFullPageScreenshot } = setupBrowser('#/NxViewportSizedExample');

    it('looks right', async function() {
      await checkFullPageScreenshot();
    });
  });

  describe('with expandign content', function() {
    const { checkFullPageScreenshot } = setupBrowser('#/NxViewportSizedExpandingExample');

    it('looks right', async function() {
      await checkFullPageScreenshot();
    });
  });

  describe('with adjacent scrollable', function() {
    const { checkFullPageScreenshot } = setupBrowser('#/NxViewportSizedAdjacentExample');

    it('looks right', async function() {
      await checkFullPageScreenshot();
    });
  });
});
