/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxThreatIndicator', function() {
  const { simpleTest, a11yTest } = setupBrowser('#/pages/Threat Indicator');

  const threatIndicatorsListExampleSelector = '#nx-threat-indicator-list-example .nx-list',
      threatIndicatorsTableExampleSelector = '#nx-threat-indicator-table-example .nx-table',
      threatIndicatorsSimpleExampleSelector = '#nx-threat-indicator-simple-example .gallery-example-live',
      threatIndicatorsPolicyNumberExampleSelector = '#nx-threat-indicator-policy-number-example .gallery-example-live';

  it('looks right', simpleTest(threatIndicatorsSimpleExampleSelector));
  it('looks right in a list', simpleTest(threatIndicatorsListExampleSelector));
  it('looks right in a table', simpleTest(threatIndicatorsTableExampleSelector));
  it('looks right when policyThreatLevel prop is provided', simpleTest(threatIndicatorsPolicyNumberExampleSelector));

  it('passes a11y checks', a11yTest());
});
