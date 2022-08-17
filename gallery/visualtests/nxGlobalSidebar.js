/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('nx-global-sidebar', function() {
  const { getPage, waitAndGetElements, checkFullPageScreenshot, a11yTest } =
      setupBrowser('#/NxGlobalSidebarExample', false);

  beforeEach(async function() {
    await getPage().setViewport({ width: 1366, height: 1000 });
  });

  it('looks right', async function() {
    await checkFullPageScreenshot();
  });

  it('looks right when closed', async function() {
    const sidebarToggle = '.nx-global-sidebar .nx-global-sidebar__toggle';
    const [targetElement] = await waitAndGetElements(sidebarToggle);

    await targetElement.click();

    await checkFullPageScreenshot();
  });

  it('passes a11y checks', a11yTest(null, true));
});
