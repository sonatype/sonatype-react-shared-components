/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxStatefulAccordion, NxAccordion } from '@sonatype/react-shared-components';

// import { data } from './data';

import { Pie } from '@nivo/pie';

const colors = [
  '#235ECA',
  '#C9DEFC'
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

const data = [
  {
    id: 'a',
    value: 40
  },
  {
    id: 'b',
    value: 60
  }
];

export default function NivoPieChartExample() {
  return (
    <div>
      <div style={{ height: '400px' }}>
        <Pie data={data}
             colors={colors}
             cornerRadius={0}
             innerRadius={0.5}
             enableArcLabels={false}
             enableArcLinkLabels={false}
             width={100}
             height={100}
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
