/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { DATA_WITH_STRING_TIME } from './data';

import { AxisProps } from '@nivo/axes';
import { ScaleSpec } from '@nivo/scales';
import { LegendProps } from '@nivo/legends';
import { ResponsiveLine } from '@nivo/line';

const threatColors = [
  '#CC0028'
];

const theme = {
  background: '#ffffff'
};

const stringXScale: ScaleSpec = {
  type: 'point'
};

const linearYScale: ScaleSpec = {
  type: 'linear',
  stacked: true,
  reverse: false
};

// const axisBottom: AxisProps = {
//   legend: '',
//   format: '%b-%d',
//   legendOffset: 40,
//   legendPosition: 'middle',
//   tickSize: 5,
//   tickPadding: 5,
//   tickRotation: 0
// };

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
  pointBorderWidth: 4
};

const margins = { top: 40, right: 60, bottom: 80, left: 60 };

export default function LineChartExample() {
  return (
    <div style={{ height: '400px' }}>
      <ResponsiveLine data={DATA_WITH_STRING_TIME}
                      margin={margins}
                      xScale={stringXScale}
                      yScale={linearYScale}

                      axisTop={null}
                      axisRight={null}
                      // axisBottom={axisBottom}

                      axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Vulnerable Proxied Components',
                        legendOffset: -40,
                        legendPosition: 'middle'
                      }}

                      pointLabelYOffset={-12}
                      useMesh={true}
                      crosshairType='cross'

                      theme={theme}
                      colors={threatColors}
                      legends={legends}
                      { ...style }
      />
    </div>
  );
}
