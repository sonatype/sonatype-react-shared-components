/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { ResponsiveLine } from '@nivo/line';

import './NivoPageExample.scss';

const data = [
  {
    id: 'log4shell',
    data: [
      { x: '2021-01-01', y: 16 },
      { x: '2021-01-02', y: 12 },
      { x: '2021-01-03', y: 11 },
      { x: '2021-01-04', y: 9 },
      { x: '2021-01-05', y: 10 },
      { x: '2021-01-06', y: 11 },
      { x: '2021-01-07', y: 10 },
      { x: '2021-01-08', y: 12 },
      { x: '2021-01-09', y: 10 },
      { x: '2021-01-10', y: 9 },
      { x: '2021-01-11', y: 4 },
      { x: '2021-01-12', y: 9 },
      { x: '2021-01-13', y: 6 },
      { x: '2021-01-14', y: 2 },
      { x: '2021-01-15', y: 1 }
    ]
  },
  {
    id: 'non-log4shell',
    data: [
      { x: '2021-01-01', y: 12 },
      { x: '2021-01-02', y: 13 },
      { x: '2021-01-03', y: 10 },
      { x: '2021-01-04', y: 9 },
      { x: '2021-01-05', y: 12 },
      { x: '2021-01-06', y: 13 },
      { x: '2021-01-07', y: 14 },
      { x: '2021-01-08', y: 15 },
      { x: '2021-01-09', y: 13 },
      { x: '2021-01-10', y: 12 },
      { x: '2021-01-11', y: 14 },
      { x: '2021-01-12', y: 11 },
      { x: '2021-01-13', y: 10 },
      { x: '2021-01-14', y: 12 },
      { x: '2021-01-15', y: 14 }
    ]
  }
];

export default function NxAccordionExample() {
  return (
    <div className="chart-container">
      <ResponsiveLine data={data}
                      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                      yScale={{
                        type: 'linear',
                        stacked: true
                      }}
                      xScale={{
                        type: 'time',
                        format: '%Y-%m-%d',
                        precision: 'day',
                        useUTC: false
                      }}
                      axisLeft={{
                        legend: 'Number of Downloads',
                        legendPosition: 'middle',
                        legendOffset: -40
                      }}
                      axisBottom={{
                        legend: 'December 2021',
                        format: '%d',
                        legendOffset: 40,
                        legendPosition: 'middle'
                      }}
                      colors={[
                        '#00A1E5',
                        '#FFC233'
                      ]}
                      xFormat="time:%Y-%m-%d"
                      enablePoints={false}
                      useMesh={true}
                      lineWidth={3}
                      crosshairType={'cross'}
                      legends={[
                        {
                          anchor: 'top-right',
                          direction: 'column',
                          justify: false,
                          translateX: 100,
                          translateY: 0,
                          itemsSpacing: 0,
                          itemDirection: 'left-to-right',
                          itemWidth: 80,
                          itemHeight: 20,
                          symbolSize: 14,
                          symbolShape: 'circle'
                        }
                      ]}
      />
    </div>
  );
}
