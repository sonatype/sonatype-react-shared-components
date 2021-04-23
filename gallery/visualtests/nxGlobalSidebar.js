/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { simpleTest } = require('./testUtils');

describe('nx-global-sidebar', function() {
  beforeEach(async function() {
    await browser.url('#/NxGlobalSidebarExample');
  });

  const simpleGlobalSidebar = '.nx-page-content';

  it('looks right', simpleTest(simpleGlobalSidebar));
});

describe('nx-global-sidebar-with-page-sidebar', function() {
  beforeEach(async function() {
    await browser.url('#/NxGlobalSidebarWithPageSidebarExample');
  });

  const complexGlobalSidebar = '.nx-page-content';

  it('looks right', simpleTest(complexGlobalSidebar));
});
