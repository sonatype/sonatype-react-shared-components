/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxNexusPageHeader', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxNexusPageHeader');
  });

  const customLogoNexusPageHeaderSelector = '#nx-page-header-custom-logo-example .nx-page-header',
      defaultNexusPageHeaderSelector = '#nx-page-header-default-example .nx-page-header',
      metaNexusPageHeaderSelector = '#nx-page-header-meta-example .nx-page-header',
      versionNexusPageHeaderSelector = '#nx-page-header-version-example .nx-page-header',
      minimalNexusPageHeaderSelector = '#nx-page-header-minimal-example .nx-page-header';

  it('looks right with custom logo', simpleTest(customLogoNexusPageHeaderSelector));
  it('looks right with default logo', simpleTest(defaultNexusPageHeaderSelector));
  it('looks right with meta info & no version', simpleTest(metaNexusPageHeaderSelector));
  it('looks right with version & no meta', simpleTest(versionNexusPageHeaderSelector));
  it('looks right with minimal info', simpleTest(minimalNexusPageHeaderSelector));
});
