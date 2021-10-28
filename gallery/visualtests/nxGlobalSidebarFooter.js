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
    const { getPage, checkFullPageScreenshot } = setupBrowser('#/NxGlobalSidebarFooterMinimalExample');

    it('looks right', async function() {
      await checkFullPageScreenshot();
    });
  });

  describe('when empty', function() {
    const { getPage, checkFullPageScreenshot } = setupBrowser('#/NxGlobalSidebarFooterEmptyExample');

    it('looks right', async function() {
      await checkFullPageScreenshot();
    });
  });
});
