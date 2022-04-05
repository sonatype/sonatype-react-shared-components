/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxSmallThreatCounter', function() {
  const { simpleTest, a11yTest } = setupBrowser('#/pages/Small%20Threat%20Counter');

  const basicExampleSelector = '#nx-small-threat-counter-example .gallery-example-live',
      customExampleSelector = '#nx-small-threat-counter-max-digits-example .gallery-example-live';

  it('looks correct with default maxDigits and all categories', simpleTest(basicExampleSelector));
  it('looks correct with custom maxDigits and other nearby content', simpleTest(customExampleSelector));

  it('passes a11y checks', a11yTest());
});
