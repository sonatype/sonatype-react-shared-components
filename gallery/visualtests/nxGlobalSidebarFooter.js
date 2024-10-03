/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxGlobalSidebarFooter', function() {
  // Full examples of this component are captured by NxGlobalSidebar

  describe('minimal layout', function() {
    const { getPage, checkFullPageScreenshot, a11yTest } = setupBrowser('#/NxGlobalSidebarFooterMinimalExample', false);

    beforeEach(async function() {
      await getPage().setViewport({ width: 1366, height: 1000 });
    });

    it('looks right', async function() {
      await checkFullPageScreenshot();
    });

    it('passes a11y checks', a11yTest(null, true));
  });

  describe('when empty', function() {
    const { getPage, checkFullPageScreenshot, a11yTest } = setupBrowser('#/NxGlobalSidebarFooterEmptyExample', false);

    beforeEach(async function() {
      await getPage().setViewport({ width: 1366, height: 1000 });
    });

    it('looks right', async function() {
      await checkFullPageScreenshot();
    });

    it('passes a11y checks', a11yTest(null, true));
  });
});
