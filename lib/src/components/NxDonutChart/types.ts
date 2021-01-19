/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { SVGAttributes } from 'react';
import * as PropTypes from 'prop-types';

export enum chartSeverity {
  CRITICAL= 'critical',
  SEVERE = 'severe',
  MODERATE = 'moderate',
  LOW = 'low',
  NO_THREAT = 'no-threat',
  UNSPECIFIED = 'unspecified'
}

export interface NxDonutChartDataPoint {
  value: number;
  severity: string;
  label: string;
}

export interface Props extends SVGAttributes<SVGSVGElement> {
  dataPoints: NxDonutChartDataPoint[];
}

export const donutDataPointsPropTypes = PropTypes.arrayOf(PropTypes.shape({
  value: PropTypes.number.isRequired,
  severity: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}).isRequired);

export const propTypes: PropTypes.ValidationMap<Props> = {
  dataPoints: donutDataPointsPropTypes.isRequired
};
