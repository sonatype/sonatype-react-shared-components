/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
describe('nx-global-sidebar', function() {
  beforeEach(async function() {
    await browser.url('#/NxGlobalSidebarExample');
  });

  const sidebarToggle = '.nx-global-sidebar .nx-global-sidebar__toggle';

  describe('NxGlobalSidebar when open', function() {
    it('looks right', async function() {
      await browser.eyesSnapshot(null);
    });
  });

  describe('NxGlobalSidebar when closed', function() {
    it('looks right when closed', async function() {
      const targetElement = await browser.$(sidebarToggle);

      await targetElement.click();

      try {
        await browser.eyesSnapshot(null);
      }
      finally {
        // click again to reset the state
        await targetElement.click();
      }
    });
  });
});
