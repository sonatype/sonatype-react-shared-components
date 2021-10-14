/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxPolicyViolationIndicator', function() {
  const { simpleTest } = setupBrowser('#/pages/NxPolicyViolationIndicator');

  const policyViolationIndicatorCategoryExampleSelector =
      '#nx-policy-violation-indicator-category-example .gallery-example-live';

  it('looks right', simpleTest(policyViolationIndicatorCategoryExampleSelector));
});
