/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import { ScaleSpec } from '@nivo/scales';
import { LegendProps } from '@nivo/legends';
import { LineSvgProps } from '@nivo/line';
import { AxisProps } from '@nivo/axes';

// Set of colors selected
// for Line Chart usage.
export const colors = [
  '#008FCC',
  '#99005A',
  '#3BA60C',
  '#650099',
  '#CC6A00',
  '#02306D',
  '#FF6685',
  '#664800',
  '#02978B',
  '#99001E',
  '#6D7AC5',
  '#005A80'
];

// https://github.com/d3/d3-format
// const dateFormat = {
//   xFormat: 'time:%Y-%m-%d'
// };

const legendBase: Omit<LegendProps, 'anchor' | 'direction'> = {
  justify: false,
  itemsSpacing: 8,
  itemDirection: 'left-to-right',
  itemWidth: 100,
  itemHeight: 20,
  itemOpacity: 1,
  symbolSize: 12,
  symbolShape: 'circle',
  symbolBorderColor: 'rgba(0, 0, 0, .5)',
  effects: [
    {
      on: 'hover',
      style: {
        itemBackground: 'rgba(0, 0, 0, .03)',
        itemOpacity: 1
      }
    }
  ]
};

// Legend aligned to the bottom for 5 or less items.
export const legendBottom: LegendProps[] = [
  {
    anchor: 'bottom',
    direction: 'row',
    translateX: 0,
    translateY: 80,
    ...legendBase
  }
];

// Legend aligned to the right for more than 5 items:
export const legendRight: LegendProps[] = [
  {
    anchor: 'top-right',
    direction: 'column',
    translateX: 120,
    translateY: 0,
    ...legendBase
  }
];

export const marginsNoLegend = { top: 40, right: 40, bottom: 60, left: 60 };
export const marginsLegendBottom = { top: 40, right: 40, bottom: 120, left: 60 };
export const marginsLegendRight = { top: 40, right: 100, bottom: 60, left: 60 };

export const baseProps: Partial<LineSvgProps> = {
  // style
  lineWidth: 3,
  pointSize: 8,
  pointBorderWidth: 3,
  pointBorderColor: 'white',
  pointLabelYOffset: -12,

  // interactive
  useMesh: true,
  crosshairType: 'cross'
};

export const styleNoPoints: Partial<LineSvgProps> = {
  // style
  lineWidth: 3,
  pointSize: 0,
  pointBorderWidth: 0,
  pointBorderColor: 'white',
  pointLabelYOffset: -12
};

export const yScaleStacked: ScaleSpec = {
  type: 'linear',
  stacked: true,
  reverse: false
};

export const yScaleNotStacked: ScaleSpec = {
  type: 'linear',
  stacked: false,
  reverse: false
};

export const stringXScale: ScaleSpec = {
  type: 'point'
};

// Date XScale
export const dateXScale: ScaleSpec = {
  type: 'time',
  format: '%Y-%m-%d',
  precision: 'day',
  useUTC: false
};

const baseAxis: Partial<AxisProps> = {
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  legendPosition: 'middle'
};

// Date Format
export const axisBottomDate: AxisProps = {
  format: '%b-%d',
  legend: 'Dates',
  legendOffset: 40,
  ...baseAxis
};

export const axisBottom: AxisProps = {
  legend: 'Y Legend',
  legendOffset: 40,
  ...baseAxis
};

export const axisLeft: AxisProps = {
  legend: 'Components consumed with age < than a week',
  legendOffset: -40,
  ...baseAxis
};
