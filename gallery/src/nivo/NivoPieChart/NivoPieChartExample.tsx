/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxStatefulAccordion, NxAccordion } from '@sonatype/react-shared-components';

import { data, DATA_CVE_AFFECTED, THREAT_COLORS } from './data';

import { ResponsivePie } from '@nivo/pie';

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

// const LEGENDS: LegendProps[] = [
//   {
//     dataFrom: 'indexes',
//     anchor: 'bottom-right',
//     direction: 'column',
//     itemWidth: 100,
//     itemHeight: 20,
//     itemsSpacing: 0,
//     translateX: 140
//   }
// ];

export default function NivoPieChartExample() {
  return (
    <div>
      <div style={{ height: '400px' }}>
        <ResponsivePie data={data}
                       colors={colors}
                       padAngle={3}
                       cornerRadius={0}
                       enableArcLabels={false}
                       innerRadius={0.5}
                       enableArcLinkLabels={true}
                       arcLinkLabel={d => `${d.id} (${d.value})`}
                       margin={{
                         top: 20,
                         bottom: 20,
                         left: 40,
                         right: 40
                       }}
                       legends={[
                         {
                           anchor: 'bottom-right',
                           direction: 'column',
                           itemWidth: 100,
                           itemHeight: 20,
                           itemsSpacing: 0
                         }
                       ]}
        />
      </div>
      <NxStatefulAccordion defaultOpen={false}>
        <NxAccordion.Header>
          <NxAccordion.Title>Foo</NxAccordion.Title>
        </NxAccordion.Header>
      </NxStatefulAccordion>
    </div>
  );
}
