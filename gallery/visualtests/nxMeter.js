/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxMeter', function() {
  const { a11yTest, simpleTest, hoverTest } = setupBrowser('#/pages/Meter');

  const selector = '#nx-meter-example .gallery-example-live',
      meterSelector = `${selector} div:nth-child(4) .nx-meter`;

  it('looks right', simpleTest(selector));

  it('shows a tooltip on hover', hoverTest(selector, meterSelector, true));

  it('passes a11y checks', a11yTest());
});
