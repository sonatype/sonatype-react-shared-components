/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import NxBinaryDonutChart, {Props} from '../NxBinaryDonutChart';

describe('NxBinaryDonutChart', function() {
  const minimalProps: Props = {
        value: 0
      },
      propsComponent = enzymeUtils.getShallowComponent<Props>(NxBinaryDonutChart, minimalProps);

  const minimalDeprecatedProps: Props = {
        percent: 0
      },
      DeprecatedPropsComponent = enzymeUtils.getShallowComponent<Props>(NxBinaryDonutChart, minimalDeprecatedProps);

  it('sets the role to "meter"', function() {
    expect(propsComponent()).toHaveProp('role', 'meter');
    expect(DeprecatedPropsComponent()).toHaveProp('role', 'meter');
  });

  it('sets the aria-valuemin to 0', function() {
    expect(propsComponent()).toHaveProp('aria-valuemin', 0);
    expect(DeprecatedPropsComponent()).toHaveProp('aria-valuemin', 0);
  });

  it('sets the aria-valuemax to 100 when maxVal is not specified', function() {
    expect(propsComponent()).toHaveProp('aria-valuemax', 100);
    expect(DeprecatedPropsComponent()).toHaveProp('aria-valuemax', 100);
  });

  it('sets the aria-valuemax to maxVal when maxVal is specified', function() {
    expect(propsComponent({maxVal: 200})).toHaveProp('aria-valuemax', 200);
    expect(DeprecatedPropsComponent({maxVal: 200})).toHaveProp('aria-valuemax', 200);
  });

  it('sets the aria-valuenow to value', function() {
    expect(propsComponent({value: 30})).toHaveProp('aria-valuenow', 30);
  });

  it('sets the aria-valuenow to calculated value when percent is specified', function() {
    expect(DeprecatedPropsComponent({percent: 30})).toHaveProp('aria-valuenow', 30);
  });

  it('renders an svg with the expected properties', function() {
    expect(propsComponent({value: 90})).toHaveClassName('.nx-binary-donut-chart');
    expect(propsComponent({value: 90})).toHaveProp('viewBox', '-15 -15 30 30');
    expect(propsComponent({value: 90})).toMatchSelector('svg');
  });

  it('renders an svg with the expected properties when percent is specified', function() {
    expect(DeprecatedPropsComponent({percent: 20})).toHaveClassName('.nx-binary-donut-chart');
    expect(DeprecatedPropsComponent({percent: 60})).toHaveProp('viewBox', '-15 -15 30 30');
    expect(DeprecatedPropsComponent({percent: 60})).toMatchSelector('svg');
  });

  it('renders only the background path with the expected properties at zero percent', function() {
    const circles = DeprecatedPropsComponent().find('circle');
    const paths = DeprecatedPropsComponent().find('path');

    expect(circles.length).toBe(0);
    expect(paths.length).toBe(1);
    expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__background');

    // whether the background renders correctly is best left to the visual tests
  });

  it('renders only the background path with the expected properties at calculated zero percent', function() {
    const circles = propsComponent().find('circle');
    const paths = propsComponent().find('path');

    expect(circles.length).toBe(0);
    expect(paths.length).toBe(1);
    expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__background');

    // whether the background renders correctly is best left to the visual tests
  });

  it('renders the background path and an arc circle with the expected properties when percent is 100', function() {
    const circles = DeprecatedPropsComponent({percent: 100}).find('circle');
    const paths = DeprecatedPropsComponent({percent: 100}).find('path');

    expect(circles.length).toBe(1);
    expect(circles.at(0)).toHaveClassName('.nx-binary-donut-chart__arc');
    expect(circles.at(0)).toHaveProp('strokeWidth', 7);
    expect(circles.at(0)).toHaveProp('r', 10.5);
    expect(paths.length).toBe(1);
    expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__background');
  });

  it('renders the background path and an arc circle with the expected properties when calculated percent is 100',
      function() {
        const circles = propsComponent({value: 100}).find('circle');
        const paths = propsComponent({value: 100}).find('path');

        expect(circles.length).toBe(1);
        expect(circles.at(0)).toHaveClassName('.nx-binary-donut-chart__arc');
        expect(circles.at(0)).toHaveProp('strokeWidth', 7);
        expect(circles.at(0)).toHaveProp('r', 10.5);
        expect(paths.length).toBe(1);
        expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__background');
      });

  it('renders only a background circle path when percent is negative', function() {
    const circles = DeprecatedPropsComponent({percent: -50}).find('circle');
    const paths = DeprecatedPropsComponent({percent: -50}).find('path');

    expect(circles.length).toBe(0);
    expect(paths.length).toBe(1);
    expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__background');
  });

  it('renders only a background circle path when calculated percent is negative', function() {
    const circles = propsComponent({value: -50}).find('circle');
    const paths = propsComponent({value: -50}).find('path');

    expect(circles.length).toBe(0);
    expect(paths.length).toBe(1);
    expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__background');
  });

  it('renders a background path and arc path with expected properties when 0 < percent < 100', function() {
    const circles = DeprecatedPropsComponent({percent: 50}).find('circle');
    const paths = DeprecatedPropsComponent({percent: 50}).find('path');

    expect(circles.length).toBe(0);
    expect(paths.length).toBe(2);
    expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__background');
    expect(paths.at(1)).toHaveClassName('.nx-binary-donut-chart__arc');
    expect(paths.at(1)).toHaveProp('d', 'M 0 -10.5 A 10.5 10.5 0 0 1 ' + (-10.5 * Math.cos(1.5 * Math.PI))
        + ' ' + (-10.5 * Math.sin(1.5 * Math.PI)));
    expect(paths.at(1)).toHaveProp('strokeWidth', 7);
  });

  it('renders a background path and arc path with expected properties when 0 < calculated percent < 100', function() {
    const circles = propsComponent({value: 50}).find('circle');
    const paths = propsComponent({value: 50}).find('path');

    expect(circles.length).toBe(0);
    expect(paths.length).toBe(2);
    expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__background');
    expect(paths.at(1)).toHaveClassName('.nx-binary-donut-chart__arc');
    expect(paths.at(1)).toHaveProp('d', 'M 0 -10.5 A 10.5 10.5 0 0 1 ' + (-10.5 * Math.cos(1.5 * Math.PI))
        + ' ' + (-10.5 * Math.sin(1.5 * Math.PI)));
    expect(paths.at(1)).toHaveProp('strokeWidth', 7);
  });

  it('renders an arc circle and its background with the expected properties when percent is 72', function() {
    const circles = DeprecatedPropsComponent({percent: 72}).find('circle');
    const paths = DeprecatedPropsComponent({percent: 72}).find('path');

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

  it('renders an arc circle and its background with the expected properties when calculated percent is 72', function() {
    const circles = propsComponent({value: 72}).find('circle');
    const paths = propsComponent({value: 72}).find('path');

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
    const circles = DeprecatedPropsComponent({percent: 11}).find('circle');
    const paths = DeprecatedPropsComponent({percent: 11}).find('path');

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

  it('renders an arc circle and its background with the expected properties when calculated percent is 11', function() {
    const circles = propsComponent({value: 11}).find('circle');
    const paths = propsComponent({value: 11}).find('path');

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
    const withZeroInnerRadius = propsComponent({ innerRadiusPercent: 0, value: 50 }),
        with100InnerRadius = propsComponent({ innerRadiusPercent: 100, value: 50 }),
        withZeroInnerRadiusAnd100Percent = propsComponent({ innerRadiusPercent: 0, value: 100 }),
        with100InnerRadiusAnd100Percent = propsComponent({ innerRadiusPercent: 100, value: 100 });

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
    const withNegativeInnerRadius = propsComponent({ innerRadiusPercent: -50, value: 50 }),
        withExcessInnerRadius = propsComponent({ innerRadiusPercent: 150, value: 50 }),
        withNegativeInnerRadiusAnd100Percent = propsComponent({ innerRadiusPercent: -50, value: 100 }),
        withExcessInnerRadiusAnd100Percent = propsComponent({ innerRadiusPercent: 150, value: 100 });

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

  it('adjusts the circles and paths based on the innerRadiusPercent when percent is specified', function() {
    const withZeroInnerRadius = DeprecatedPropsComponent({ innerRadiusPercent: 0, percent: 50 }),
        with100InnerRadius = DeprecatedPropsComponent({ innerRadiusPercent: 100, percent: 50 }),
        withZeroInnerRadiusAnd100Percent = DeprecatedPropsComponent({ innerRadiusPercent: 0, percent: 100 }),
        with100InnerRadiusAnd100Percent = DeprecatedPropsComponent({ innerRadiusPercent: 100, percent: 100 });

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

  it('clamps the innerRadiusPercent between zero and 100 when percent is specified', function() {
    const withNegativeInnerRadius = DeprecatedPropsComponent({ innerRadiusPercent: -50, percent: 50 }),
        withExcessInnerRadius = DeprecatedPropsComponent({ innerRadiusPercent: 150, percent: 50 }),
        withNegativeInnerRadiusAnd100Percent = DeprecatedPropsComponent({ innerRadiusPercent: -50, percent: 100 }),
        withExcessInnerRadiusAnd100Percent = DeprecatedPropsComponent({ innerRadiusPercent: 150, percent: 100 });

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
