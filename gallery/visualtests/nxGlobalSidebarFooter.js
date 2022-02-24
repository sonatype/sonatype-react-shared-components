/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { a11yTest } = require('./testUtils');
describe('NxGlobalSidebarFooter', function() {
  // Full examples of this component are captured by NxGlobalSidebar

  describe('NxGlobalSidebarFooter with minimal layout', function() {
    beforeEach(async function() {
      await browser.url('#/NxGlobalSidebarFooterMinimalExample');
    });

    it('looks right', async function() {
      await browser.eyesSnapshot(null);
    });

    it('passes a11y checks', a11yTest());
  });

  describe('NxGlobalSidebarFooter when empty', function() {
    beforeEach(async function() {
      await browser.url('#/NxGlobalSidebarFooterEmptyExample');
    });

    it('looks right', async function() {
      await browser.eyesSnapshot(null);
    });

    it('passes a11y checks', a11yTest());
  });
});
