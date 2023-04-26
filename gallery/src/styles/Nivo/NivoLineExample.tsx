/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { NIVO_COLORS, NIVO_THEME } from '@sonatype/react-shared-components';
import { lineData } from './lineData';

export default function NivoLineExample() {
  return (
    <div style={{ height: 400 }}>
      <ResponsiveLine data={lineData}
                      theme={NIVO_THEME}
                      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                      xScale={{ type: 'point' }}
                      yScale={{
                        type: 'linear',
                        stacked: false,
                        reverse: false
                      }}
                      pointColor={{ theme: 'background' }}
                      pointBorderWidth={2}
                      pointBorderColor={{ from: 'serieColor' }}
                      colors={NIVO_COLORS}
                      useMesh={true}
                      axisBottom={{
                        legend: 'transportation',
                        legendOffset: 40,
                        legendPosition: 'middle'
                      }}
                      axisLeft={{
                        legend: 'count',
                        legendOffset: -40,
                        legendPosition: 'middle'
                      }}
                      axisTop={{
                        legend: 'Transportation in Different Countries',
                        legendOffset: -40,
                        legendPosition: 'middle'
                      }}
                      legends={[
                        {
                          anchor: 'bottom-right',
                          direction: 'column',
                          translateX: 100,
                          itemWidth: 80,
                          itemHeight: 20
                        }
                      ]}
        />
    </div>
  );
}
