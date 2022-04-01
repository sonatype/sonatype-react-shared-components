/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('nx-viewport-sized', function() {
  describe('with shrinking content', function() {
    const { checkFullPageScreenshot, getPage } = setupBrowser('#/NxViewportSizedExample');

    beforeEach(async function() {
      await getPage().setViewport({ width: 1366, height: 1000 });
    });

    it('looks right', async function() {
      await checkFullPageScreenshot();
    });
  });

  describe('with expandign content', function() {
    const { checkFullPageScreenshot, getPage } = setupBrowser('#/NxViewportSizedExpandingExample');

    beforeEach(async function() {
      await getPage().setViewport({ width: 1366, height: 1000 });
    });

    it('looks right', async function() {
      await checkFullPageScreenshot();
    });
  });

  describe('with adjacent scrollable', function() {
    const { checkFullPageScreenshot, getPage } = setupBrowser('#/NxViewportSizedAdjacentExample');

    beforeEach(async function() {
      await getPage().setViewport({ width: 1366, height: 1000 });
    });

    it('looks right', async function() {
      await checkFullPageScreenshot();
    });
  });
});
