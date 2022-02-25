/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { hoverTest, simpleTest, a11yTest } = require('./testUtils');

describe('NxBackButton', function() {
  const exampleSelector = '#nx-back-button-simple-example .nx-back-button',
      hoverElementSelector = exampleSelector + ' a';

  beforeEach(async function() {
    await browser.url('#/pages/BackButton');
  });

  describe('Simple NxBackButton', function() {
    it('looks right', simpleTest(exampleSelector));
    it('looks right when hovered', hoverTest(exampleSelector, hoverElementSelector));
  });

  it('passes a11y checks', a11yTest());
});
