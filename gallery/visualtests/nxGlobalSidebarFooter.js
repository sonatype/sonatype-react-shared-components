/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
describe('NxGlobalFooter', function() {
  // Full examples of this component are captured by NxGlobalSidebar

  it('looks right in its minimal layout', async function() {
    await browser.url('#/NxGlobalSidebarFooterMinimalExample');
    await browser.eyesSnapshot(null);
  });

  it('looks right empty', async function() {
    await browser.url('#/NxGlobalSidebarFooterEmptyExample');
    await browser.eyesSnapshot(null);
  });
});
