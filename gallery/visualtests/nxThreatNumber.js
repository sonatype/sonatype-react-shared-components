/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { simpleTest, a11yTest } = require('./testUtils');

describe('nx-threat-number', function() {
  beforeEach(async function() {
    await browser.url('#/pages/Threat Number');
  });

  const listSelector = '#nx-threat-number-list-example .nx-list',
      tableSelector = '#nx-threat-number-table-example .nx-table',
      basicSelector = '#nx-threat-number-basic-example .gallery-example-live';


  it('looks right', simpleTest(basicSelector));
  it('looks right in a list', simpleTest(listSelector));
  it('looks right in a table', simpleTest(tableSelector));

  it('passes a11y checks', a11yTest());
});
