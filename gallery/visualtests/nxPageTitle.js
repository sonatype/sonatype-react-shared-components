/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('nx-page-title', function() {
  const { simpleTest } = setupBrowser('#/pages/Page%20Title');

  const simplePageTitle = '#nx-page-title-example .nx-page-title';
  const actionsPageTitle = '#nx-page-title-actions-example .nx-page-title';
  const policyViolationIndicatorPageTitle = '#nx-page-title-policy-violation-indicator-example .nx-page-title';
  const everythingPageTitle = '#nx-page-title-everything-example .nx-page-title';

  it('looks right', simpleTest(simplePageTitle));

  it('looks right with actions', simpleTest(actionsPageTitle));

  it('looks right with policy violation indicator', simpleTest(policyViolationIndicatorPageTitle));

  it('looks right with sub-title, description, and tags', simpleTest(everythingPageTitle));
});
