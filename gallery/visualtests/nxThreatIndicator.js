/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Target } = require('@applitools/eyes-webdriverio');
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxThreatIndicator', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxThreatIndicator');
  });

  const threatIndicatorsListExampleSelector = '#nx-threat-indicator-list-example .nx-list',
      threatIndicatorsListExampleSelector = '#nx-threat-indicator-table-example .nx-table',
      threatIndicatorsSimpleExampleSelector = '#nx-threat-indicator-simple-example .gallery-example-live';

  it('looks right', simpleTest(threatIndicatorsSimpleExampleSelector));
  it('looks right in a list', simpleTest(threatIndicatorsListExampleSelector));
  it('looks right in a table', simpleTest(threatIndicatorsTableExampleSelector));
});
