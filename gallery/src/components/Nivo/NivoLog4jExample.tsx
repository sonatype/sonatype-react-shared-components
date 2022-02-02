/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { ResponsiveLine } from '@nivo/line';

import { DATA_WITH_DATES } from './data';

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

export default function LineChartExample() {
  return (
    <div style={{ height: '400px' }}>
      <ResponsiveLine data={DATA_WITH_DATES}
                      margin={{
                        bottom: 80,
                        left: 60,
                        right: 60,
                        top: 40
                      }}
                      xScale={{
                        type: 'time',
                        format: '%Y-%m-%d',
                        precision: 'day',
                        useUTC: false
                      }}
                      xFormat="time:%Y-%m-%d"
                      yScale={{
                        type: 'linear',
                        stacked: true,
                        reverse: false
                      }}
                      axisTop={null}
                      axisRight={null}
                      axisBottom={{
                        format: '%b-%d',
                        legend: '',
                        legendOffset: 40,
                        legendPosition: 'middle',
                        tickPadding: 6,
                        tickRotation: 0,
                        tickSize: 6
                      }}
                      axisLeft={{
                        legend: 'Number of Downloads',
                        legendOffset: -40,
                        legendPosition: 'middle',
                        tickPadding: 6,
                        tickRotation: 0,
                        tickSize: 6
                      }}
                      lineWidth={4}
                      pointBorderColor={{ from: 'serieColor' }}
                      pointBorderWidth={4}
                      pointColor={{ theme: 'background' }}
                      pointSize={12}
                      useMesh={true}
                      crosshairType='cross'
                      theme={{
                        background: '#ffffff'
                      }}
                      colors={colors}
                      legends={[
                        {
                          anchor: 'bottom',
                          direction: 'row',
                          itemDirection: 'left-to-right',
                          itemHeight: 20,
                          itemOpacity: 1,
                          itemsSpacing: 12,
                          itemWidth: 80,
                          justify: false,
                          symbolShape: 'circle',
                          symbolSize: 12,
                          translateX: 0,
                          translateY: 60
                        }
                      ]}
        />
    </div>
  );
}
