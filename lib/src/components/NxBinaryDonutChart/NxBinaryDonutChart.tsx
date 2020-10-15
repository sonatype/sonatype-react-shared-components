/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, ReactElement } from 'react';
import { Props, propTypes } from './types';
export { Props } from './types';

const NxBinaryDonutChart = forwardRef<SVGElement, Props>(
    function NxBinaryDonutChart(props): ReactElement<Props> {
      const decimal = props.percent / 100;
      const diameter = props.outerRadius * 2;
      const strokeWidth = props.outerRadius - props.innerRadius;
      const r = props.innerRadius + strokeWidth / 2;
      const circumference = 2 * Math.PI * r;
      const strokeDasharray = [decimal * circumference, (1.0 - decimal) * circumference];
      const strokeDashoffset = (0.25 * circumference) - (1.0 - decimal) * circumference;
      return (
        <svg width={diameter} height={diameter}>
          <circle cx={props.outerRadius}
                  cy={props.outerRadius}
                  strokeWidth={strokeWidth}
                  r={r}
                  fill="none"
                  stroke={props.fillColors[0]}>
          </circle>
          <circle cx={props.outerRadius}
                  cy={props.outerRadius}
                  strokeWidth={strokeWidth}
                  r={r}
                  strokeDasharray={strokeDasharray.join(' ')}
                  strokeDashoffset={strokeDashoffset}
                  fill="none"
                  stroke={props.fillColors[1]}>
          </circle>
        </svg>
      );
    }
);

NxBinaryDonutChart.propTypes = propTypes;

export default NxBinaryDonutChart;
