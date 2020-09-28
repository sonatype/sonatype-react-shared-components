/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { simpleTest, simpleTestLongElement } = require('./testUtils');

describe('nx-form', function() {
  beforeEach(async function() {
    await browser.url('#/pages/Form%20Layout%20Styles');
  });

  const generalFormSelector = '#nx-form-layout-example .nx-form',
      horizontablFormSelector =  '#nx-form-layout-horizontal-example .nx-form';

  describe('nx-form layout', function() {
    it('looks right', simpleTestLongElement(generalFormSelector));
  });

  describe('nx-form horizontal layout', function() {
    it('looks right', simpleTest(horizontablFormSelector));
  });
});
