/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { Props, propTypes } from './types';
export { Props } from './types';

import './NxBinaryDonutChart.scss';
import classnames from 'classnames';

export default function NxBinaryDonutChart(props: Props) {
  const { ref, innerRadiusPercent, value, percent, className, maxVal, ...svgAttrs } = props;

  const donutClasses = classnames('nx-binary-donut-chart', className);

  const max = maxVal ?? 100;
  const calculatedPercent = value ? value / max * 100 : percent as number;
  const calculatedValue = value ?? calculatedPercent * max / 100;

  // _Not counting the borders_, the inner radius is defined as a percentage
  // of the outer radius. Of the 30x30 viewbox, 1px on each side is border - the area that
  // the inner radius is relative to is actually 28x28 which is what the 14 and 7 here derive from
  const innerRadius = innerRadiusPercent == null ? 7 :
    (Math.min(100, Math.max(0, innerRadiusPercent)) / 100) * 14;

  const innerBorderRadius = innerRadius - 0.5;
  const donutWidth = 14 - innerRadius;
  const arcR = innerRadius + (donutWidth / 2);

  // Add 0.5π because we want the angle from the top of the circle, not the right
  const arcEndAngle = (Math.PI / 2) + (2 * Math.PI * (calculatedPercent / 100));
  // Multiply by -1 to fill clockwise not counter-clockwise
  const arcEndX = -1 * arcR * Math.cos(arcEndAngle);
  // Multiply by -1 because the y value increases going downwards on the screen, not upwards
  const arcEndY = -1 * arcR * Math.sin(arcEndAngle);
  const largeArc = calculatedPercent > 50 ? 1 : 0;

  return (
    <svg ref={ref}
         viewBox="-15 -15 30 30"
         role="meter"
         aria-valuemin={0}
         aria-valuemax={max}
         aria-valuenow={calculatedValue}
         className={donutClasses}
         {...svgAttrs}>
      {/*
        * The first `M` and two `a`s below draw the outer border and the later ones draw the inner border.
        * The reason we need two `a`s for each is because svg gets confused trying to draw a full
        * circle described with this syntax and just draws nothing. Each `a` is half the circle.
        */
        /* eslint-disable @stylistic/indent */
      }
      <path className="nx-binary-donut-chart__background"
            d={`M 0 -14.5
                  a 14.5 14.5 0 1 1 0 29
                  a 14.5 14.5 0 1 1 0 -29
                ${innerBorderRadius <= 0 ? '' :
                  `M 0 ${-innerBorderRadius}
                    a ${innerBorderRadius} ${innerBorderRadius} 0 1 1 0 ${innerBorderRadius * 2}
                    a ${innerBorderRadius} ${innerBorderRadius} 0 1 1 0 ${-innerBorderRadius * 2}`}`} />
      { calculatedPercent > 0 && calculatedPercent < 100 &&
        <path className="nx-binary-donut-chart__arc"
              d={`M 0 ${-arcR} A ${arcR} ${arcR} 0 ${largeArc} 1 ${arcEndX} ${arcEndY}`}
              strokeWidth={donutWidth}/>
      }
      { calculatedPercent >= 100 &&
        <circle className="nx-binary-donut-chart__arc" strokeWidth={donutWidth} r={arcR}/>
      }
    </svg>
  );
}

NxBinaryDonutChart.propTypes = propTypes;
