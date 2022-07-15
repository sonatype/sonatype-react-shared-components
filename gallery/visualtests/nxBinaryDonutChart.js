/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxBinaryDonutChart', function() {
  const { simpleTest, a11yTest } = setupBrowser('#/pages/Binary%20Donut%20Chart');

  describe('NxBinaryDonutChart Minimal examples', function() {
    const simpleDonutSelector = '#nx-binary-donut-chart-minimal-examples .gallery-example-live';
    it('looks right', simpleTest(simpleDonutSelector));
  });

  describe('NxBinaryDonutChart Donut with no hole', function() {
    const simpleDonutSelector = '#nx-binary-donut-chart-no-hole-example .gallery-example-live';
    it('looks right', simpleTest(simpleDonutSelector));
  });

  describe('NxBinaryDonutChart Donut with large hole', function() {
    const simpleDonutSelector = '#nx-binary-donut-chart-large-hole-example .gallery-example-live';
    it('looks right', simpleTest(simpleDonutSelector));
  });

  describe('NxBinaryDonutChart on colored backgrounds', function() {
    const simpleDonutSelector = '#nx-binary-donut-chart-colored-background-example .gallery-example-live';
    it('has visible borders', simpleTest(simpleDonutSelector));
  });

  describe('NxBinaryDonutChart with custom properties', function() {
    const simpleDonutSelector = '#nx-binary-donut-chart-custom-examples .gallery-example-live';
    it('has custom properties', simpleTest(simpleDonutSelector));
  });

  it('passes a11y checks', a11yTest());
});
