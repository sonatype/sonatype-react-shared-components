/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxPolicyViolationIndicator', function() {
  const { simpleTest, a11yTest } = setupBrowser('#/pages/Policy%20Violation%20Indicator');

  const policyViolationIndicatorCategoryExampleSelector =
      '#nx-policy-violation-indicator-category-example .gallery-example-live';

  it('looks right', simpleTest(policyViolationIndicatorCategoryExampleSelector));

  it('passes a11y checks', a11yTest());
});
