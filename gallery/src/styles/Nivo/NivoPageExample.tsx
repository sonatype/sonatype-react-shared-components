/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { ResponsiveLine } from '@nivo/line';

const MyResponsiveLine = () => (
  <ResponsiveLine data={
        [
          {
            'id': 'japan',
            'color': 'hsl(215, 70%, 50%)',
            'data': [
              {
                'x': 'plane',
                'y': 234
              },
              {
                'x': 'helicopter',
                'y': 135
              },
              {
                'x': 'boat',
                'y': 30
              },
              {
                'x': 'train',
                'y': 189
              },
              {
                'x': 'subway',
                'y': 134
              },
              {
                'x': 'bus',
                'y': 215
              },
              {
                'x': 'car',
                'y': 220
              },
              {
                'x': 'moto',
                'y': 248
              },
              {
                'x': 'bicycle',
                'y': 209
              },
              {
                'x': 'horse',
                'y': 232
              },
              {
                'x': 'skateboard',
                'y': 71
              },
              {
                'x': 'others',
                'y': 27
              }
            ]
          },
          {
            'id': 'france',
            'color': 'hsl(88, 70%, 50%)',
            'data': [
              {
                'x': 'plane',
                'y': 135
              },
              {
                'x': 'helicopter',
                'y': 227
              },
              {
                'x': 'boat',
                'y': 290
              },
              {
                'x': 'train',
                'y': 60
              },
              {
                'x': 'subway',
                'y': 179
              },
              {
                'x': 'bus',
                'y': 37
              },
              {
                'x': 'car',
                'y': 61
              },
              {
                'x': 'moto',
                'y': 39
              },
              {
                'x': 'bicycle',
                'y': 124
              },
              {
                'x': 'horse',
                'y': 133
              },
              {
                'x': 'skateboard',
                'y': 75
              },
              {
                'x': 'others',
                'y': 97
              }
            ]
          },
          {
            'id': 'us',
            'color': 'hsl(1, 70%, 50%)',
            'data': [
              {
                'x': 'plane',
                'y': 49
              },
              {
                'x': 'helicopter',
                'y': 102
              },
              {
                'x': 'boat',
                'y': 22
              },
              {
                'x': 'train',
                'y': 189
              },
              {
                'x': 'subway',
                'y': 212
              },
              {
                'x': 'bus',
                'y': 267
              },
              {
                'x': 'car',
                'y': 82
              },
              {
                'x': 'moto',
                'y': 292
              },
              {
                'x': 'bicycle',
                'y': 175
              },
              {
                'x': 'horse',
                'y': 134
              },
              {
                'x': 'skateboard',
                'y': 5
              },
              {
                'x': 'others',
                'y': 65
              }
            ]
          },
          {
            'id': 'germany',
            'color': 'hsl(2, 70%, 50%)',
            'data': [
              {
                'x': 'plane',
                'y': 224
              },
              {
                'x': 'helicopter',
                'y': 173
              },
              {
                'x': 'boat',
                'y': 85
              },
              {
                'x': 'train',
                'y': 55
              },
              {
                'x': 'subway',
                'y': 193
              },
              {
                'x': 'bus',
                'y': 209
              },
              {
                'x': 'car',
                'y': 265
              },
              {
                'x': 'moto',
                'y': 42
              },
              {
                'x': 'bicycle',
                'y': 199
              },
              {
                'x': 'horse',
                'y': 1
              },
              {
                'x': 'skateboard',
                'y': 232
              },
              {
                'x': 'others',
                'y': 17
              }
            ]
          },
          {
            'id': 'norway',
            'color': 'hsl(23, 70%, 50%)',
            'data': [
              {
                'x': 'plane',
                'y': 178
              },
              {
                'x': 'helicopter',
                'y': 188
              },
              {
                'x': 'boat',
                'y': 14
              },
              {
                'x': 'train',
                'y': 289
              },
              {
                'x': 'subway',
                'y': 204
              },
              {
                'x': 'bus',
                'y': 273
              },
              {
                'x': 'car',
                'y': 112
              },
              {
                'x': 'moto',
                'y': 148
              },
              {
                'x': 'bicycle',
                'y': 206
              },
              {
                'x': 'horse',
                'y': 250
              },
              {
                'x': 'skateboard',
                'y': 128
              },
              {
                'x': 'others',
                'y': 234
              }
            ]
          }
        ]}
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
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'transportation',
                    legendOffset: 36,
                    legendPosition: 'middle'
                  }}
                  axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                  }}
                  pointSize={10}
                  pointColor={{ theme: 'background' }}
                  pointBorderWidth={2}
                  pointBorderColor={{ from: 'serieColor' }}
                  pointLabelYOffset={-12}
                  useMesh={true}
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

export default function NivoPageExample() {
  return (
    <div style={{ height: 400 }} className="lineChart">
      <MyResponsiveLine></MyResponsiveLine>
    </div>
  );
}
