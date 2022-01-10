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
      { x: '2021-12-01', y: 16 },
      { x: '2021-12-02', y: 12 },
      { x: '2021-12-03', y: 11 },
      { x: '2021-12-04', y: 9 },
      { x: '2021-12-05', y: 10 },
      { x: '2021-12-06', y: 11 },
      { x: '2021-12-07', y: 10 },
      { x: '2021-12-08', y: 12 },
      { x: '2021-12-09', y: 10 },
      { x: '2021-12-10', y: 9 },
      { x: '2021-12-11', y: 4 },
      { x: '2021-12-12', y: 9 },
      { x: '2021-12-13', y: 6 },
      { x: '2021-12-14', y: 2 },
      { x: '2021-12-15', y: 1 },
      { x: '2021-12-16', y: 16 },
      { x: '2021-12-17', y: 12 },
      { x: '2021-12-18', y: 11 },
      { x: '2021-12-19', y: 9 },
      { x: '2021-12-20', y: 10 },
      { x: '2021-12-21', y: 11 },
      { x: '2021-12-22', y: 10 },
      { x: '2021-12-23', y: 12 },
      { x: '2021-12-24', y: 10 },
      { x: '2021-12-25', y: 9 },
      { x: '2021-12-26', y: 4 },
      { x: '2021-12-27', y: 9 },
      { x: '2021-12-28', y: 6 },
      { x: '2021-12-29', y: 2 },
      { x: '2021-12-30', y: 1 },
      { x: '2021-12-31', y: 0 }
    ]
  },
  {
    id: 'non-log4shell',
    data: [
      { x: '2021-12-01', y: 12 },
      { x: '2021-12-02', y: 13 },
      { x: '2021-12-03', y: 10 },
      { x: '2021-12-04', y: 9 },
      { x: '2021-12-05', y: 12 },
      { x: '2021-12-06', y: 13 },
      { x: '2021-12-07', y: 14 },
      { x: '2021-12-08', y: 15 },
      { x: '2021-12-09', y: 13 },
      { x: '2021-12-10', y: 12 },
      { x: '2021-12-11', y: 14 },
      { x: '2021-12-12', y: 11 },
      { x: '2021-12-13', y: 10 },
      { x: '2021-12-14', y: 12 },
      { x: '2021-12-15', y: 14 },
      { x: '2021-12-16', y: 12 },
      { x: '2021-12-17', y: 13 },
      { x: '2021-12-18', y: 10 },
      { x: '2021-12-19', y: 9 },
      { x: '2021-12-20', y: 12 },
      { x: '2021-12-21', y: 13 },
      { x: '2021-12-22', y: 14 },
      { x: '2021-12-23', y: 15 },
      { x: '2021-12-24', y: 13 },
      { x: '2021-12-25', y: 12 },
      { x: '2021-12-26', y: 14 },
      { x: '2021-12-27', y: 11 },
      { x: '2021-12-28', y: 10 },
      { x: '2021-12-29', y: 12 },
      { x: '2021-12-30', y: 14 },
      { x: '2021-12-31', y: 15 }
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
                        legend: 'Dates',
                        format: '%b-%d',
                        legendOffset: 40,
                        legendPosition: 'middle'
                      }}
                      colors={[
                        '#EF889A',
                        '#46A2E1'
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
