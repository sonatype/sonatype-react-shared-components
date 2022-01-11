/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { simpleTest, a11yTest } = require('./testUtils');

describe('nx-code', function() {
  beforeEach(async function() {
    await browser.url('#/pages/nx-code');
  });

  const selector = '.gallery-example-live';

  it('looks right', simpleTest(selector));

  it('passes a11y checks', a11yTest());
});
