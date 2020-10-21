/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { simpleTest } = require('./testUtils');

describe('NxBinaryDonutChart', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxBinaryDonutChart');
  });

  describe('Minimal examples', function() {
    const simpleDonutSelector = '#nx-binary-donut-chart-minimal-examples';
    it('looks right', simpleTest(simpleDonutSelector));
  });

  describe('Empty donut', function() {
    const simpleDonutSelector = '#nx-binary-donut-chart-empty-example';

    it('looks right', simpleTest(simpleDonutSelector));
  });

  describe('Full donut', function() {
    const simpleDonutSelector = '#nx-binary-donut-chart-full-example';
    it('looks right', simpleTest(simpleDonutSelector));
  });

  describe('Donut with no hole', function() {
    const simpleDonutSelector = '#nx-binary-donut-chart-no-hole-example';
    it('looks right', simpleTest(simpleDonutSelector));
  });

  describe('Donut with large hole', function() {
    const simpleDonutSelector = '#nx-binary-donut-chart-large-hole-example';
    it('looks right', simpleTest(simpleDonutSelector));
  });

});
