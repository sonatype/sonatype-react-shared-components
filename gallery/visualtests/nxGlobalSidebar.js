/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
describe('nx-global-sidebar', function() {
  it('looks right', async function() {
    await browser.url('#/NxGlobalSidebarExample');
    await browser.eyesSnapshot(null);
  });

  it('looks right with an extra page sidebar', async function() {
    await browser.url('#/NxGlobalSidebarWithPageSidebarExample');
    await browser.eyesSnapshot(null);
  });
});
