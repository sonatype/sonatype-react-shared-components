/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { simpleTest } = require('./testUtils');

describe('NxBackButton', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxBackButton');
  });

  describe('Simple NxBackButton', function() {
    it('looks right', simpleTest('#nx-back-button-simple-example .nx-back-button'));
  });
});
