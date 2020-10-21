/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import { Props, propTypes } from './types';
export { Props } from './types';

import './NxBinaryDonutChart.scss';
import classnames from 'classnames';

const NxBinaryDonutChart = forwardRef<SVGSVGElement, Props>(
    function NxBinaryDonutChart(props, ref) {
      const { innerRadiusPercent, percent, className, ...svgAttrs } = props;

      const donutClasses = classnames('nx-binary-donut-chart', className);

      const innerRadiusPercentNotNull = innerRadiusPercent == null ? 50 :
        innerRadiusPercent < 0 ? 0 :
        innerRadiusPercent > 100 ? 100 :
        innerRadiusPercent;

      const strokeWidth = 100 - innerRadiusPercentNotNull;
      const r = innerRadiusPercentNotNull + (strokeWidth / 2);

      // Add 0.5π because we want the angle from the top of the circle, not the right
      const arcEndAngle = (Math.PI / 2) + (2 * Math.PI * (percent / 100));
      const arcEndX = r * Math.cos(arcEndAngle);
      // Multiply by -1 because the y values increases going downwards on the screen, not upwards
      const arcEndY = -1 * r * Math.sin(arcEndAngle);
      const largeArc = percent > 50 ? 1 : 0;

      return (
        <svg ref={ref} viewBox="-100 -100 200 200" className={donutClasses} {...svgAttrs}>
          { percent < 100 &&
            <circle className="nx-binary-donut-chart__background" strokeWidth={strokeWidth} r={r}/>
          }
          { percent > 0 && percent < 100 &&
            <path className="nx-binary-donut-chart__arc"
                  d={`M 0 ${-r} A ${r} ${r} 0 ${largeArc} 0 ${arcEndX} ${arcEndY}`}
                  strokeWidth={strokeWidth}/>
          }
          { percent >= 100 &&
            <circle className="nx-binary-donut-chart__arc" strokeWidth={strokeWidth} r={r}/>
          }
        </svg>
      );
    }
);

NxBinaryDonutChart.propTypes = propTypes;

export default NxBinaryDonutChart;
