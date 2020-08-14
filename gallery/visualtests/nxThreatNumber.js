/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { simpleTest } = require('./testUtils');

describe('nx-threat-number', function() {
  beforeEach(async function() {
    await browser.url('#/pages/nx-threat-number');
  });

  const listSelector = '#nx-threat-number-list-example .gallery-raw-html-example',
      tableSelector = '#nx-threat-number-table-example .gallery-raw-html-example';


  it('looks right in a list', simpleTest(listSelector));
  it('looks right in a table', simpleTest(tableSelector));
});
