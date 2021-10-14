/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('nx-scrollable', function() {
  const { simpleTest } = setupBrowser('#/pages/nx-scrollable');

  const simpleSelector = '#nx-scrollable-simple-example .nx-scrollable',
      tableSelector = '#nx-scrollable-table-example .nx-scrollable';

  it('looks right', simpleTest(simpleSelector));
});
