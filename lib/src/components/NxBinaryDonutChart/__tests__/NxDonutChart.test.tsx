/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import NxBinaryDonutChart from '../NxBinaryDonutChart';

describe('NxBinaryDonutChart', function() {
  const getShallowComponent = enzymeUtils.getShallowComponent(NxBinaryDonutChart, {percent: 0});

  it('renders an svg with the expected properties', function() {
    expect(getShallowComponent({ percent: 90 })).toHaveClassName('.nx-binary-donut-chart');
    expect(getShallowComponent({ percent: 90 })).toHaveProp('viewBox', '-15 -15 30 30');
    expect(getShallowComponent({ percent: 90 })).toMatchSelector('svg');
  });

  it('renders only the background path with the expected properties at zero percent', function() {
    const circles = getShallowComponent().find('circle');
    const paths = getShallowComponent().find('path');

    expect(circles.length).toBe(0);
    expect(paths.length).toBe(1);
    expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__background');

    // whether the background renders correctly is best left to the visual tests
  });

  it('renders the background path and an arc circle with the expected properties when percent is 100', function() {
    const circles = getShallowComponent({ percent: 100}).find('circle');
    const paths = getShallowComponent({ percent: 100}).find('path');

    expect(circles.length).toBe(1);
    expect(circles.at(0)).toHaveClassName('.nx-binary-donut-chart__arc');
    expect(circles.at(0)).toHaveProp('strokeWidth', 7);
    expect(circles.at(0)).toHaveProp('r', 10.5);
    expect(paths.length).toBe(1);
    expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__background');
  });

  it('renders only a background circle path percent is negative', function() {
    const circles = getShallowComponent({ percent: -50}).find('circle');
    const paths = getShallowComponent({ percent: -50}).find('path');

    expect(circles.length).toBe(0);
    expect(paths.length).toBe(1);
    expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__background');
  });

  it('renders a background path and arc path with expected properties when 0 < percent < 100', function() {
    const circles = getShallowComponent({ percent: 50}).find('circle');
    const paths = getShallowComponent({ percent: 50}).find('path');

    expect(circles.length).toBe(0);
    expect(paths.length).toBe(2);
    expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__background');
    expect(paths.at(1)).toHaveClassName('.nx-binary-donut-chart__arc');
    expect(paths.at(1)).toHaveProp('d', 'M 0 -10.5 A 10.5 10.5 0 0 1 ' + (-10.5 * Math.cos(1.5 * Math.PI))
        + ' ' + (-10.5 * Math.sin(1.5 * Math.PI)));
    expect(paths.at(1)).toHaveProp('strokeWidth', 7);
  });

  it('renders an arc circle and its background with the expected properties when percent is 72', function() {
    const circles = getShallowComponent({ percent: 72 }).find('circle');
    const paths = getShallowComponent({ percent: 72 }).find('path');

    // (2*percent + 0.5)π
    const arcEnd = 1.94 * Math.PI;

    expect(circles.length).toBe(0);
    expect(paths.length).toBe(2);
    expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__background');
    expect(paths.at(1)).toHaveClassName('.nx-binary-donut-chart__arc');
    expect(paths.at(1)).toHaveProp('d', 'M 0 -10.5 A 10.5 10.5 0 1 1 ' + (-10.5 * Math.cos(arcEnd))
        + ' ' + (-10.5 * Math.sin(arcEnd)));
    expect(paths.at(1)).toHaveProp('strokeWidth', 7);
  });

  it('renders an arc circle and its background with the expected properties when percent is 11', function() {
    const circles = getShallowComponent({ percent: 11}).find('circle');
    const paths = getShallowComponent({ percent: 11}).find('path');

    // (2*percent + 0.5)π
    const arcEnd = 0.72 * Math.PI;

    expect(circles.length).toBe(0);
    expect(paths.length).toBe(2);
    expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__background');
    expect(paths.at(1)).toHaveClassName('.nx-binary-donut-chart__arc');
    expect(paths.at(1)).toHaveProp('d', 'M 0 -10.5 A 10.5 10.5 0 0 1 ' + (-10.5 * Math.cos(arcEnd))
        + ' ' + (-10.5 * Math.sin(arcEnd)));
    expect(paths.at(1)).toHaveProp('strokeWidth', 7);
  });

  it('adjusts the circles and paths based on the innerRadiusPercent', function() {
    const withZeroInnerRadius = getShallowComponent({ innerRadiusPercent: 0, percent: 50 }),
        with100InnerRadius = getShallowComponent({ innerRadiusPercent: 100, percent: 50 }),
        withZeroInnerRadiusAnd100Percent = getShallowComponent({ innerRadiusPercent: 0, percent: 100 }),
        with100InnerRadiusAnd100Percent = getShallowComponent({ innerRadiusPercent: 100, percent: 100 });

    expect(withZeroInnerRadius.find('.nx-binary-donut-chart__arc')).toHaveProp('d',
        `M 0 -7 A 7 7 0 0 1 ${-7 * Math.cos(1.5 * Math.PI)} 7`);
    expect(withZeroInnerRadius.find('.nx-binary-donut-chart__arc')).toHaveProp('strokeWidth', 14);
    expect(with100InnerRadius.find('.nx-binary-donut-chart__arc')).toHaveProp('d',
        `M 0 -14 A 14 14 0 0 1 ${-14 * Math.cos(1.5 * Math.PI)} 14`);
    expect(with100InnerRadius.find('.nx-binary-donut-chart__arc')).toHaveProp('strokeWidth', 0);

    expect(withZeroInnerRadiusAnd100Percent.find('.nx-binary-donut-chart__arc')).toHaveProp('r', 7);
    expect(withZeroInnerRadiusAnd100Percent.find('.nx-binary-donut-chart__arc')).toHaveProp('strokeWidth', 14);
    expect(with100InnerRadiusAnd100Percent.find('.nx-binary-donut-chart__arc')).toHaveProp('r', 14);
    expect(with100InnerRadiusAnd100Percent.find('.nx-binary-donut-chart__arc')).toHaveProp('strokeWidth', 0);
  });

  it('clamps the innerRadiusPercent between zero and 100', function() {
    const withNegativeInnerRadius = getShallowComponent({ innerRadiusPercent: -50, percent: 50 }),
        withExcessInnerRadius = getShallowComponent({ innerRadiusPercent: 150, percent: 50 }),
        withNegativeInnerRadiusAnd100Percent = getShallowComponent({ innerRadiusPercent: -50, percent: 100 }),
        withExcessInnerRadiusAnd100Percent = getShallowComponent({ innerRadiusPercent: 150, percent: 100 });

    expect(withNegativeInnerRadius.find('.nx-binary-donut-chart__arc')).toHaveProp('d',
        `M 0 -7 A 7 7 0 0 1 ${-7 * Math.cos(1.5 * Math.PI)} 7`);
    expect(withNegativeInnerRadius.find('.nx-binary-donut-chart__arc')).toHaveProp('strokeWidth', 14);
    expect(withExcessInnerRadius.find('.nx-binary-donut-chart__arc')).toHaveProp('d',
        `M 0 -14 A 14 14 0 0 1 ${-14 * Math.cos(1.5 * Math.PI)} 14`);
    expect(withExcessInnerRadius.find('.nx-binary-donut-chart__arc')).toHaveProp('strokeWidth', 0);

    expect(withNegativeInnerRadiusAnd100Percent.find('.nx-binary-donut-chart__arc')).toHaveProp('r', 7);
    expect(withNegativeInnerRadiusAnd100Percent.find('.nx-binary-donut-chart__arc')).toHaveProp('strokeWidth', 14);
    expect(withExcessInnerRadiusAnd100Percent.find('.nx-binary-donut-chart__arc')).toHaveProp('r', 14);
    expect(withExcessInnerRadiusAnd100Percent.find('.nx-binary-donut-chart__arc')).toHaveProp('strokeWidth', 0);
  });
});
