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

const NxBinaryDonutChart = forwardRef<SVGSVGElement, Props>(
    function NxBinaryDonutChart(props, ref) {
      const innerRadiusPercent = props.innerRadiusPercent || 0;

      const strokeWidth = 100 - innerRadiusPercent;
      const r = innerRadiusPercent + (strokeWidth / 2);
      const strokeDasharray = [(100 - props.percent), props.percent];
      return (
        <svg ref={ref} viewBox="-100 -100 200 200" {...props}>
          <circle className="nx-binary-donut-chart-circle"
                  strokeWidth={strokeWidth}
                  r={r}>
          </circle>
          <circle className="nx-binary-donut-chart-circle"
                  strokeWidth={strokeWidth}
                  r={r}
                  pathLength="100"
                  strokeDasharray={strokeDasharray.join(' ')}>
          </circle>
        </svg>
      );
    }
);

NxBinaryDonutChart.propTypes = propTypes;

export default NxBinaryDonutChart;
