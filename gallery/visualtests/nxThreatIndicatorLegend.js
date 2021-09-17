/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { simpleTest } = require('./testUtils');

describe('nxThreatIndicatorLegend', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxThreatIndicatorLegend');
  });

  const horizontalLegendSelector = '#nx-threat-indicator-legend-example .gallery-example-live',
      horizontalLegendHalfSelector = '#nx-threat-indicator-legend-example-half .gallery-example-live',
      verticalLegendSelector = '#nx-threat-indicator-legend-vertical-example .gallery-example-live',
      verticalLegendHalfSelector = '#nx-threat-indicator-legend-vertical-example-half .gallery-example-live';

  it('looks correct with horizontal orientation and all category level threats shown',
      simpleTest(horizontalLegendSelector));
  it('looks correct with horizontal orientation and only some category level threats shown',
      simpleTest(horizontalLegendHalfSelector));

  it('looks correct with vertical orientation and all category level threats shown',
      simpleTest(verticalLegendSelector));
  it('looks correct with vertical orientation and only some category level threats shown',
      simpleTest(verticalLegendHalfSelector));
});
