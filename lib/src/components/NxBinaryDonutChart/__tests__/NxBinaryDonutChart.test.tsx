/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
import NxBinaryDonutChart, {Props} from '../NxBinaryDonutChart';

describe('NxBinaryDonutChart', function() {
  describe('with non-deprecated props', function() {
    const minimalProps: Props = {
          value: 0
        },
        quickRender = rtlRender<Props>(NxBinaryDonutChart, minimalProps),
        renderEl = rtlRenderElement<Props>(NxBinaryDonutChart, minimalProps);

    function renderArc(props?: Partial<Props>) {
      return renderEl(props)!.querySelector('.nx-binary-donut-chart__arc');
    }

    beforeEach(function() {
      // silence prop type errors from invalid value tests
      jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    it('renders a top-level svg with a role of meter', function() {
      const view = quickRender();

      expect(view.getByRole('meter')).toBe(view.container.firstElementChild);
      expect(view.container.firstElementChild!.tagName).toBe('svg');
    });

    it('allows the role to be overridden', function() {
      expect(renderEl({ role: 'none' })).toHaveAttribute('role', 'none');
    });

    it('sets the aria-valuemin to 0', function() {
      expect(renderEl()).toHaveAttribute('aria-valuemin', '0');
    });

    it('sets the aria-valuemax to 100 when maxVal is not specified', function() {
      expect(renderEl()).toHaveAttribute('aria-valuemax', '100');
    });

    it('sets the aria-valuemax to maxVal when maxVal is specified', function() {
      expect(renderEl({maxVal: 200})).toHaveAttribute('aria-valuemax', '200');
    });

    it('sets the aria-valuenow to value', function() {
      expect(renderEl({value: 30})).toHaveAttribute('aria-valuenow', '30');
    });

    it('does not render an arc when value is negative', function() {
      expect(renderArc({ value: -50 })).not.toBeInTheDocument();
    });

    it('does not render an arc when value is zero', function() {
      expect(renderArc()).not.toBeInTheDocument();
    });

    it('renders a correct arc path when 0 < value < 100', function() {
      const arc = renderArc({ value: 50 })!;

      expect(arc).toHaveAttribute('d', 'M 0 -10.5 A 10.5 10.5 0 0 1 ' + (-10.5 * Math.cos(1.5 * Math.PI))
          + ' ' + (-10.5 * Math.sin(1.5 * Math.PI)));
    });

    it('renders a correct arc path when 0 < value < maxVal', function() {
      const arc = renderArc({ value: 100, maxVal: 200 })!;

      expect(arc).toHaveAttribute('d', 'M 0 -10.5 A 10.5 10.5 0 0 1 ' + (-10.5 * Math.cos(1.5 * Math.PI))
          + ' ' + (-10.5 * Math.sin(1.5 * Math.PI)));
    });

    it('adjusts the arc based on the innerRadiusPercent', function() {
      const withZeroInnerRadius = renderArc({ innerRadiusPercent: 0, value: 50 })!,
          with100InnerRadius = renderArc({ innerRadiusPercent: 100, value: 50 })!,
          withZeroInnerRadiusAnd100Percent = renderArc({ innerRadiusPercent: 0, value: 100 })!,
          with100InnerRadiusAnd100Percent = renderArc({ innerRadiusPercent: 100, value: 100 })!;

      expect(withZeroInnerRadius).toHaveAttribute('d', `M 0 -7 A 7 7 0 0 1 ${-7 * Math.cos(1.5 * Math.PI)} 7`);
      expect(withZeroInnerRadius).toHaveAttribute('stroke-width', '14');
      expect(with100InnerRadius).toHaveAttribute('d', `M 0 -14 A 14 14 0 0 1 ${-14 * Math.cos(1.5 * Math.PI)} 14`);
      expect(with100InnerRadius).toHaveAttribute('stroke-width', '0');

      expect(withZeroInnerRadiusAnd100Percent.tagName).toBe('circle');
      expect(withZeroInnerRadiusAnd100Percent).toHaveAttribute('r', '7');
      expect(withZeroInnerRadiusAnd100Percent).toHaveAttribute('stroke-width', '14');
      expect(with100InnerRadiusAnd100Percent.tagName).toBe('circle');
      expect(with100InnerRadiusAnd100Percent).toHaveAttribute('r', '14');
      expect(with100InnerRadiusAnd100Percent).toHaveAttribute('stroke-width', '0');
    });

    // Check that the background path is constructed correctly when innerBorderRadius is zero (RSC-1329)
    it('sets a valid path on the background when the innerBorderRadius is zero', function() {
      const withZeroInnerRadius = renderEl({ innerRadiusPercent: 0, value: 50 })!
          .querySelector('.nx-binary-donut-chart__background');

      expect(withZeroInnerRadius).toHaveAttribute('d', `M 0 -14.5
                      a 14.5 14.5 0 1 1 0 29
                      a 14.5 14.5 0 1 1 0 -29
                    `);
    });

    it('clamps the innerRadiusPercent between zero and 100', function() {
      const withNegativeInnerRadius = renderArc({ innerRadiusPercent: -50, value: 50 })!,
          withExcessInnerRadius = renderArc({ innerRadiusPercent: 150, value: 50 })!,
          withNegativeInnerRadiusAnd100Percent = renderArc({ innerRadiusPercent: -50, value: 100 })!,
          withExcessInnerRadiusAnd100Percent = renderArc({ innerRadiusPercent: 150, value: 100 })!;

      expect(withNegativeInnerRadius).toHaveAttribute('d', `M 0 -7 A 7 7 0 0 1 ${-7 * Math.cos(1.5 * Math.PI)} 7`);
      expect(withNegativeInnerRadius).toHaveAttribute('stroke-width', '14');
      expect(withExcessInnerRadius).toHaveAttribute('d', `M 0 -14 A 14 14 0 0 1 ${-14 * Math.cos(1.5 * Math.PI)} 14`);
      expect(withExcessInnerRadius).toHaveAttribute('stroke-width', '0');

      expect(withNegativeInnerRadiusAnd100Percent).toHaveAttribute('r', '7');
      expect(withNegativeInnerRadiusAnd100Percent).toHaveAttribute('stroke-width', '14');
      expect(withExcessInnerRadiusAnd100Percent).toHaveAttribute('r', '14');
      expect(withExcessInnerRadiusAnd100Percent).toHaveAttribute('stroke-width', '0');
    });
  });

  describe('with deprecated props', function() {
    const minimalDeprecatedProps: Props = {
          percent: 0
        },
        renderEl = rtlRenderElement<Props>(NxBinaryDonutChart, minimalDeprecatedProps);

    function renderArc(props?: Partial<Props>) {
      return renderEl(props)!.querySelector('.nx-binary-donut-chart__arc');
    }

    it('sets the role to "meter"', function() {
      expect(renderEl()).toHaveAttribute('role', 'meter');
    });

    it('sets the aria-valuemin to 0', function() {
      expect(renderEl()).toHaveAttribute('aria-valuemin', '0');
    });

    it('sets the aria-valuemax to 100 when maxVal is not specified', function() {
      expect(renderEl()).toHaveAttribute('aria-valuemax', '100');
    });

    it('sets the aria-valuemax to maxVal when maxVal is specified', function() {
      expect(renderEl({maxVal: 200})).toHaveAttribute('aria-valuemax', '200');
    });

    it('sets the aria-valuenow to calculated value', function() {
      expect(renderEl({percent: 30})).toHaveAttribute('aria-valuenow', '30');
    });

    it('sets the aria-valuenow to calculated value with maxVal', function() {
      expect(renderEl({percent: 30, maxVal: 90})).toHaveAttribute('aria-valuenow', '27');
    });

    it('does not render an arc when value is zero', function() {
      expect(renderArc()).not.toBeInTheDocument();
    });

    it('does not render an arc when value is negative', function() {
      expect(renderArc({ percent: -50 })).not.toBeInTheDocument();
    });

    it('renders a correct arc path when 0 < value < 100', function() {
      const arc = renderArc({ percent: 50 })!;

      expect(arc).toHaveAttribute('d', 'M 0 -10.5 A 10.5 10.5 0 0 1 ' + (-10.5 * Math.cos(1.5 * Math.PI))
          + ' ' + (-10.5 * Math.sin(1.5 * Math.PI)));
    });

    it('renders a correct arc path when 0 < value < maxVal', function() {
      const arc = renderArc({ percent: 50, maxVal: 200 })!;

      expect(arc).toHaveAttribute('d', 'M 0 -10.5 A 10.5 10.5 0 0 1 ' + (-10.5 * Math.cos(1.5 * Math.PI))
          + ' ' + (-10.5 * Math.sin(1.5 * Math.PI)));
    });

    it('adjusts the arc based on the innerRadiusPercent', function() {
      const withZeroInnerRadius = renderArc({ innerRadiusPercent: 0, percent: 50 })!,
          with100InnerRadius = renderArc({ innerRadiusPercent: 100, percent: 50 })!,
          withZeroInnerRadiusAnd100Percent = renderArc({ innerRadiusPercent: 0, percent: 100 })!,
          with100InnerRadiusAnd100Percent = renderArc({ innerRadiusPercent: 100, percent: 100 })!;

      expect(withZeroInnerRadius).toHaveAttribute('d', `M 0 -7 A 7 7 0 0 1 ${-7 * Math.cos(1.5 * Math.PI)} 7`);
      expect(withZeroInnerRadius).toHaveAttribute('stroke-width', '14');
      expect(with100InnerRadius).toHaveAttribute('d', `M 0 -14 A 14 14 0 0 1 ${-14 * Math.cos(1.5 * Math.PI)} 14`);
      expect(with100InnerRadius).toHaveAttribute('stroke-width', '0');

      expect(withZeroInnerRadiusAnd100Percent.tagName).toBe('circle');
      expect(withZeroInnerRadiusAnd100Percent).toHaveAttribute('r', '7');
      expect(withZeroInnerRadiusAnd100Percent).toHaveAttribute('stroke-width', '14');
      expect(with100InnerRadiusAnd100Percent.tagName).toBe('circle');
      expect(with100InnerRadiusAnd100Percent).toHaveAttribute('r', '14');
      expect(with100InnerRadiusAnd100Percent).toHaveAttribute('stroke-width', '0');
    });

    // Check that the background path is constructed correctly when innerBorderRadius is zero (RSC-1329)
    it('sets a valid path on the background when the innerBorderRadius is zero', function() {
      const withZeroInnerRadius = renderEl({ innerRadiusPercent: 0, percent: 50 })!
          .querySelector('.nx-binary-donut-chart__background');

      expect(withZeroInnerRadius).toHaveAttribute('d', `M 0 -14.5
                      a 14.5 14.5 0 1 1 0 29
                      a 14.5 14.5 0 1 1 0 -29
                    `);
    });

    it('clamps the innerRadiusPercent between zero and 100', function() {
      const withNegativeInnerRadius = renderArc({ innerRadiusPercent: -50, percent: 50 })!,
          withExcessInnerRadius = renderArc({ innerRadiusPercent: 150, percent: 50 })!,
          withNegativeInnerRadiusAnd100Percent = renderArc({ innerRadiusPercent: -50, percent: 100 })!,
          withExcessInnerRadiusAnd100Percent = renderArc({ innerRadiusPercent: 150, percent: 100 })!;

      expect(withNegativeInnerRadius).toHaveAttribute('d', `M 0 -7 A 7 7 0 0 1 ${-7 * Math.cos(1.5 * Math.PI)} 7`);
      expect(withNegativeInnerRadius).toHaveAttribute('stroke-width', '14');
      expect(withExcessInnerRadius).toHaveAttribute('d', `M 0 -14 A 14 14 0 0 1 ${-14 * Math.cos(1.5 * Math.PI)} 14`);
      expect(withExcessInnerRadius).toHaveAttribute('stroke-width', '0');

      expect(withNegativeInnerRadiusAnd100Percent).toHaveAttribute('r', '7');
      expect(withNegativeInnerRadiusAnd100Percent).toHaveAttribute('stroke-width', '14');
      expect(withExcessInnerRadiusAnd100Percent).toHaveAttribute('r', '14');
      expect(withExcessInnerRadiusAnd100Percent).toHaveAttribute('stroke-width', '0');
    });
  });
});
