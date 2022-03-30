/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { a11yTest } = require('./testUtils');

describe('nx-global-sidebar', function() {
  beforeEach(async function() {
    await browser.url('#/NxGlobalSidebarExample');
  });

  it('looks right', async function() {
    await browser.eyesSnapshot(null);
  });

  it('looks right when closed', async function() {
    const sidebarToggle = '.nx-global-sidebar .nx-global-sidebar__toggle';
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

  it('passes a11y checks', a11yTest());
});
