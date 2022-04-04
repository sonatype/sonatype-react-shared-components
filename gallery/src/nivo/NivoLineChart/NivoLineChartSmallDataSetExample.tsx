/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { DATA_WITH_DATES } from './data';

import { AxisProps } from '@nivo/axes';
import { ScaleSpec } from '@nivo/scales';
import { LegendProps } from '@nivo/legends';
import { ResponsiveLine } from '@nivo/line';

const colors = [
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

const theme = {
  background: '#ffffff'
};

const dateXScale: ScaleSpec = {
  type: 'time',
  format: '%Y-%m-%d',
  precision: 'day',
  useUTC: false
};

const linearYScale: ScaleSpec = {
  type: 'linear',
  stacked: true,
  reverse: false
};

const axisBottom: AxisProps = {
  legend: '',
  format: '%b-%d',
  legendOffset: 40,
  legendPosition: 'middle',
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0
};

const legends: LegendProps[] = [
  {
    anchor: 'bottom',
    direction: 'row',
    justify: false,
    translateX: 0,
    translateY: 60,
    itemsSpacing: 12,
    itemDirection: 'left-to-right',
    itemWidth: 80,
    itemHeight: 20,
    itemOpacity: 0.75,
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
  }
];

const style = {
  lineWidth: 4,
  pointSize: 10,
  pointColor: 'red',
  pointBorderWidth: 4,
  pointBorderColor: { inherit: 'color' }
};

const margins = { top: 40, right: 60, bottom: 80, left: 60 };

export default function LineChartExample() {
  return (
    <div style={{ height: '400px' }}>
      <ResponsiveLine data={DATA_WITH_DATES}
                      margin={margins}
                      xScale={dateXScale}
                      xFormat="time:%Y-%m-%d"
                      yScale={linearYScale}
                      axisTop={null}
                      axisRight={null}
                      axisBottom={axisBottom}
                      axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Number of Downloads',
                        legendOffset: -40,
                        legendPosition: 'middle'
                      }}
                      pointLabelYOffset={-12}
                      useMesh={true}
                      crosshairType='cross'
                      theme={theme}
                      colors={colors}
                      legends={legends}
                      { ...style }
      />
    </div>
  );
}
