/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { simpleTest } = require('./testUtils');

describe('NxSmallThreatCounter', function() {
  beforeEach(async function() {
    await browser.url('#/pages/Small%20Threat%20Counter');
  });

  const basicExampleSelector = '#nx-small-threat-counter-example .gallery-example-live',
      customExampleSelector = '#nx-small-threat-counter-max-digits-example .gallery-example-live';

  it('looks correct with default maxDigits and all categories', simpleTest(basicExampleSelector));
  it('looks correct with custom maxDigits and other nearby content', simpleTest(customExampleSelector));
});
