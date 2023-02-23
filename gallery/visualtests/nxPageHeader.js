/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxPageHeader', function() {
  const { simpleTest, a11yTest } = setupBrowser('#/pages/Page%20Header');

  const simpleHeaderSelector = '#nx-page-header-simple-example .nx-page-header',
      nameAndVersionHeaderSelector = '#nx-page-header-product-name-and-version-example .nx-page-header',
      complexHeaderSelector = '#nx-page-header-complex-example .nx-page-header';

  it('looks right with minimal content', simpleTest(simpleHeaderSelector));
  it('looks right with product name and version', simpleTest(nameAndVersionHeaderSelector));
  it('looks right with all optional content', simpleTest(complexHeaderSelector));

  it('passes a11y checks', a11yTest());
});
