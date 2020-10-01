/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { simpleTest } = require('./testUtils');

describe('nx-page-title', function() {
  beforeEach(async function() {
    await browser.url('#/pages/nx-page-title');
  });

  const selector = '.gallery-example-live .nx-page-title';

  it('looks right', simpleTest(selector));
});
