/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
describe('nx-global-sidebar', function() {
  const { getPage, waitAndGetElements, checkFullPageScreenshot } = setupBrowser('#/NxGlobalSidebarExample');

  it('looks right', async function() {
    await checkFullPageScreenshot();
  });

  it('looks right when closed', async function() {
    const sidebarToggle = '.nx-global-sidebar .nx-global-sidebar__toggle';
    const [targetElement] = await waitAndGetElements(sidebarToggle);

    await targetElement.click();

    await checkFullPageScreenshot();
  });
});
