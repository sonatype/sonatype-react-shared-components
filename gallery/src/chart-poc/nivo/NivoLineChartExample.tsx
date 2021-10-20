/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useEffect, useState } from 'react';
import { selectableColorValues } from '@sonatype/react-shared-components';
import { ResponsiveLine } from '@nivo/line';

const data = [
  {
    'id': 'Long Story',
    'data': [
      {
        'x': 'Critical',
        'y': 264
      },
      {
        'x': 'Severe',
        'y': 117
      },
      {
        'x': 'Moderate',
        'y': 0
      },
      {
        'x': 'Low',
        'y': 213
      },
      {
        'x': 'None',
        'y': 148
      }
    ]
  },
  {
    'id': 'Song Story',
    'data': [
      {
        'x': 'Critical',
        'y': 88
      },
      {
        'x': 'Severe',
        'y': 263
      },
      {
        'x': 'Moderate',
        'y': 282
      },
      {
        'x': 'Low',
        'y': 39
      },
      {
        'x': 'None',
        'y': 83
      }
    ]
  },
  {
    'id': 'Later Daters',
    'data': [
      {
        'x': 'Critical',
        'y': 27
      },
      {
        'x': 'Severe',
        'y': 43
      },
      {
        'x': 'Moderate',
        'y': 136
      },
      {
        'x': 'Low',
        'y': 125
      },
      {
        'x': 'None',
        'y': 281
      }
    ]
  },
  {
    'id': 'Free Runner',
    'data': [
      {
        'x': 'Critical',
        'y': 17
      },
      {
        'x': 'Severe',
        'y': 238
      },
      {
        'x': 'Moderate',
        'y': 13
      },
      {
        'x': 'Low',
        'y': 211
      },
      {
        'x': 'None',
        'y': 146
      }
    ]
  }
];

export default function NivoLineChartExample() {
  const [colors, setColors] = useState<string[] | undefined>(undefined);

  useEffect(function() {
    selectableColorValues.then(({ dark }) => setColors(dark));
  }, []);

  if (colors) {
    return (
      <div style={{ height: '500px' }}>
        <ResponsiveLine data={data}
                        colors={colors}
                        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                        xScale={{ type: 'point' }}
                        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                        yFormat=' >-.2f'
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                          tickSize: 5,
                          tickPadding: 5,
                          tickRotation: 0,
                          legend: 'Violation Level',
                          legendOffset: 36,
                          legendPosition: 'middle'
                        }}
                        axisLeft={{
                          tickSize: 5,
                          tickPadding: 5,
                          tickRotation: 0,
                          legend: 'Violation Count',
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
      </div>
    );
  }
  else {
    return null;
  }
}
