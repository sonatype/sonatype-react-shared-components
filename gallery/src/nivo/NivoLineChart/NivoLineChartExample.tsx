/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxStatefulAccordion, NxAccordion, NxTable, NxH2 } from '@sonatype/react-shared-components';

import { data, DATA_WITH_DATES } from './data';
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

const style = {
  lineWidth: 4,
  pointSize: 12,
  pointBorderWidth: 4
};

export default function LineChartExample() {
  return (
    <div>
      <div style={{ height: '400px' }}>
        <ResponsiveLine data={DATA_WITH_DATES}
                        { ...style }
                        margin={{ top: 40, right: 60, bottom: 80, left: 60 }}
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
                          legend: '',
                          format: '%b-%d',
                          legendOffset: 40,
                          legendPosition: 'middle',
                          tickSize: 5,
                          tickPadding: 5,
                          tickRotation: 0
                        }}
                        axisLeft={{
                          tickSize: 5,
                          tickPadding: 5,
                          tickRotation: 0,
                          legend: 'Number of Downloads',
                          legendOffset: -40,
                          legendPosition: 'middle'
                        }}
                        pointSize={10}
                        pointColor={{ theme: 'background' }}
                        pointBorderColor={{ from: 'serieColor' }}
                        pointLabelYOffset={-12}
                        useMesh={true}
                        crosshairType='cross'
                        theme={theme}
                        colors={colors}
                        legends={[
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
                        ]}
        />
      </div>
      {/* <NxStatefulAccordion defaultOpen={false}>
        <NxAccordion.Header>
          <NxAccordion.Title>Foo</NxAccordion.Title>
        </NxAccordion.Header>
        {
          data.map(transportation => (
            <>
              <NxH2>{transportation.id}</NxH2>
              <NxTable>
                <NxTable.Head>
                  <NxTable.Row>
                    <NxTable.Cell>Transportation</NxTable.Cell>
                    <NxTable.Cell>Number of Transportations</NxTable.Cell>
                  </NxTable.Row>
                </NxTable.Head>
                <NxTable.Body>
                  {
                    transportation.data.map((datum, index) => (
                      <NxTable.Row key={index}>
                        <NxTable.Cell>{ datum.x }</NxTable.Cell>
                        <NxTable.Cell>{ datum.y }</NxTable.Cell>
                      </NxTable.Row>
                    ))
                  }
                </NxTable.Body>
              </NxTable>
            </>
          ))
        }
      </NxStatefulAccordion> */}
    </div>
  );
}
