/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import NxBinaryDonutChart, {Props} from '../NxBinaryDonutChart';

describe('NxBinaryDonutChart', function() {
  describe('with non-deprecated props', function() {
    const minimalProps: Props = {
          value: 0
        },
        getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxBinaryDonutChart, minimalProps);

    it('sets the role to "meter"', function() {
      expect(getShallowComponent()).toHaveProp('role', 'meter');
    });

    it('sets the aria-valuemin to 0', function() {
      expect(getShallowComponent()).toHaveProp('aria-valuemin', 0);
    });

    it('sets the aria-valuemax to 100 when maxVal is not specified', function() {
      expect(getShallowComponent()).toHaveProp('aria-valuemax', 100);
    });

    it('sets the aria-valuemax to maxVal when maxVal is specified', function() {
      expect(getShallowComponent({maxVal: 200})).toHaveProp('aria-valuemax', 200);
    });

    it('sets the aria-valuenow to value', function() {
      expect(getShallowComponent({value: 30})).toHaveProp('aria-valuenow', 30);
    });

    it('renders an svg with the expected properties', function() {
      expect(getShallowComponent({value: 90})).toHaveClassName('.nx-binary-donut-chart');
      expect(getShallowComponent({value: 90})).toHaveProp('viewBox', '-15 -15 30 30');
      expect(getShallowComponent({value: 90})).toMatchSelector('svg');
    });

    it('renders only the background path with the expected properties at zero value', function() {
      const circles = getShallowComponent().find('circle');
      const paths = getShallowComponent().find('path');

      expect(circles.length).toBe(0);
      expect(paths.length).toBe(1);
      expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__background');

      // whether the background renders correctly is best left to the visual tests
    });

    it('renders only the background path with the expected properties at zero value with maxVal',
        function() {
          const circles = getShallowComponent({maxVal: 200}).find('circle');
          const paths = getShallowComponent({maxVal: 200}).find('path');

          expect(circles.length).toBe(0);
          expect(paths.length).toBe(1);
          expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__background');

        // whether the background renders correctly is best left to the visual tests
        });

    it('renders the background path and an arc circle with the expected properties when value is 100',
        function() {
          const circles = getShallowComponent({value: 100}).find('circle');
          const paths = getShallowComponent({value: 100}).find('path');

          expect(circles.length).toBe(1);
          expect(circles.at(0)).toHaveClassName('.nx-binary-donut-chart__arc');
          expect(circles.at(0)).toHaveProp('strokeWidth', 7);
          expect(circles.at(0)).toHaveProp('r', 10.5);
          expect(paths.length).toBe(1);
          expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__background');
        });

    it('renders the background path and an arc circle with the expected properties when value is equal to maxVal',
        function() {
          const circles = getShallowComponent({value: 80, maxVal: 80}).find('circle');
          const paths = getShallowComponent({value: 80, maxVal: 80}).find('path');

          expect(circles.length).toBe(1);
          expect(circles.at(0)).toHaveClassName('.nx-binary-donut-chart__arc');
          expect(circles.at(0)).toHaveProp('strokeWidth', 7);
          expect(circles.at(0)).toHaveProp('r', 10.5);
          expect(paths.length).toBe(1);
          expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__background');
        });

    it('renders only a background circle path when value is negative', function() {
      const circles = getShallowComponent({value: -50}).find('circle');
      const paths = getShallowComponent({value: -50}).find('path');

      expect(circles.length).toBe(0);
      expect(paths.length).toBe(1);
      expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__background');
    });

    it('renders only a background circle path when value is negative with maxVal', function() {
      const circles = getShallowComponent({value: -50, maxVal: 200}).find('circle');
      const paths = getShallowComponent({value: -50, maxVal: 200}).find('path');

      expect(circles.length).toBe(0);
      expect(paths.length).toBe(1);
      expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__background');
    });

    it('renders a background path and arc path with expected properties when 0 < value < 100', function() {
      const circles = getShallowComponent({value: 50}).find('circle');
      const paths = getShallowComponent({value: 50}).find('path');

      expect(circles.length).toBe(0);
      expect(paths.length).toBe(2);
      expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__background');
      expect(paths.at(1)).toHaveClassName('.nx-binary-donut-chart__arc');
      expect(paths.at(1)).toHaveProp('d', 'M 0 -10.5 A 10.5 10.5 0 0 1 ' + (-10.5 * Math.cos(1.5 * Math.PI))
          + ' ' + (-10.5 * Math.sin(1.5 * Math.PI)));
      expect(paths.at(1)).toHaveProp('strokeWidth', 7);
    });

    it('renders a background path and arc path with expected properties when 0 < value < maxVal',
        function() {
          const circles = getShallowComponent({value: 100, maxVal: 200}).find('circle');
          const paths = getShallowComponent({value: 100, maxVal: 200}).find('path');

          expect(circles.length).toBe(0);
          expect(paths.length).toBe(2);
          expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__background');
          expect(paths.at(1)).toHaveClassName('.nx-binary-donut-chart__arc');
          expect(paths.at(1)).toHaveProp('d', 'M 0 -10.5 A 10.5 10.5 0 0 1 ' + (-10.5 * Math.cos(1.5 * Math.PI))
              + ' ' + (-10.5 * Math.sin(1.5 * Math.PI)));
          expect(paths.at(1)).toHaveProp('strokeWidth', 7);
        });

    it('adjusts the circles and paths based on the innerRadiusPercent', function() {
      const withZeroInnerRadius = getShallowComponent({ innerRadiusPercent: 0, value: 50 }),
          with100InnerRadius = getShallowComponent({ innerRadiusPercent: 100, value: 50 }),
          withZeroInnerRadiusAnd100Percent = getShallowComponent({ innerRadiusPercent: 0, value: 100 }),
          with100InnerRadiusAnd100Percent = getShallowComponent({ innerRadiusPercent: 100, value: 100 });

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
      const withNegativeInnerRadius = getShallowComponent({ innerRadiusPercent: -50, value: 50 }),
          withExcessInnerRadius = getShallowComponent({ innerRadiusPercent: 150, value: 50 }),
          withNegativeInnerRadiusAnd100Percent = getShallowComponent({ innerRadiusPercent: -50, value: 100 }),
          withExcessInnerRadiusAnd100Percent = getShallowComponent({ innerRadiusPercent: 150, value: 100 });

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

  describe('with deprecated props', function() {
    const minimalDeprecatedProps: Props = {
          percent: 0
        },
        getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxBinaryDonutChart, minimalDeprecatedProps);

    it('sets the role to "meter"', function() {
      expect(getShallowComponent()).toHaveProp('role', 'meter');
    });

    it('sets the aria-valuemin to 0', function() {
      expect(getShallowComponent()).toHaveProp('aria-valuemin', 0);
    });

    it('sets the aria-valuemax to 100 when maxVal is not specified', function() {
      expect(getShallowComponent()).toHaveProp('aria-valuemax', 100);
    });

    it('sets the aria-valuemax to maxVal when maxVal is specified', function() {
      expect(getShallowComponent({maxVal: 200})).toHaveProp('aria-valuemax', 200);
    });

    it('sets the aria-valuenow to calculated value', function() {
      expect(getShallowComponent({percent: 30})).toHaveProp('aria-valuenow', 30);
    });

    it('sets the aria-valuenow to calculated value with maxVal', function() {
      expect(getShallowComponent({percent: 30, maxVal: 90})).toHaveProp('aria-valuenow', 27);
    });

    it('renders an svg with the expected properties', function() {
      expect(getShallowComponent({percent: 20})).toHaveClassName('.nx-binary-donut-chart');
      expect(getShallowComponent({percent: 60})).toHaveProp('viewBox', '-15 -15 30 30');
      expect(getShallowComponent({percent: 60})).toMatchSelector('svg');
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
      const circles = getShallowComponent({percent: 100}).find('circle');
      const paths = getShallowComponent({percent: 100}).find('path');

      expect(circles.length).toBe(1);
      expect(circles.at(0)).toHaveClassName('.nx-binary-donut-chart__arc');
      expect(circles.at(0)).toHaveProp('strokeWidth', 7);
      expect(circles.at(0)).toHaveProp('r', 10.5);
      expect(paths.length).toBe(1);
      expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__background');
    });

    it('renders only a background circle path when percent is negative', function() {
      const circles = getShallowComponent({percent: -50}).find('circle');
      const paths = getShallowComponent({percent: -50}).find('path');

      expect(circles.length).toBe(0);
      expect(paths.length).toBe(1);
      expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__background');
    });

    it('renders a background path and arc path with expected properties when 0 < percent < 100', function() {
      const circles = getShallowComponent({percent: 50}).find('circle');
      const paths = getShallowComponent({percent: 50}).find('path');

      expect(circles.length).toBe(0);
      expect(paths.length).toBe(2);
      expect(paths.at(0)).toHaveClassName('.nx-binary-donut-chart__background');
      expect(paths.at(1)).toHaveClassName('.nx-binary-donut-chart__arc');
      expect(paths.at(1)).toHaveProp('d', 'M 0 -10.5 A 10.5 10.5 0 0 1 ' + (-10.5 * Math.cos(1.5 * Math.PI))
          + ' ' + (-10.5 * Math.sin(1.5 * Math.PI)));
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
});
