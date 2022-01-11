/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { ResponsiveLine } from '@nivo/line';

import { STORAGE_CONSUMPTION_DATA } from './data';

import './NivoPageExample.scss';

export default function NxAccordionExample() {
  return (
    <div className="chart-container">
      <ResponsiveLine data={STORAGE_CONSUMPTION_DATA}
                      margin={{ top: 50, right: 110, bottom: 50, left: 80 }}
                      yScale={{
                        type: 'linear',
                        stacked: false
                      }}
                      xScale={{
                        type: 'time',
                        format: '%Y-%m-%d',
                        precision: 'day',
                        useUTC: false
                      }}
                      axisLeft={{
                        legend: 'Gigabytes (GBs)',
                        legendPosition: 'middle',
                        legendOffset: -50
                      }}
                      axisBottom={{
                        legend: 'Dates',
                        format: '%b-%d',
                        legendOffset: 40,
                        legendPosition: 'middle'
                      }}
                      colors={[
                        '#00A1E6',
                        '#FFC333',
                        '#FF8098',
                        '#03C9B8'
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
