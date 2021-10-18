/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxPageHeader', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxPageHeader');
  });

  const simpleHeaderSelector = '#nx-page-header-simple-example .nx-page-header',
      complexHeaderSelector = '#nx-page-header-complex-example .nx-page-header';

  it('looks right with minimal content', simpleTest(simpleHeaderSelector));
  it('looks right with all optional content', simpleTest(complexHeaderSelector));
});
