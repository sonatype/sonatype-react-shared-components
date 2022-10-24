/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { chartColors } from './data';
import { ResponsiveLine } from '@nivo/line';

const transport = [
  'plane',
  'helicopter',
  'boat',
  'train',
  'subway',
  'bus',
  'car',
  'moto',
  'bicycle',
  'horse',
  'other'
];

const country = [
  'Japan',
  'France',
  'US',
  'Germany',
  'Norway'
];

export const generateStringData = (numberOfLines: number, [min, max]: [number, number]) =>
  Array.from({ length: numberOfLines }).map((_, index) => ({
    id: country[index],
    data: transport.map(name => ({
      x: name,
      y: Math.floor(Math.random() * (max - min + 1) + min)
    }))
  }));

const MyResponsiveLine = () => (
  <ResponsiveLine data={generateStringData(5, [0, 500])}
                  margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                  xScale={{ type: 'point' }}
                  yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false
                  }}
                  yFormat=" >-.2f"
                  pointSize={10}
                  pointColor={{ theme: 'background' }}
                  pointBorderWidth={2}
                  pointBorderColor={{ from: 'serieColor' }}
                  pointLabelYOffset={-12}
                  useMesh={true}
                  colors={chartColors}
                  legends={[
                    {
                      anchor: 'bottom-right',
                      direction: 'column',
                      justify: false,
                      translateX: 100,
                      translateY: 0,
                      itemsSpacing: 0,
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
                  ]}
  />
);

export default function NivoLineExample() {
  return (
    <div style={{ height: 400 }} className="lineChart">
      <MyResponsiveLine></MyResponsiveLine>
    </div>
  );
}
