/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('Nivo', function() {
  const { simpleTest, wait } = setupBrowser('#/pages/Nivo%20Charts');

  const lineSelector = '#nivo-line-chart-example',
      barSelector = '#nivo-bar-chart-example',
      pieSelector = '#nivo-pie-chart-example';

  beforeEach(async function() {
    // wait for charts to stabilize
    await wait(2000);
  });

  describe('Line Chart', function() {
    it('looks right', simpleTest(lineSelector));
  });

  describe('Bar Chart', function() {
    it('looks right', simpleTest(barSelector));
  });

  describe('Pie Chart', function() {
    it('looks right', simpleTest(pieSelector));
  });
});
