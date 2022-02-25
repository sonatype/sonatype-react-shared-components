/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { focusTest, simpleTest } = require('./testUtils');

describe('NxCollapsibleRadioSelect', function() {
  beforeEach(async function() {
    await browser.url('#/pages/Collapsible%20RadioSelect');
  });

  const selector = '#nx-collapsible-radio-select-example .nx-collapsible-items--select';

  it('looks right', simpleTest(selector));

  describe('NxCollapsibleRadioSelect radio', function() {
    const radioSelector = selector + ' .nx-collapsible-items__child:nth-child(3) .nx-radio-checkbox__input';
    it('has an offsetted blue outer border outline and glow when focused', focusTest(selector, radioSelector));
  });
});
