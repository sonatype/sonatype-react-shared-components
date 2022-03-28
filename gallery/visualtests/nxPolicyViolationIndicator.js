/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Target } = require('@applitools/eyes-webdriverio');
const { simpleTest } = require('./testUtils');

describe('NxPolicyViolationIndicator', function() {
  beforeEach(async function() {
    await browser.url('#/pages/Policy%20Violation%20Indicator');
  });

  const policyViolationIndicatorCategoryExampleSelector =
      '#nx-policy-violation-indicator-category-example .gallery-example-live';

  it('looks right', simpleTest(policyViolationIndicatorCategoryExampleSelector));
});
