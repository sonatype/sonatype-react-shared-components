/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import NxBinaryDonutChart from '../NxBinaryDonutChart';

describe('NxBinaryDonutChart', function() {
  it('renders an svg with the expected properties', function() {
    const getShallowComponent = enzymeUtils.getShallowComponent(NxBinaryDonutChart, { percent: 90 });

    expect(getShallowComponent()).toMatchSelector('svg');
    expect(getShallowComponent()).toHaveProp('viewBox', '-100 -100 200 200');
    expect(getShallowComponent()).toHaveClassName('.nx-binary-donut-chart');
  });

  it('renders only the background circle with the expected properties at zero percent', function() {
    const getShallowComponent = enzymeUtils.getShallowComponent(NxBinaryDonutChart, { percent: 0 });
    const circles = getShallowComponent().find('circle');
    const paths = getShallowComponent().find('path');

    expect(circles.length).toBe(1);
    expect(circles.at(0)).toHaveClassName('.nx-binary-donut-chart__background');
    expect(circles.at(0)).toHaveProp('strokeWidth', 50);
    expect(circles.at(0)).toHaveProp('r', 75);
    expect(paths.length).toBe(0);
  });

  it('renders only an arc circle with the expected properties when percent is 100', function() {
    const getShallowComponent = enzymeUtils.getShallowComponent(NxBinaryDonutChart, { percent: 100 });
    const circles = getShallowComponent().find('circle');
    const paths = getShallowComponent().find('path');

    expect(circles.length).toBe(1);
    expect(circles.at(0)).toHaveClassName('.nx-binary-donut-chart__arc');
    expect(circles.at(0)).toHaveProp('strokeWidth', 50);
    expect(circles.at(0)).toHaveProp('r', 75);
    expect(paths.length).toBe(0);
  });

  it('renders only a background circle when percent is negative', function() {
    const getShallowComponent = enzymeUtils.getShallowComponent(NxBinaryDonutChart, { percent: -50 });
    const circles = getShallowComponent().find('circle');
    const paths = getShallowComponent().find('path');

    expect(circles.length).toBe(1);
    expect(circles.at(0)).toHaveClassName('.nx-binary-donut-chart__background');
    expect(circles.at(0)).toHaveProp('strokeWidth', 50);
    expect(circles.at(0)).toHaveProp('r', 75);
    expect(paths.length).toBe(0);
  });

  it('renders a background circle and arc path with expected properties when 0 < percent < 100', function() {
    const getShallowComponent = enzymeUtils.getShallowComponent(NxBinaryDonutChart, { percent: 50 });
    const circles = getShallowComponent().find('circle');
    const paths = getShallowComponent().find('path');

    expect(circles.length).toBe(1);
    expect(circles.at(0)).toHaveClassName('.nx-binary-donut-chart__background');
    expect(circles.at(0)).toHaveProp('strokeWidth', 50);
    expect(circles.at(0)).toHaveProp('r', 75);
    expect(paths.length).toBe(1);
    expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__arc');
    expect(paths.at(0)).toHaveProp('d', 'M 0 -75 A 75 75 0 0 0 ' + (75 * Math.cos(1.5 * Math.PI))
        + ' ' + (-75 * Math.sin(1.5 * Math.PI)));
    expect(paths.at(0)).toHaveProp('strokeWidth', 50);
  });

  it('renders only an arc circle with the expected properties when percent is 72', function() {
    const getShallowComponent = enzymeUtils.getShallowComponent(NxBinaryDonutChart, { percent: 72 });
    const circles = getShallowComponent().find('circle');
    const paths = getShallowComponent().find('path');

    // (2*percent + 0.5)π
    const arcEnd = 1.94 * Math.PI;

    expect(circles.length).toBe(1);
    expect(circles.at(0)).toHaveClassName('.nx-binary-donut-chart__background');
    expect(circles.at(0)).toHaveProp('strokeWidth', 50);
    expect(circles.at(0)).toHaveProp('r', 75);
    expect(paths.length).toBe(1);
    expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__arc');
    expect(paths.at(0)).toHaveProp('d', 'M 0 -75 A 75 75 0 1 0 ' + (75 * Math.cos(arcEnd))
        + ' ' + (-75 * Math.sin(arcEnd)));
    expect(paths.at(0)).toHaveProp('strokeWidth', 50);
  });

  it('renders only an arc circle with the expected properties when percent is 11', function() {
    const getShallowComponent = enzymeUtils.getShallowComponent(NxBinaryDonutChart, { percent: 11 });
    const circles = getShallowComponent().find('circle');
    const paths = getShallowComponent().find('path');

    // (2*percent + 0.5)π
    const arcEnd = 0.72 * Math.PI;

    expect(circles.length).toBe(1);
    expect(circles.at(0)).toHaveClassName('.nx-binary-donut-chart__background');
    expect(circles.at(0)).toHaveProp('strokeWidth', 50);
    expect(circles.at(0)).toHaveProp('r', 75);
    expect(paths.length).toBe(1);
    expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__arc');
    expect(paths.at(0)).toHaveProp('d', 'M 0 -75 A 75 75 0 0 0 ' + (75 * Math.cos(arcEnd))
        + ' ' + (-75 * Math.sin(arcEnd)));
    expect(paths.at(0)).toHaveProp('strokeWidth', 50);
  });
});
