/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { simpleTest } = require('./testUtils');

describe('nx-icon', function() {
  beforeEach(async function() {
    await browser.url('#/pages/nx-icon');
  });

  const selector = '.gallery-example-live';

  it('looks right', simpleTest(selector));
});
